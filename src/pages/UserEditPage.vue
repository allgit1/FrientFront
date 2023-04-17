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
import {useRoute, useRouter} from "vue-router";
import {getCurrentUser} from "../services/user";
const route = useRoute();
const router=useRouter();

const editUser = ref({
  editKey: route.query.editKey,
  currentValue: route.query.currentValue,
  editName: route.query.editName,
})
const onSubmit = async () => {
  const currentUser=await getCurrentUser();
  console.log("-----UserEditPage",currentUser);
  const res=await myAxios.post('/user/update',{
    'id':currentUser.id,
    [editUser.value.editKey as string]:editUser.value.currentValue,
  })
  console.log("修改用户信息",res);
  if (res.code===0&&res.data>0){
    Toast.success("修改成功");
    router.replace("/user")
  }else {
    Toast.fail("修改失败")
  }
}

console.log(route)
console.log(route.query)

</script>