<template>
  <div>

<van-nav-bar :title=title left-text="返回" left-arrow>
  <template #right>
    <van-icon name="search" size="18"/>
  </template>
</van-nav-bar>

<div class="header">
  <ul>
    <li class="header_li" :class="{'active':active_1}" @click="onLoad('consume')">consume</li>
    <li class="header_li" :class="{'active':active_2}" @click="onLoad('salary')">salary</li>
  </ul>
</div>
<div style="margin:0 auto;text-align:center;" :show=total>{{total}}</div>
<table border="0"  cellspacing="1" bgcolor="#1989fa" class="table_class">
  <tr v-for="(item,key,index) in items" :key="index" >
    <template v-if="item.num">
      <td>{{item.time}}</td>
      <td>{{item.num}}</td>
      <td>{{item.content}}</td>
      <td><van-button type="danger" size="mini" @click="deleteByID(item.id)">X</van-button></td>
    </template>
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
      total:0,
      type:'',
    }
  },
  methods:{
        onLoad(type) {
          if(type=='salary'){
            this.active_1=0;
            this.active_2=1;
          } else {
            this.active_1=1;
            this.active_2=0;
          }
          this.type = type;
          this.title=type?type:'列表';
          let that = this;
          this.axios.post("/money/list",{'type':type}).then(function(res) {
             console.log(res.data.data)
             that.items=res.data.data;
             that.total = res.data.data.total;
           }).catch(function(err) {
              console.log(err)
           });
        },
        deleteByID(id) {
        this.id = id;
        let that =this;

         Dialog.confirm({
                title: id,
                message: '确认删除？',
              }).then(()=>{
                this.axios.post("/money/delete",{'id':that.id,'type':that.type}).then(function(res){
        console.log(res)
        Dialog({ message: '恭喜您</br>数据删除成功！' });
        // location.reload();
      })     
              }                        
              ).catch(() => {
                
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
