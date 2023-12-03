---
title: transition
---

# transition
实现一种状态平滑地过渡到另一种状态
::: tip
以下transition属性可以单独使用，也可以组合使用
:::

## transition-property
规定应用过渡的CSS属性的名称。默认为“all”

| 属性      | 描述                                         |
|-----------|----------------------------------------------|
|none       |没有属性会获得过渡效果                          |
|all        |所有属性都会获得过渡效果                        |
|property   |定义应用过渡效果的CSS属性名称列表，列表以逗号分隔|

## transition-duration
定义过渡效果花费的时间。默认为0

## transition-timing-fuction
规定过渡效果的时间曲线。默认是“ease”

|属性|描述|
|---|---|
|linear|规定以相同速度开始至结束的过渡效果  cubic-bezier(0,0,1,1)|
|ease|规定慢速开始，然后变快，然后慢速结束的过渡效果 cubic-bezier(0.25,0.1,0.25,1)|
|ease-in|规定以慢速开始的过渡效果 cubic-bezier(0.42,0,1,1)|
|ease-out|规定以慢速结束的过渡效果 cubic-bezier(0,0,0.58,1)|
|ease-in-out|规定以慢速开始和结束的过渡效果 cubic-bezier(0.42,0,0.58,1)|
|cubic-bezier(n,n,n,n)|在 cubic-bezier 函数中定义自己的值。可能的值是0至1之间的数值|

## transition-delay
规定过渡效果延迟时间。默认是0
