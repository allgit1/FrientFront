<template>
  <van-card
      v-for="user in userList"
      :desc="user.profile"
      :title="`${user.username} (${user.planetCode})`"
      :thumb="user.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="danger" v-for="tag in user.tags" style="margin-right: 8px; margin-top: 8px" >
        {{tag}}
      </van-tag>
    </template>
    <template #footer>
      <van-button size="mini">联系我</van-button>
    </template>
  </van-card>
</template>
<script setup>
import {ref} from "vue";
import {useRoute} from "vue-router";


const route = useRoute();
const {tags} = route.query;

const mockUser = {
  id: 1,
  username: 'tianber',
  userAccount: 'tianber',
  profile: 'tianber的个人简介，全栈工程师，加油加油加油！！！！！',
  gender: '男',
  phone: '234234',
  email: '324242342@qq.com',
  planetCode: '981',
  tags:['java','不想上班'],
  avatarUrl: 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/imq/loqo.pnq',
  createTime: new Date().toDateString()
}
const userList=ref([mockUser]);
</script>

<style scoped>

</style>