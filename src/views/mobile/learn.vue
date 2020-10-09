<template>
  <div>

<van-nav-bar :title=title left-text="返回" left-arrow>
  <template #right>
    <van-icon name="search" size="18"/>
  </template>
</van-nav-bar>

<div style="margin:0 auto;text-align:center;" :show=total>{{name}}</div>
<table border="0"  cellspacing="1" bgcolor="#1989fa" class="table_class">
  <tr v-for="(item,key,index) in items" :key="index" >
      <td>{{item.title}}</td>
      <td>{{item.author}}</td>
      <td>{{item.content}}</td>
  </tr>
</table>

<div style="margin:0 auto;text-align:center;min-height:80px;"></div>
  </div>
</template>   


<script>
import { Dialog } from 'vant';
export default {
  data() {
    return {
      items:[
      ],
      id:'',
      title:'',
      active_1:0,
      active_2:0,
      name:'文化',
      type:'',
    }
  },
  methods:{
        onLoad() {
          let that = this;
          this.axios.post("/learn/list").then(function(res) {
             that.items=res.data.data;
             console.log(res.data.data)
           }).catch(function(err) {
           });
        }

  },
  mounted:function(){
    this.onLoad();
  }
  }
</script>

<style>
.table_class{
  min-width: 260px;
  margin: 0 auto;
}

.table_class tr td{
  background-color: whitesmoke;
  padding: 4px;
}

.table_class td{
  min-height: 28px;
  line-height: 28px;
  font-size: 14px;
  text-align: center;
}

.table_class td:first-child{
    font-weight: bolder;
    text-align: left;
    padding-left: 10px;
}

.header{
  text-align:center;
  margin-top: 20px;
  min-height: 50px;
}

.header_li{
  background-color: bisque;
  margin-left: 10px;
  margin-right: 10px;
  padding: 5px;
  border-radius: 5px;
  min-width: 50px;
  float: left;
}
.active{
  background-color:red;
  color: aliceblue;
  float: left;
}

</style>
