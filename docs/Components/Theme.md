---
title: '全局主题'
---
此为自定义前端组件的主题样式，方便查阅

<div class="color_card_style" style="background-color:var(--border-color)">border</div>
<div class="color_card_style" style="background-color:var(--text-lighter-color)">text-lighter</div>
<div class="color_card_style" style="background-color:var(--text-darker-color)">text-darker</div>

<div class="color_card_style" style="background-color:var(--blue)">blue</div>
<div class="color_card_style" style="background-color:var(--pink)">pink</div>
<div class="color_card_style" style="background-color:var(--yellow)">yellow</div>
<div class="color_card_style" style="background-color:var(--grey)">grey</div>

```css
:root {
    --border-color-light: #A8ABB2;
    --text-lighter-color-light: #FFFFFF;
    --text-darker-color-light: #000000;

    --border-color-dark: #E4E7ED;
    --text-lighter-color-dark: #000000;
    --text-darker-color-dark: #FFFFFF;
}
:root {
    --blue: #03a9f4;
    --pink: #f441a5;
    --yellow: #ffeb3b;
    --grey: #DCDCDC;
}
html:not(.dark) {
    --border-color: var(--border-color-light);
    --text-lighter-color: var(--text-lighter-color-light);
    --text-darker-color: var(--text-darker-color-light);
}

html.dark {
    --border-color: var(--border-color-dark);
    --text-lighter-color: var(--text-lighter-color-dark);
    --text-darker-color: var(--text-darker-color-dark);
}
```