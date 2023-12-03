<template>
    <div class="background">
        <button class="button_style mo_button">Hover</button>
    </div>
</template>
<style scoped>
/* 定义背景，使主元素颜色和背景颜色一致 */
.background{
    height: 100px;
    width: 300px;
    background-color: var(--blue);
    display: flex;
    justify-content: center;
    align-items: center;
}
/* 去除主元素默认样式 */
.mo_button{
    border-style: none;
}
/* 主元素关键样式 */
.mo_button{
    /* 设置多重阴影 */
    box-shadow: 
        10px 10px 15px #025a81,
        -10px -10px 15px #04f8ff;
    /* 过渡效果 */
    transition: all .3s ease-out;
}
/* 主元素变化 */
.mo_button:hover{
    /* 使字体大小从24px降到20px，增加立体效果 */
    font-size: 20px;
    /* 先消除两个外侧的阴影，然后在主元素内侧再设置两个阴影 */
    box-shadow: 
        0px 0px 0px #025a81,
        0px 0px 0px #04f8ff,
        inset 5px 5px 10px #04f8ff,
        inset -5px -5px 10px #025a81;
}
</style>