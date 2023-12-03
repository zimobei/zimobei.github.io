<template>
    <div class="light">
    </div>
</template>
<style scoped>
.light{
    /**设置球形 */
    width: 100px;
    height: 100px;
    /* border: 1px solid #000; */
    border-radius: 50%;
    animation: light 1s ease-in-out infinite alternate;
}
/**定义动画 */
@keyframes light{
    /**box-shadow为阴影效果 
       属性为：X轴偏移量、Y轴偏移量、模糊半径、扩散半径、颜色*/
    from{
        box-shadow: 0px 0px 4px #f00;
    }
    to{
        box-shadow: 0px 0px 24px #f00;
    }
}
</style>