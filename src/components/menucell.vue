<template>
  <div class="container">
    <div class="cell flip-in-ver-right" v-for="(item,index) in this.list" :key="index">
      <a :href="item.trueurl" style="height:100%;width:100%" @click="addcell($event,item.flag)">
        <div class="topword_">{{item.topword}}</div>
        <div class="url_">{{item.url}}</div>
        <img v-if="!item.flag" src="../assets/deletecell.png" alt="" class="deletecellimg" @click.stop="deletecell($event,index)">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: JSON.parse(localStorage.getItem('list')) || [{ topword: 'A', url: 'acfun.cn', trueurl: 'https://www.acfun.cn/' }, { topword: 'B', url: 'baidu.com', trueurl: 'https://www.baidu.com/' }, { topword: 'C', url: 'csdn.net', trueurl: 'https://www.csdn.net/' }, { topword: 'D', url: 'djangoproject.com', trueurl: 'https://docs.djangoproject.com/zh-hans/2.0/' }, { topword: 'E', url: 'echarts.apache.org', trueurl: 'https://echarts.apache.org/zh/index.html' }, { topword: '+', url: '自定义添加', trueurl: '#', flag: true }]
    }
  },
  methods: {
    stringclear (string) {
      return string.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/.*/, '')
    },
    addcell (event, flag) {
      if (flag) {
        const urlinput = prompt('请输入要保存的网址', '')
        const cell = { url: this.stringclear(urlinput), topword: this.stringclear(urlinput)[0], trueurl: urlinput }
        this.list.splice(-1, 0, cell)
        localStorage.setItem('list', JSON.stringify(this.list))
        console.log(this.list)
        event.preventDefault()
      }
    },
    deletecell (event, index) {
      this.list.splice(index, 1)
      localStorage.setItem('list', JSON.stringify(this.list))
      event.preventDefault()
    }
  }
}
</script>

<style lang='less' scoped>
.container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content:flex-start;
  height: auto;
  padding: 5vw;
}
  .cell{
    height: 40vw;
    width: 40vw;
    margin-bottom: 5vw;
    background-color: rgba(255, 255, 255, 0.6);
    overflow: hidden;
    a{
      display: flex;
      position: relative;
      flex-direction: column;
      align-items: center;
      text-decoration:none;
      color: black;
      padding: 0;
      .topword_{
        font-size: 20vw;
        line-height: 30vw;
      }
      .url_{
        font-size: 5vw;
        line-height: 8vw;
      }
      .deletecellimg{
        position: absolute;
        height: 25px;
        width: 25px;
        right: 0;
        top: 0;
      }
    }
  }

  @media screen and (min-width: 500px) {
    .container{
      justify-content: flex-start;
      padding: 0;
      .cell{
      width: 20vw;
      height: 12vw;
      margin-bottom: 2vw;
      margin-left: 4vw;
      a{
        .topword_{
          font-size: 10vw;
          line-height: 10vw;
        }
        .url_{
          font-size: 1vw;
          line-height: 2vw;
        }
      }
    }
    }
  }
</style>
