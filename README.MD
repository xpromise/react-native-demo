* 实现上拉更新下拉加载
  * 原来RefreshControl组件在安卓和IOS上有不同的显示，同时不支持自定义UI
  * 使用react-native-pull解决，但是这个库用的是ListView组件（性能不好已被FlatList取代）
  * 所以需要改源码将ListView改为FlatList
  * 同时在Pullable.js中修改部分代码
      * 原来：this.scroll.scrollTo({x:0, y: gesture.dy * -1}); 
      * 现在：this.scroll.scrollToOffset({animated:true, offset: gesture.dy * -1});