<template>
  <div>

<van-list>
<van-cell v-for="item in list" :key="item.id" :title="item.content" />
</van-list>


<!-- <van-pagination 
  v-model="currentPage" 
  :total-items="24" 
  :items-per-page="4"
/> -->
  </div>
</template>


<script>
import { Dialog } from 'vant';
export default {
  data() {
    return {
      list: [],
      currentPage: 1
      }
  },
  computed:{},
  methods:{
    　　SubBtn:function(){
           this.axios.post("/money/add", this.params).then(function(res) {
             console.log(res.data);
             Dialog({ message: '恭喜您</br>数据添加成功！' });
           }).catch(function(err) {
              console.log(err)
           });
        },
        
        onLoad() {
          let that = this;
this.axios.get("/money/list").then(function(res) {
             console.log(res.data.list)
             that.list=res.data.list;
           }).catch(function(err) {
              console.log(err)
           });
    }
  },
  mounted:function(){
    this.onLoad();
  },
  created(){

  },
  }
</script>
