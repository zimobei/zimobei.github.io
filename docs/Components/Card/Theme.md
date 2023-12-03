---
title: 卡片基础样式
---

# 卡片基础样式
在卡片组件的设计过程中，为了避免不必要的代码影响阅读效率，再次自定义了一些基础样式
## card_style
<div class="card_style">示例</div>

```css
.card_style{
    /* 定义尺寸 */
    height: 300px;
    width: 300px;
    position: relative;
    /* 定义卡片内边距 */
    padding: 20px;
    /* 防止padding挤压卡片 */
    box-sizing: border-box;
    /* 定义圆角 */
    border-radius: 8px;
    /* 定义盒子阴影，增强立体效果 */
    box-shadow: 0 5px 15px rgba(0, 0, 0, .1);
    /* 定义卡片内容居中 */
    text-align: center;
    /* 定义溢出隐藏 */
    overflow: hidden;
}
```