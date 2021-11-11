<template>
  <div id="app">
    <!-- 旋转组件 -->
    <div>
      <Rotateimage @refresh='refreshsearch'></Rotateimage>
    </div>
    <!-- 搜索栏 -->
    <header
      class="search-input"
    >
      <form :action= this.url_ method="get">
        <input class="sousuo" type="text" placeholder="请输入您的搜索关键词" :name= this.search_key />
        <button class="anniu" type="submit">{{this.name_}}</button>
      </form>
    </header>
    <!-- 单元格栏 -->
    <div>
      <menucell></menucell>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Rotateimage from './components/Rotateimage'
import menucell from './components/menucell'
export default {
  components: { Rotateimage, menucell },
  data () {
    return {
      url_: 'https://www.baidu.com/s',
      name_: '百度搜索',
      search_key: 'wd'
    }
  },
  methods: {
    refreshsearch (data) {
      if (data === 0) {
        this.url_ = 'https://www.baidu.com/s'
        this.name_ = '百度搜索'
        this.search_key = 'wd'
        $('.anniu').css('background-color', '#4662d9')
      } else if (data === 1) {
        this.url_ = 'https://www.sogou.com/web'
        this.name_ = '搜狗搜索'
        this.search_key = 'query'
        $('.anniu').css('background-color', '#ee8040')
      } else if (data === 2) {
        this.url_ = 'https://cn.bing.com/search'
        this.name_ = '必应搜索'
        this.search_key = 'q'
        $('.anniu').css('background-color', '#007daa')
      } else if (data === 3) {
        this.url_ = 'https://www.google.com.hk/search'
        this.name_ = '谷歌搜索'
        $('.anniu').css('background-color', '#ea4335')
        this.search_key = 'q'
      } else if (data === 4) {
        this.url_ = 'https://search.yahoo.com/search'
        this.name_ = '雅虎搜索'
        $('.anniu').css('background-color', '#1a8afd')
        this.search_key = 'p'
      } else if (data === 5) {
        this.url_ = 'https://www.so.com/s'
        this.name_ = '360搜索'
        this.search_key = 'q'
        $('.anniu').css('background-color', '#19b955')
      }
    }
  }
}
</script>

<style lang="less">
// css reset
* {
  box-sizing: border-box;
}
*:after,
*:before {
  box-sizing: border-box;
}
* {
  padding: 0;
  margin: 0;
}

body {
  background-image: url('./assets/background.png');
  background-size:cover;
  background-attachment:fixed;
  background-repeat: no-repeat;
}
.search-input {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  input {
    height: 30px;
    width: 70vw;
    padding-left: 4px;
    vertical-align: middle;
    outline-style: none ;
    border: none;
    border: 1px solid #ccc;
    border-radius: 3px 0 0 3px;
    font-family: "Microsoft soft";
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  }
  button {
    height: 30px;
    width: auto;
    vertical-align: middle;
    padding: 2px;
    border: none;
    background-color: #4662d9;
    color: #fff;
    outline: none;
    font-weight: 800;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  }
}

footer{
  height: 600px;
  width: 100%;
  margin-top: 60px;
}

@media screen and (min-width : 500px){
  body{
    background-image: url('./assets/backgroundwin.png');
  }
}
</style>
