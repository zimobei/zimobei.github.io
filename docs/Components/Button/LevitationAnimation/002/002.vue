<template>
    <button class="button_style mo_button">Hover</button>
</template>
<style scoped>
/* 初始化伪元素基本样式 */
.mo_button::before {
    /* 设置伪元素尺寸 */
    height: 100%;
    width: 10%;
    /* 伪元素内容样式 */
    content: '';
}
/* 主元素关键样式 */
.mo_button {
    /* 控制内容变化延迟 */
    transition: all .3s;
    /* 溢出隐藏（可以遮盖超出组件部分的伪元素） */
    overflow: hidden;
}
/* 伪元素关键样式 */
.mo_button::before {
    /* 设置绝对定位（帮助伪元素脱离文档，可以保证伪元素变化时不会影响（挤压）主元素样式） */
    position: absolute;
    left: -40%;
    /* 定义背景 */
    background: linear-gradient(90deg, transparent, #fff, transparent);
    /* 设置斜切动画 */
    transform: skew(-45deg);
    transition: all 0.3s;
}
/* 主元素变化 */
.mo_button:hover {
    color: var(--text-darker-color);
    background-color: var(--pink);
}
/* 伪元素变化*/
.mo_button:hover::before {
    left: 120%;
}
</style>