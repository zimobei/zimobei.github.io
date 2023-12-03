<template>
    <div class="card_style mo_card">
        <div class="icon">01</div>
        <div class="content">
            <h3>Moper</h3>
            <p>天下皆白</p>
            <p>唯我独黑</p>
            <p>非公墨门</p>
            <p>兼爱平生</p>
            <button class="button_style">动手试一试</button>
        </div>
    </div>
</template>
<style scoped>
/* 卡片基础样式 */
.mo_card {
    /* 内容垂直排列水平居中 */
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* 在卡片前（左）添加半透明盒子，正好遮盖盒子左侧 */
.mo_card::before {
    content: '';
    width: 50%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(255, 255, 255, .2);
    z-index: 2;
}

/* 图标基础样式 */
.mo_card .icon {
    /* 定义尺寸 */
    width: 16%;
    height: 16%;
    /* 定义颜色和背景色 */
    color: white;
    background: var(--blue);
    box-shadow: 0 0 0 0 var(--blue);
    /* 圆形图标 */
    border-radius: 50%;
    /* 定义字体大小 */
    font-size: 20px;
    /* 内容居中 */
    display: flex;
    justify-content: center;
    align-items: center;
}

/* 内容基础样式 */
.mo_card .content {
    color: var(--text-darker-color);
}

/* 标题样式 */
.mo_card .content h3 {
    /* 修改字体大小 */
    font-size: 16px;
    margin: 5px 0;
}

/* 段落样式 */
.mo_card .content p {
    /* 设置行高 */
    line-height: 16px;
}

/* 超链接（按钮）样式 */
.mo_card .content .button_style {
    /* 修改尺寸 */
    height: 30px;
    width: 70px;
    /* 修改字体大小 */
    font-size: 10px;
    /* 定义阴影 */
    box-shadow: 0 2px 5px rgba(0, 0, 0, .2);
    /* 定义按钮层级，确保按钮始终处于最上方 */
    z-index: 3;
}

/* 图标关键样式 */
.mo_card .icon {
    /* 添加过渡 */
    transition: all 0.8s;
}

/* 内容关键样式 */
.mo_card .content {
    transition: all 1s;
}

/* 图标变化 */
.mo_card:hover .icon {
    /* icon背景色扩散，覆盖整个卡片 */
    box-shadow: 0 0 0 400px var(--blue);
}

/* 内容变化 */
.mo_card:hover .content {
    /* 文本颜色发生改变 */
    color: var(--text-lighter-color);
}</style>