---
title: position
---

# position(定位)
用于控制元素显示位置

::: tip
脱离文档流对象：  
即元素所在位置不会影响其他元素  
:::

## static
HTML 元素的默认值，即没有定位  
遵循文档流对象  
static定位的元素不会受到 top, bottom, left, right影响  

## fixed
以浏览器窗口的左上角为参考点进行定位  
脱离文档流对象    
注意: Fixed 定位在 IE7 和 IE8 下需要描述 !DOCTYPE 才能支持  

## relative
以元素本身所在位置为参考点进行定位
遵循正常的文档流对象  

## absolute
相对于层级最近的父元素进行定位  
脱离文档流对象  
注意：  
如果absolute元素的父元素没有设置position，即为默认的position:static，则absolute元素会寻找父元素的父元素进行定位，循环往复，直到找到第一个非默认   position的父元素，否则就以页面本身做定位  