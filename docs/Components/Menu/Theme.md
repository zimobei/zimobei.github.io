---
title: 菜单基础样式
---

# 菜单基础样式

## menu

<link rel="stylesheet" href="http://at.alicdn.com/t/c/font_4096975_pswyqyk8tdo.css">
<ul class="menu">
    <li>
        <span class="iconfont icon-QQ"></span>
    </li>
    <li>
        <span class="iconfont icon-QQ"></span>
    </li>
    <li>
        <span class="iconfont icon-QQ"></span>
    </li>
</ul>

```css
.menu {
    position: relative;
    /* flex下，子元素默认行排列 */
    display: flex;
}
.menu li {
    position: relative;
    margin: 0px !important;
    /* 定义尺寸 */
    width: 60px;
    height: 60px;
    /* 定义背景色 */
    background: transparent;
    /* 去除列表圆点 */
    list-style: none;
}
.menu li span {
    /* 定义位置 */
    position: absolute;
    top: 0;
    left: 0;
    /* 定义尺寸 */
    width: 100%;
    height: 100%;
    /* 设置行高 */
    line-height: 60px;
    /* 定义图标大小 */
    font-size: 60px !important;
    /* 设置鼠标经过时指针变为手 */
    cursor: pointer;
    
}
```