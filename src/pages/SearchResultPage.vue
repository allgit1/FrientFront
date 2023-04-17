<template>
  <van-card
      v-for="user in userList"
      :desc="user.profile"
      :title="`${user.username} (${user.planetCode})`"
      :thumb="user.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="danger" v-for="tag in user.tags" style="margin-right: 8px; margin-top: 8px">
        {{ tag }}
      </van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>
  <van-empty v-if="!userList || userList.length<1" description="搜索结果为空"></van-empty>
</template>
<script setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import myAxios from "../plugins/myAxios.ts";

import qs from "qs";

import {Toast} from "vant";
const route = useRoute();
const {tags} = route.query;
const userList = ref([]);
onMounted(async () => {
  const userListData =await myAxios.get('/user/search/tags', {
    params: {
      tagNameList: tags
    },
    paramsSerializer:  {
      serialize:params => {
        return qs.stringify(params,{arrayFormat:'repeat'})
      }
    }
  })
      .then(function (response) {
        console.log("/user/search/tags success",response);
        Toast.success('请求成功');
        return response?.data;
      })
      .catch(function (error) {
        console.error("/user/search/tags success error",error);
        Toast.fail("请求失败")
      })
  if (userListData){
    userListData.forEach(user =>{
      if (user.tags){
        user.tags=JSON.parse(user.tags);
      }
    })
    userList.value=userListData;
  }
})
const mockUser = {
  id: 1,
  username: 'tianber',
  userAccount: 'tianber',
  profile: 'tianber的个人简介，全栈工程师，加油加油加油！！！！！',
  gender: '男',
  phone: '234234',
  email: '324242342@qq.com',
  planetCode: '981',
  tags: ['java', '不想上班'],
  avatarUrl: 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/imq/loqo.pnq',
  createTime: new Date().toDateString()
}

</script>

<style scoped>

</style>