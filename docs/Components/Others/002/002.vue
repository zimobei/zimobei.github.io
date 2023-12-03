<template>
    <div class="heart"></div>
</template>
<style scoped>
.heart{
    margin: 100px 0 100px 0;
}
/* 爱心（定义整体属性） */
.heart,
.heart::before,
.heart::after {
    /* 定义尺寸 */
    width: 100px;
    height: 100px;
    /* 定义颜色 */
    background-color: #FF0000;
    /* 添加盒子阴影 */
    box-shadow: -10px 10px 90px #FF0000;
}

/* 爱心(底部) */
.heart {
    position: relative;
    /* 旋转角度 */
    transform: rotate(-45deg);
    /* 添加动画 */
    animation: bounce .8s linear infinite;
}

/* 爱心（两侧半圆） */
.heart::before,
.heart::after {
    position: absolute;
    content: '';
    /* 设置圆角 */
    border-radius: 50px;
}

/* 爱心(左侧半圆) */
.heart::before {
    top: -50%;
}

/* 爱心(右侧半圆) */
.heart::after {
    right: -50%;
}

@keyframes bounce {
    0% {
        transform: rotate(-45deg) scale(1.07);
    }

    80% {
        transform: rotate(-45deg) scale(1);
    }

    100% {
        transform: rotate(-45deg) scale(0.8);
    }
}</style>