<template>
    <button class="button_style mo_button">Hover</button>
</template>
<style scoped>
/* 初始化主元素基本样式 */
.mo_button {
    /**设置背景颜色透明 */
    background-color: transparent;
    /* 设置文本颜色 */
    color: var(--text-darker-color);
}

/* 初始化伪元素基本样式 */
.mo_button::before {
    /* 设置伪元素尺寸 */
    height: 100%;
    width: 100%;
    /* 设置伪元素背景颜色 */
    background-color: var(--blue);
    /* 伪元素内容样式 */
    content: '';
}

/* 主元素关键样式 */
.mo_button {
    /* 控制内容变化延迟 */
    transition: all 1s;
    /* 溢出隐藏（可以遮盖超出组件部分的伪元素） */
    overflow: hidden;
}

/* 伪元素关键样式 */
.mo_button::before {
    /* 设置伪元素层级 */
    z-index: -1;
    /* 设置绝对定位（帮助伪元素脱离文档，可以保证伪元素变化时不会影响（挤压）主元素样式） */
    position: absolute;
    left: -30px;
    /* 设置宽度为0（确保初始化时伪元素不可见） */
    width: 0;
    /* 设置斜切动画 */
    transition: all 0.5s;
    transform: skewX(45deg);
}

/* 主元素变化 */
.mo_button:hover {
    /* 鼠标经过时，主元素内容颜色在延迟后发生改变 */
    color: var(--text-lighter-color);
}

/* 伪元素关键变化 */
.mo_button:hover::before {
    /**鼠标经过时，伪元素宽度放大，遮盖整个button */
    width: 180%;
}
</style>