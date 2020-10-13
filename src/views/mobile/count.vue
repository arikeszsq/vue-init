<template>
  <div>

<van-nav-bar title="男儿当自勉" left-text="返回" left-arrow>
  <template #right>
    <van-icon name="search" size="18" @click="alertWelcome"/>
  </template>
</van-nav-bar>

<table border="0"  cellspacing="1" class="table_class">
  <tr>
    <td>项目名称</td>
    <td>统计</td>
  </tr>
  <tr v-for="(item,key,index) in items" :key="index">
    <td>{{item.name}}</td>
    <td>{{item.value}}</td>
  </tr>
</table>

  </div>
</template>   

<script>
import { Dialog } from 'vant';
export default {
  data() {
    return {
      items:[
        // {'name':'test','value':132},
        // {'name':'asdf','value':56},
        // {'name':'asdfsdfsd','value':858},
      ]
    };
  },

  methods:{
    alertWelcome:function(){
     Dialog({ message: 'welcome brother' });
    },
    countList:function(){
      let that = this;
      this.axios.get("basic/info").then(function(res){
        console.log(res.data.data)
        that.items = res.data.data;
      }).catch(function(res){
        console.log(res);
      })
    }
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + '%';
    },
  },
  mounted:function(){
    this.countList();
  }
}
</script>

<style>
.table_class{
  width: 100%;
  margin: 0 auto;
}

.table_class tr td{
  background-color: whitesmoke;
  padding: 4px;
}

.table_class td{
  font-size: 14px;
  text-align: center;
}

.table_class td:first-child{
    font-weight: bolder;
    text-align: left;
    padding-left: 10px;
}
.table_class tr:first-child td{
    background-color: rgb(177, 157, 157);
}
</style>