<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>L</van-swipe-item>
  <van-swipe-item>O</van-swipe-item>
  <van-swipe-item>V</van-swipe-item>
  <van-swipe-item>E</van-swipe-item>
</van-swipe>
<!-- <van-swipe :loop="true" :width="300" :height="100">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe> -->

<!-- <van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </van-swipe-item>
</van-swipe> -->

<van-radio-group v-model="params.type">
  <van-cell-group>
    <van-cell title="支出" clickable @click="params.type = '1'">
      <template #right-icon>
        <van-radio name="1" />
      </template>
    </van-cell>
    <van-cell title="收入" clickable @click="params.type = '2'">
      <template #right-icon>
        <van-radio name="2" />
      </template>
    </van-cell>
  </van-cell-group>
</van-radio-group>

<van-cell-group>
  <van-field
    v-model="params.num"
    clearable
    label="金额"
    left-icon="smile-o"
    placeholder="请输入金额"
  />
</van-cell-group>

<van-field
  v-model="params.content"
  rows="2"
  autosize
  label="留言"
  left-icon="smile-o"
  type="textarea"
  placeholder="请输入留言"
/>

<van-cell center  title="必要">
  <van-switch v-model="params.needed" active-color="#07c160" inactive-color="#ee0a24" />
</van-cell>

<div style="text-align:center;margin-top:5px;margin-right:10px;">
  <van-button round type="info" @click="SubBtn();">提交</van-button>
</div>

  </div>
</template>



<script>
import { Dialog } from 'vant';


export default {
  data() {
    return {
      images: [
        '../../assets/img/123.png',
      ],
      params:{
        type: '1',
        num: '',
        needed: true,
        content:'',
      },
    };
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
  },
  mounted:function(){},
  created(){},
  }
</script>

<style>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>