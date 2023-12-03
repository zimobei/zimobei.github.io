<template>
    <div class="loading">
        <span style="--i:1">跳</span>
        <span style="--i:2">动</span>
        <span style="--i:3">的</span>
        <span style="--i:4">文</span>
        <span style="--i:5">字</span>
    </div>
</template>
<style scoped>
.loading {
    /**设计内容样式 */
    font-size: 20px;
}
.loading span {
    /**设置内容行排列 */
    display: inline-block;
    animation: UpDown 1.5s ease-in-out infinite;
    /**通过变量定义每个字符的动画延迟 */
    animation-delay: calc(.1s*var(--i));
}

/**设计动画，应用到每个文字 */
@keyframes UpDown {
    0% {
        transform: translateY(0px);
    }

    20% {
        transform: translateY(-24px);
    }

    40%,
    100% {
        transform: translateY(0px);
    }
}
</style>