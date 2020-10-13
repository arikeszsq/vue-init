<template>
  <div>

<van-row>

  <van-col span="8" v-for="(item,index) in pictureList" :key="index" class="pic_div">
      <img :src="item.cover" class="img_list" @click="HandleclickImg(item.images)"/>
      <div class="title">{{item.title}}</div>
  </van-col>

</van-row>

  </div>
</template>   

<script>
import { ImagePreview } from 'vant';

export default {
  data(){

    return {
      pictureList:[
// {
// 'id':1,
// 'cover':'https://img.yzcdn.cn/vant/apple-1.jpg',
// 'title':'niasdfhao',
// 'images':['https://img.yzcdn.cn/vant/apple-2.jpg','https://img.yzcdn.cn/vant/apple-2.jpg']
// },
// {
//   'id':2,
// 'cover':'https://img.yzcdn.cn/vant/apple-2.jpg',
// 'title':'nihaao'
// 'images':['https://img.yzcdn.cn/vant/apple-2.jpg','https://img.yzcdn.cn/vant/apple-2.jpg']
// },
      ],
    }
  },
  methods:{
    HandleclickImg(images) {
      console.log(images);
	      ImagePreview({
              images: images,
	    });
    },
    onLoad()
    {
      let that=this;
      this.axios.post('/beauty/list').then(function(res){
        console.log(res.data.data);
        that.pictureList=res.data.data;
      }).catch(function(error){})
    }
  },
  mounted:function(){
    this.onLoad();
  }
};

</script>

<style>
.title{
  text-align: center;
}

.img_list{
  margin:0 auto;
  height: 130px;
  width:auto;
  padding-left:1px;
}

.pic_div{
  overflow: hidden;
  text-align: center;
}
</style>