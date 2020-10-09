<template>
<van-collapse v-model="activeName" accordion>
<van-collapse-item  v-for="(item,key,index) in items" :key="index"  :title=item.title :name=item.title>
  <div> {{item.create_time}}</div>
  <div> {{item.content}}</div>
 
  </van-collapse-item>
</van-collapse>
</template>   

<script>
import { Dialog } from 'vant';
export default {
  data() {
    return {
      activeName: '1',
      items:[
      ]
    }
  },
  methods:{
        onLoad(type) {
          let that = this;
          this.axios.post("/all/list",{'type':type}).then(function(res) {
             console.log(res.data.data)
             that.items=res.data.data;
             that.total = res.data.data.total;
           }).catch(function(err) {
              console.log(err)
           });
        },
  },
  mounted:function(){
    this.onLoad();
  }
  }
</script>
