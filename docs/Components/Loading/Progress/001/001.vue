<script setup lang="ts">
/**TypeScript代码实现进度条周期变化，实际运用时需要使用其他方式获取实际进度 */
import { onMounted, ref } from 'vue';
//初始化进度条进度，通过VUE数据绑定等方式映射到前端样式中
const progress = ref(0)
//周期性改变progress的数值
const UpdateProgress = () =>{
    if(progress.value === 100){
        progress.value = 0
    }
    else{
        progress.value++;
    }
}
//VUE生命周期钩子函数
onMounted(()=>{
    window.setInterval(UpdateProgress,120)
})
</script>
<template>
    <div class="percent">
        <svg>
            <circle cx="70" cy="70" r="70"/>
            <circle cx="70" cy="70" r="70" :style="`stroke-dashoffset: calc(440 - 440 * (${progress}/100));`"/>
        </svg>
        <div class="number">
            <h3>
                <span>{{ progress }}</span>
                <span>%</span>
            </h3>
        </div>
    </div>
</template>
<style scoped>
/* 盒子样式 */
.percent{
    position: relative;
    /* 定义背景尺寸 */
    width: 100%;
    height: 100%;
    /* 子元素居中 */
    display: flex;
    justify-content: center;
    align-items: center;
}
.percent svg{
    /* 关键尺寸，调整时需要特别注意 */
    width: 150px;
    height: 150px;
}
.percent svg circle{
    fill: none;
    stroke-width: 10;
    transform: translate(5px,5px);
    /**设置虚线长度 */
    stroke-dasharray: 440;
    /**设置偏移量，控制空白间隙 */
    stroke-dashoffset: 440;
}
.percent svg circle:nth-child(1){
    stroke-dashoffset: 0;
    stroke: var(--grey);
}
.percent svg circle:nth-child(2){
    /* stroke-dashoffset: calc(440 - 440 * (20/100)); */
    stroke: var(--blue);
}
.percent .number{
    position: absolute;
    color: var(--blue);
}
.percent .number h3{
    margin-top: 10px;
}
.percent .number span:nth-child(1){
    font-size: 36px;
}
.percent .number span:nth-child(2){
    font-size: 24px;
}
</style>