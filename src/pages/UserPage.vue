<template>
  <van-cell title="id" is-link to="/user/edit" :value="user.id"/>
  <van-cell title="昵称" is-link to="/user/edit" :value="user.username"/>
  <van-cell title="账户" is-link to="/user/edit" :value="user.userAccount"/>
  <van-cell title="性别" is-link :value="user.gender" @click="toEdit('gender','性别',user.gender)"/>
  <van-cell title="电话" is-link  :value="user.phone" @click="toEdit('phone','电话',user.phone) "/>
  <van-cell title="邮箱" is-link to="/user/edit" :value="user.email"/>
  <van-cell title="星球编号"  :value="user.planetCode"/>
  <van-cell title="注册时间"  :value="user.createTime.toISOString()"/>
</template>

<script setup lang="ts">


import {useRouter} from "vue-router";

const user={
  id: 1,
  username: 'mjh',
  userAccount: 'mjh666',
  gender: '男',
  phone: '123456',
  email: '123@qq.com',
  planetCode: '123',
  createTime: new Date(),
}
const router=useRouter();
const toEdit=(editKey: string, editName: string, currentValue: string)=>{
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      editName,
      currentValue,
    }
  })

}
</script>

<style scoped>

</style>