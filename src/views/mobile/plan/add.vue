<template>
  <div>
    <van-field
      v-model="params.title"
      rows="1"
      autosize
      label="标题"
      left-icon="smile-o"
      type="textarea"
      placeholder="标题"
    />

    <van-field
      v-model="params.content"
      rows="5"
      autosize
      label="内容"
      left-icon="smile-o"
      type="textarea"
      placeholder="内容"
    />

    <van-cell center title="计划">
      <template #right-icon>
        <van-switch v-model="params.type" size="24" />
      </template>
    </van-cell>


    <div style="margin: 16px" @click="SubBtn()">
      <van-button round block type="info" native-type="submit">
        提交
      </van-button>
    </div>
  </div>
</template>


<script>
import { Dialog } from "vant";
import { Switch } from "vant";

export default {
  data() {
    return {
      params: {
        type: 0,
        title: "",
        content: "",
      },
    };
  },
  computed: {},
  methods: {
    SubBtn: function () {
      this.axios.post("/plan/add", this.params).then(function (res) {
          console.log(res.data);
          Dialog({ message: "恭喜您</br>数据添加成功！" });
        }).catch(function (err) {
          Dialog({ message: "抱歉！</br>数据添加失败" });
          console.log(err);
        });
    },
  },
  mounted: function () {},
  created() {},
};
</script>