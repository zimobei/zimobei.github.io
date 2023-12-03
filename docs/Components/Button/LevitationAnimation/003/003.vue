<template>
    <button class="button_style mo_button">Hover</button>
</template>
<style scoped>
/* 伪元素基本样式 */
.mo_button::before {
    content: '';
}
/* 定义伪元素和主元素的流光色彩一致 */
.mo_button, .mo_button::before {
    /* 定义背景色 */
    background: linear-gradient(90deg, var(--blue), var(--pink), var(--yellow), var(--blue));
    /* 设置背景大小 */
    background-size: 400%;
}
/* 伪元素关键样式 */
.mo_button::before {
    /* 使伪元素脱离文档流 */
    position: absolute;
    /* 定义伪元素包裹主元素 */
    left: -5px;
    top: -5px;
    right: -5px;
    bottom: -5px;
    /* 定义盒子层级,防止伪元素覆盖主元素 */
    z-index: -1;
    /* 完全透明 */
    opacity: 0;
    /* 设置过渡效果 */
    transition: all 1s;
}
/* 主元素变化 */
.mo_button:hover {
    animation: animate 8s linear infinite;
}
/* 伪元素变化 */
.mo_button:hover::before {
    /* 设置模糊效果 */
    filter: blur(20px);
    /* 完全不透明,显示伪元素 */
    opacity: 1;
}
/* 定义过渡动画 */
@keyframes animate {
    0% {
        background-position: 0 0;
    }

    100% {
        background-position: 400% 0;
    }
}</style>