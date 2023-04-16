<template>
  <van-form @submit="onSubmit">
    <van-field
        v-model="editUser.currentValue"
        :name="editUser.editKey"
        :label="editUser.editName"
        :placeholder="'请输入${editUser.editName}'"
    />
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">

import {ref} from "vue";
import myAxios from "../plugins/myAxios";
import {Toast} from "vant";
import {useRoute} from "vue-router";
const route = useRoute();
const router=useRoute();
const editUser = ref({
  editKey: route.query.editKey,
  currentValue: route.query.currentValue,
  editName: route.query.editName,
})
const onSubmit = async () => {
  const res=await myAxios.post('/user/update',{
    'id':23,
    [editUser.value.editKey as string]:editUser.value.currentValue,
  })
  if (res.code===0&&res.data>0){
    Toast.success("修改成功");
    router.back();
  }
}

console.log(route)
console.log(route.query)

</script>