<template>
    <div class="water">
    </div>
</template>
<style scoped>
.water {
    /**设置水滴样式 */
    position: relative;
    /**设置水滴尺寸 */
    width: 200px;
    height: 200px;
    /**以阴影代替边框效果 */
    /* border: 1px solid #000; */
    box-shadow:
        10px 15px 20px rgba(0, 0, 0, 0.3),
        15px 20px 30px rgba(0, 0, 0, 0.1),
        inset 15px 20px 25px rgba(0, 0, 0, 0.5),
        inset -15px -20px 25px rgba(255, 255, 255, 0.5);
    /**设置水滴边角（自定义即可） */
    border-radius: 31% 69% 57% 43% / 46% 26% 74% 54%;
    /**添加动画 */
    animation: action 7s linear alternate infinite;
}

.water::after {
    /**设置光点样式 */
    content: '';
    /**尺寸 */
    width: 10px;
    height: 10px;
    /**位置 */
    position: absolute;
    top: 60px;
    left: 60px;
    /**背景颜色 */
    background-color: rgba(255, 255, 255, 0.8);
    /**边框 */
    border-radius: 63% 37% 70% 30% / 52% 60% 40% 48%;
    /**阴影 */
    box-shadow: 0px 0px 6px 6px rgba(255, 255, 255, 0.8);
}

/**动画设置不同状态下水滴的圆角状态 */
@keyframes action {
    25% {
        border-radius: 46% 54% 65% 35% / 32% 44% 56% 68%;
    }

    50% {
        border-radius: 55% 45% 49% 51% / 50% 28% 72% 50%;
    }

    75% {
        border-radius: 42% 58% 39% 61% / 35% 45% 55% 65%;
    }

    100% {
        border-radius: 52% 48% 57% 43% / 56% 48% 52% 44%;
    }
}</style>