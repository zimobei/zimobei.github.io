import{_ as t,o as a,c as i,R as r}from"./chunks/framework.ekaVIUcx.js";const _=JSON.parse('{"title":"transition","description":"","frontmatter":{"title":"transition"},"headers":[],"relativePath":"CSSStudy/transition.md","filePath":"CSSStudy/transition.md"}'),n={name:"CSSStudy/transition.md"},e=r('<h1 id="transition" tabindex="-1">transition <a class="header-anchor" href="#transition" aria-label="Permalink to &quot;transition&quot;">​</a></h1><p>实现一种状态平滑地过渡到另一种状态</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>以下transition属性可以单独使用，也可以组合使用</p></div><h2 id="transition-property" tabindex="-1">transition-property <a class="header-anchor" href="#transition-property" aria-label="Permalink to &quot;transition-property&quot;">​</a></h2><p>规定应用过渡的CSS属性的名称。默认为“all”</p><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td>none</td><td>没有属性会获得过渡效果</td></tr><tr><td>all</td><td>所有属性都会获得过渡效果</td></tr><tr><td>property</td><td>定义应用过渡效果的CSS属性名称列表，列表以逗号分隔</td></tr></tbody></table><h2 id="transition-duration" tabindex="-1">transition-duration <a class="header-anchor" href="#transition-duration" aria-label="Permalink to &quot;transition-duration&quot;">​</a></h2><p>定义过渡效果花费的时间。默认为0</p><h2 id="transition-timing-fuction" tabindex="-1">transition-timing-fuction <a class="header-anchor" href="#transition-timing-fuction" aria-label="Permalink to &quot;transition-timing-fuction&quot;">​</a></h2><p>规定过渡效果的时间曲线。默认是“ease”</p><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td>linear</td><td>规定以相同速度开始至结束的过渡效果 cubic-bezier(0,0,1,1)</td></tr><tr><td>ease</td><td>规定慢速开始，然后变快，然后慢速结束的过渡效果 cubic-bezier(0.25,0.1,0.25,1)</td></tr><tr><td>ease-in</td><td>规定以慢速开始的过渡效果 cubic-bezier(0.42,0,1,1)</td></tr><tr><td>ease-out</td><td>规定以慢速结束的过渡效果 cubic-bezier(0,0,0.58,1)</td></tr><tr><td>ease-in-out</td><td>规定以慢速开始和结束的过渡效果 cubic-bezier(0.42,0,0.58,1)</td></tr><tr><td>cubic-bezier(n,n,n,n)</td><td>在 cubic-bezier 函数中定义自己的值。可能的值是0至1之间的数值</td></tr></tbody></table><h2 id="transition-delay" tabindex="-1">transition-delay <a class="header-anchor" href="#transition-delay" aria-label="Permalink to &quot;transition-delay&quot;">​</a></h2><p>规定过渡效果延迟时间。默认是0</p>',13),o=[e];function d(s,c,l,h,u,p){return a(),i("div",null,o)}const m=t(n,[["render",d]]);export{_ as __pageData,m as default};