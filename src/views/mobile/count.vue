<template>
  <div>

<van-nav-bar title="男儿当自勉" left-text="返回" left-arrow>
  <template #right>
    <van-icon name="search" size="18" @click="alertWelcome"/>
  </template>
</van-nav-bar>

<van-circle v-model="currentRate" :rate="60" :speed="100" :text="text" />

<!-- 居中 -->
<van-row type="flex" justify="center">
  <van-col span="6">总计: {{total}}</van-col>
  <van-col span="6">园区: {{sip}}</van-col>
  <van-col span="6">市区: {{center}}</van-col>
</van-row>

<!-- 居中 -->
<van-row type="flex" justify="center">
  <van-col span="6">本月:  {{consume_money}}</van-col>
</van-row>

  </div>
</template>   

<script>
import { Dialog } from 'vant';
export default {
  data() {
    return {
      currentRate: 0,
      total:0,
      center:0,
      sip:0,
      consume_money:0
    };
  },

  methods:{
    alertWelcome:function(){
     Dialog({ message: 'welcome brother' });
    },
    prfCount:function(){
      // this.axios.post("/money/add", this.params).then(function(res) {
      //        console.log(res.data);
      //        Dialog({ message: '恭喜您</br>数据添加成功！' });
      //      }).catch(function(err) {
      //         console.log(err)
      //      });
      let that = this;
      this.axios.get("basic/info").then(function(res){
        that.total = res.data.data.total_money;
        that.center = res.data.data.center_money;
        that.sip = res.data.data.sip_money;
        that.consume_money = res.data.data.consume_money;
      }).catch(function(res){
       console.log(2222);
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
    this.prfCount();
  }
}
</script>
