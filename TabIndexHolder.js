// 作者：xianyu.wiki
// 添加此插件后，在页面内执行Tab按键操作时，不会让Tab聚焦到浏览器上。
// 另外，页面内其他HTML元素的tabindex的值只能为1~998。如果需要更多大的tabindex值（我相信没有人需要），则修改插件中maxTableIndex的值即可。
// 在HTML页面的底部添加<script src="{你的目录名字}/TabIndexHolder.js"></script>即可。

;(function(){
   var maxTableIndex = 999;
   var tabIndexHolder = document.createElement("div");
   tabIndexHolder.tabIndex = maxTableIndex;
   tabIndexHolder.style.position = "absolute";
   tabIndexHolder.onfocus = function() { $("[tabindex='1']")[0].focus() };
   document.body.appendChild(tabIndexHolder)
})();
