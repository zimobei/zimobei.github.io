<template>
    <label class="check-box">
        <input id="check" type="checkbox" title="switch" hidden>
        <span></span>
        <i></i>
    </label>
</template>
<style scoped>
.check-box{
    /* 定义鼠标经过时指针变为手 */
    cursor: pointer;
    /* 确保图标处于背景中 */
    position: relative;
}
/* 开关背景基础样式 */
.check-box span{
    display: block;
    /**设置底部尺寸 */
    width: 80px;
    height: 40px;
    /**设置背景颜色 */
    background-color: var(--pink);
    /**设置圆角边框 */
    border-radius: 40px;
    /**添加阴影，实现立体效果 */
    box-shadow: 
        inset 0 1px 8px rgba(0, 0, 0, 0.3),
        inset 0 -2px 2px rgba(0, 0, 0, 0.3),
        2px 2px 2px #ccc;
    /**设置过度 */
    transition: all .5s;
}
/* 开关图标基础样式*/
.check-box i{
    /**定义开关位置 */
    position: absolute;
    left: 0;
    top: 0;
    /**定义开关尺寸 */
    width: 40px;
    height: 40px;
    /**定义开关颜色 */
    background-color: #f1f1f1;
    /**设置开关圆形 */
    border-radius: 50%;
    /**缩小开关，确保开关处于背景之中 */
    transform: scale(0.9);
    /**添加阴影，实现立体效果 */
    box-shadow: 
        0 2px 6px rgba(0, 0, 0, 0.5),
        inset 0 3px 3px rgba(255, 255, 255, 0.8);
    /**添加过渡 */
    transition: all .5s;
}

/**设置input被选中时的开关样式 */
/* 开关图标变化 */
.check-box input:checked ~i{
    left: 40px;
}
/* 开关内容变化 */
.check-box input:checked ~span{
    background-color: var(--blue);
}
</style>