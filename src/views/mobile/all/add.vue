<template>
<van-cell-group>
<van-field
    v-model="params.title"
    label="标题"
    left-icon="smile-o"
    right-icon="warning-o"
    placeholder="标题"
  />

  <van-switch v-model="checked" />

<van-field
  v-model="params.content"
  rows="2"
  autosize
  label="内容"
  left-icon="smile-o"
  type="textarea"
  placeholder="请输入内容"
/>

<div style="margin: 16px;" @click="SubBtn();">
    <van-button round block type="info" native-type="submit">
      提交
    </van-button>
  </div>
</van-cell-group>


</template>

<script>
import { Field } from 'vant';
import { Dialog } from 'vant';

export default {
  data() {
    return {
      params:{
        type:'',
        title:'',
        description:'',
        content:'',
      },

    };
  },

   methods:{
    　　SubBtn:function(){
           this.axios.post("/all/add", this.params).then(function(res) {
             console.log(res.data);
             Dialog({ message: '恭喜您</br>数据添加成功！' });
           }).catch(function(err) {
             Dialog({ message: '抱歉！</br>数据添加失败' });
              console.log(err)
           });
        },
  },

};

</script>

<style>

</style>