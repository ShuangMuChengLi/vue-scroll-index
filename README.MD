This is a Vue.js's directive that let the html DOM can be move with mouse

# Install
```bash
npm install vue-scroll-index
```
# Usage
```bash
import Vue from 'vue';
import VueScrollIndex from 'vue-scroll-index';
Vue.use(VueScrollIndex);

```

```bash
<template>
  <div>
    <div
      class="nav-wrapper"
    >
      <h2>
        导航
      </h2>
      <p>当前: {{ currentIndex }}</p>
      <div>
        <el-button
          type="primary"
          @click="ulShow = !ulShow"
        >显示/隐藏</el-button>
      </div>
      <ul
        class="nav"
      >
        <li
          v-for="(item, key) in 10"
          :key="'nav' + key"
          class="nav-item"
          :class="{ active: key === currentIndex }"
        >
          <header>{{ key }}</header>
        </li>
      </ul>
    </div>

    <ul
      v-if="ulShow"
      id="list"
      v-scroll-index="callback"
      class="list"
    >
      <li
        v-for="(item, key) in 10"
        :id="'item' + key"
        :key="key"
        class="item"
      >
        <header>{{ key }}</header>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AnchorTest',
  data(){
    return {
      currentIndex:0,
      ulShow:true
    };
  },
  mounted() {

  },
  methods:{
    callback(index){
      console.log(index);
    }
  }
};
</script>

<style scoped lang="less">
  .list{
    height: 300px;
    overflow-y: auto;
    float: left;
  }
  .item{
    width: 300px;
    height: 200px;
    border: 1px solid #333;
    margin: 10px;
    line-height: 200px;
    text-align: center;
    font-size: 20px;

  }
  .nav-wrapper{
    line-height: 2;
    width: 200px;
    float: left;
    padding:10px;
    .nav-item{
      &.active{
        color: #ff0000;
      }
    }
  }
</style>


```
