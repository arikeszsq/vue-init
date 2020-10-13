<template>
  <div>

<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item><img src="../../assets/img/1.jpg" alt=""></van-swipe-item>
    <van-swipe-item><img src="../../assets/img/2.jpg" alt=""></van-swipe-item>
    <van-swipe-item><img src="../../assets/img/3.jpg" alt=""></van-swipe-item>
    <van-swipe-item><img src="../../assets/img/4.jpg" alt=""></van-swipe-item>
</van-swipe>
<div style="height:10px;"></div>
<van-grid>
  <van-grid-item icon="smile-o" text="统计" to='/count'/>
  <van-grid-item icon="youzan-shield" text="文化" to='/learn'/>
  <van-grid-item icon="back-top" text="添加收入" to="/add"/>
  <van-grid-item icon="down" text="添加支出" to="/out"/>
</van-grid>

<van-grid>
  <van-grid-item icon="add-o" text="添加心得" to='/alladd'/>
  <van-grid-item icon="browsing-history-o" text="心得列表" to='/alllist'/>
  <van-grid-item icon="" text="7" />
  <van-grid-item icon="" text="8"/>
</van-grid>

  </div>
</template>   

<style>
  .my-swipe .van-swipe-item {
    max-height: 180px;
    color: #fff;
    font-size: 20px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
