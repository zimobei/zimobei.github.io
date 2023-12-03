<template>
    <!-- 引入阿里云图标 -->
    <link rel="stylesheet" href="http://at.alicdn.com/t/c/font_4096975_pswyqyk8tdo.css">
    <div class="item">
        <div><span class="iconfont icon-QQ"></span></div>
    </div>
    <div class="item">
        <div><span class="iconfont icon-douyin"></span></div>
    </div>
</template>
<style scoped>
/* 基本样式 */
.item{
    /* 定义尺寸 */
    height: 60px;
    width: 60px;
    /* 定义外边距 */
    margin: 4px 8px;
    /* 定义圆形 */
    border-radius: 30px;
    /* 定义背景色 */
    background-color: var(--grey);
}
/* 关键样式 */
.item{
    transition: all .5s;
}
.item:hover{
    width: 180px;
}

</style>
