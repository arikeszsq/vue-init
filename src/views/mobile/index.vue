
<template>
  <div>
    


<van-swipe :loop="true" :width="300" :height="100">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>

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

<div style="text-align:center;margin-top:5px;">
  <van-button round type="info" @click="SubBtn();">提交</van-button>
</div>


  </div>
</template>



<script>
export default {
  data() {
    return {
      params:{
        type: '1',
        num: '',
        needed: true,
        content:'',
      }
    };
  },
  computed:{},
  methods:{
    　　SubBtn:function(msg){
           　　var data = this.params
              //  this.$http.get(('http://127.0.0.1:666/api/money/add'),data,{emulateJSON:false}).then(response => {
              //       // success callback
              //  }, response => {
              //       // error callback
              //  });

              axios.get('http://127.0.0.1:666/api/money/add').then(function (response) {
                  console.log(response);
                  }).catch(function (error) {
                          console.log(error);
                  });
        },
  },
  mounted:function(){},
  created(){},
  }
</script>