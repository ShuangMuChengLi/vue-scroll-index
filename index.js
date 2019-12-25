let directive = {
  bind(list, binding, vnode){
    setTimeout(()=>{
      let items = list.childNodes;
      let offsetTopList = [];
      for(let item of items){
        offsetTopList.push(item.offsetTop);
      }
      vnode.scrollFn = (e)=>{
        let scrollTop = list.scrollTop;
        let index = _.sortedIndex(offsetTopList, scrollTop);
        binding.value(index);
      };
      list.addEventListener('scroll', vnode.scrollFn);
    });
  },
  unbind(list, binding, vnode){
    list.removeEventListener('scroll', vnode.scrollFn);
  }
};

const plugin = {
  install: function(Vue) {
    Vue.directive('scrollIndex', directive);
  },
  directive: directive
};

export default plugin;
