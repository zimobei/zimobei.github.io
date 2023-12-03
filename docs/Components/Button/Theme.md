---
title: '按钮基础样式'
---

# 按钮基础样式
在按钮组件的设计过程中，为了避免不必要的代码影响阅读效率，再次自定义了一些基础样式

## button_style
<button class="button_style">示例</button>

```css
.button_style {
    position: relative;
    /* 定义尺寸 */
    height: 60px;
    width: 200px;
    /* 定义边框样式 */
    border-radius: 5px;
    border: 1px solid var(--border-color);
    /* 定义背景颜色 */
    background-color: var(--blue);
    /* 定义内容样式 */
    color: var(--text-lighter-color);
    font-size: 24px;
    /* 定义子元素居中 */
    display: flex;
    justify-content: center;
    align-items: center;
    /* 禁止文本选中 */
    -webkit-user-select: none;
    user-select: none;
}
```
