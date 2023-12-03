<template>
    <!-- 引入阿里云图标 -->
    <link rel="stylesheet" href="http://at.alicdn.com/t/c/font_4096975_pswyqyk8tdo.css">
    <div class="background">
        <ul class="menu">
            <!-- 在VUE中可以通过v-for进行设计，不需要大量繁琐的代码 -->
            <li>
                <span style="--i:1"></span>
                <span style="--i:2"></span>
                <span style="--i:3"></span>
                <span style="--i:4"></span>
                <span style="--i:5" class="iconfont icon-QQ"></span>
            </li>
            <li>
                <span style="--i:1"></span>
                <span style="--i:2"></span>
                <span style="--i:3"></span>
                <span style="--i:4"></span>
                <span style="--i:5" class="iconfont icon-douyin"></span>
            </li>
        </ul>
    </div>
</template>
<style scoped>
.background{
    /* 定义尺寸 */
    height: 160px;
    /* 子元素居中 */
    display: flex;
    justify-content: center;
    align-items: center;
}
ul li{
    /* 角度转换（实现透视效果） */
    transform: rotate(-30deg) skew(25deg);
}
ul li span{
    /* 定义文本颜色（背景颜色单独定义） */
    color: white;
    /* 添加过渡效果 */
    transition: 0.5s;
    /* 子元素居中 */
    display: flex;
    justify-content: center;
    align-items: center;
    /* 定义图标大小 */
    font-size: 30px !important;
}
ul li:hover span{
    /* 通过变量i设置偏移量
        注意：clac（）方法中使用运算符时，运算符两侧一定要加空格 */
    transform: translate(calc(11px * (var(--i) - 1)),calc(-11px * (var(--i) - 1)));
    opacity: calc(0.2 * var(--i));
}
ul li:nth-child(1) span{
    background: var(--blue);
}
ul li:nth-child(2) span{
     background: var(--pink);
}
</style>