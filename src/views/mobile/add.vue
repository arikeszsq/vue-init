<template>
  <div>
    
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item><img src="../../assets/img/3.jpg" alt=""></van-swipe-item>
    <van-swipe-item><img src="../../assets/img/4.jpg" alt=""></van-swipe-item>
</van-swipe>

<van-cell is-link :title=title @click="show = true" />
<van-action-sheet v-model="show" :actions="actions" @select="onSelect" />

<!-- <van-action-sheet v-model="show" title="标题">
  <div class="content">内容</div>
</van-action-sheet> -->

<van-cell-group>
  <van-field
    v-model="params.before_num"
    clearable
    label="税前金额"
    left-icon="smile-o"
    placeholder="请输入税前"
  />
</van-cell-group>

<van-cell-group>
  <van-field
    v-model="params.after_num"
    clearable
    label="税后金额"
    left-icon="smile-o"
    placeholder="请输入税后"
  />
</van-cell-group>

<van-field
  v-model="params.content"
  rows="2"
  autosize
  label="备注"
  left-icon="smile-o"
  type="textarea"
  placeholder="请输入备注"
/>

<van-cell title="获取日期" :value="date" @click="date_show = true" />
<van-calendar v-model="date_show" @confirm="onConfirm" />

<!-- <div style="text-align:center;margin-top:5px;margin-right:10px;">
  <van-button round type="info" >提交</van-button>
</div> -->

<div style="margin: 16px;" @click="SubBtn();">
    <van-button round block type="info" native-type="submit">
      提交
    </van-button>
  </div>

  </div>
</template>


<script>
import { Dialog } from 'vant';


export default {
  data() {
    return {
      title:'添加类型',
      show: true,
      actions: [
        { name: 'Salary'},
        { name: 'Other'},
      ],
      images: [
        '../../assets/img/123.png',
      ],
      params:{
        add_type:'',
        before_num:'',
        after_num:'',
        content:'',
        get_date:'',
      },
      date:'',
      date_show:false,
    };
  },
  computed:{},
  methods:{
        onSelect(item) {
            this.title=item.name;
            this.show = false;
            this.params.add_type=item.name;
        },
    　　SubBtn:function(){
           this.axios.post("/salary/add", this.params).then(function(res) {
             console.log(res.data);
             Dialog({ message: '恭喜您</br>数据添加成功！' });
           }).catch(function(err) {
             Dialog({ message: '抱歉！</br>数据添加失败' });
              console.log(err)
           });
        },
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.date_show = false;
      this.params.get_date = date.valueOf();
      this.date=this.formatDate(date);
    },
  },
  mounted:function(){},
  created(){},
  }
</script>

<style>
  .my-swipe .van-swipe-item {
    max-height: 180px;
    color: #fff;
    font-size: 20px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>

<style>
  .content {
    padding: 16px 16px 160px;
  }
</style>