<template>
    <div class="card_style mo_card">
        <span></span>
    </div>
</template>
<style scoped>
.mo_card {
    margin-top: 40px;
}
/* 主元素基础样式 */
.mo_card {
    /* 去除初始样式 */
    overflow: visible;
    transition: .8s;
}
.mo_card:hover {
    transform: translateY(-20px);
}
/* 伪元素样式 */
.mo_card::before,
.mo_card::after {
    content: '';
    /* 定义伪元素大小和位置与主元素重合 */
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    /* 定义伪元素背景色渐变 */
    background: linear-gradient(315deg, var(--blue), var(--pink));
}
/* after伪元素关键样式 */
.mo_card::after {
    /* 设置after高斯模糊 */
    filter: blur(20px);
}
/* 主元素内容基本样式 */
.mo_card span {
    /* 定义主元素内容背景色半透明 */
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
}
/* 主元素内容关键样式 */
.mo_card span {
    /* 主元素内容内缩一定距离，空出一部分伪元素作为边框 */
    inset: 4px;
    /* 主元素内容层级最高，防止after伪元素影响 */
    z-index: 2;
}
</style>