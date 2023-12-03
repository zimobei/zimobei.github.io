<template>
    <!-- 引入阿里云图标 -->
    <link rel="stylesheet" href="http://at.alicdn.com/t/c/font_4096975_pswyqyk8tdo.css">
    <div class="background">
        <ul class="menu mo_menu">
            <!-- 在VUE中可以通过v-for进行设计，不需要大量繁琐的代码 -->
            <li>
                <span class="iconfont icon-QQ"></span>
                <span class="iconfont icon-QQ"></span>
            </li>
            <li>
                <span class="iconfont icon-douyin"></span>
                <span class="iconfont icon-douyin"></span>
            </li>
        </ul>
    </div>
</template>
<style scoped>
.background {
    /* 定义尺寸 */
    height: 160px;
    /* 子元素居中 */
    display: flex;
    justify-content: center;
    align-items: center;
}
.mo_menu li span{
    /* 定义过渡效果 */
    transition: all 0.5s ease-in-out;
}
/* 定义菜单项活跃项样式 */
.mo_menu li span:first-child{
    /* 默认活跃项不显示，即不活跃 */
    height: 0;
    /* 设置活跃项层级最高 */
    z-index: 2;
}
/* 定义菜单第一项活跃项样式 */
.mo_menu li:nth-child(1) span:first-child{
    /* 初始化时在活跃项底部添加边框作为魔术棒 */
    border-bottom: 1px solid var(--blue);
}
/* 定义菜单第一项活跃项活跃时样式 */
.mo_menu li:nth-child(1):hover span:first-child{
    color: var(--blue);
    /* 活跃项高度恢复，结合过渡动画实现底边框魔术棒的移动效果 */
    height: 100%;
}
.mo_menu li:nth-child(2) span{
    font-size: 47px;
}
/* 定义菜单第二项活跃项样式 */
.mo_menu li:nth-child(2) span:first-child{
    /* 初始化时在活跃项底部添加边框作为魔术棒 */
    border-bottom: 1px solid var(--pink);
}
/* 定义菜单第二项活跃项活跃时样式 */
.mo_menu li:nth-child(2):hover span:first-child{
    color: var(--pink);
    /* 活跃项高度恢复，结合过渡动画实现底边框魔术棒的移动效果 */
    height: 100%;
}
</style>