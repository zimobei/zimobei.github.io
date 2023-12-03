---
title: overflow
---

<style>
.mo_box{
    display: block;
    height: 160px;
    width: 200px;
    background-color: aqua;
}
</style>

# overflow
用于控制内容溢出元素框时显示的方式

::: warning 注意
overflow只作用于指定高度的块级元素上。
:::

## visible
overflow的默认值。
内容不会被修剪，会呈现在元素框之外。

<div class="mo_box" style="overflow:visible">
    <p>display: block;</p>
    <p>height: 100px;</p>
    <p>width: 200px;</p>
    <p>background-color: aqua;</p>
    <p>overflow: visible;</p>
</div>

## hidden
内容会被修剪，并且其余内容是不可见的。

<div class="mo_box" style="overflow:hidden">
    <p>display: block;</p>
    <p>height: 100px;</p>
    <p>width: 200px;</p>
    <p>background-color: aqua;</p>
    <p>overflow: hidden;</p>
</div>

## scroll
内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。

<div class="mo_box" style="overflow:scroll">
    <p>display: block;</p>
    <p>height: 100px;</p>
    <p>width: 200px;</p>
    <p>background-color: aqua;</p>
    <p>overflow: scroll;</p>
</div>
<br/>
<div class="mo_box" style="overflow:scroll">
    即便块级元素中内容不多，仍然显示滚动条
</div>

## auto
如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。

<div class="mo_box" style="overflow:auto">
    <p>display: block;</p>
    <p>height: 100px;</p>
    <p>width: 200px;</p>
    <p>background-color: aqua;</p>
    <p>overflow: auto;</p>。
</div>
<br/>
<div class="mo_box" style="overflow:auto">
    块级元素中内容不多时，滚动条隐藏
</div>

## inherit
规定应该从父元素继承 overflow 属性的值。
