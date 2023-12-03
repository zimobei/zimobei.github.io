<script setup>
//ts/js代码逻辑实现动态生成波纹
//1、注册点击事件
const ClickWavyButton = (e) =>{
    //获取组件
    let target = e.target
    //获取鼠标点击时相对坐标
    let BoundingBox = target.getBoundingClientRect()
    let x = e.clientX - BoundingBox.left
    let y = e.clientY - BoundingBox.top
    //代码生成组件
    let ripple = document.createElement('span')
    ripple.setAttribute('class','wavy')
    ripple.style.left = x + 'px'
    ripple.style.top = y + 'px'
    target.appendChild(ripple)
    //组件运行后删除
    ripple.addEventListener('animationend', ()=> ripple.remove() )
}
</script>
<template>
    <button class="button_style mo_button" @click="ClickWavyButton($event)">
        点击
    </button>
</template>
<style scoped>
/* 按钮基础样式 */
.mo_button {
    /**设置背景颜色渐变 */
    background: linear-gradient(90deg, #0162c8, #55e7fc);
    /**设置盒子阴影，增加立体效果 */
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
    overflow: hidden;
}
</style>
<style>

/* 注意：
    由于波纹特效所绑定的<span>标签由TS/JS代码生成，
    并不会像其他DOM元素一样被<style scope>定义一个不重复的data属性，
    所以<style scope>中定义的CSS样式并不会发挥作用，
    需要在<style>中定义*/
/* 波纹效果关键样式 */
.wavy{
    /**定义波纹居中 */
    position: absolute;
    transform: translate(-50%, -50%);
    /**设置波纹半透明 */
    opacity: 0.5;
    border-radius: 50%;
    background-color: #fff;
    /*清除波纹对按钮点击的影响 */
    pointer-events: none;
    animation: animate 1s linear 1;
}
@keyframes animate{
    0%{
        width: 0;
        height: 0;
        opacity: 0.5;
    }
    100%{
        width: 500px;
        height: 500px;
        opacity: 0;
    }
}
</style>