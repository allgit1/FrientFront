<template>
  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入要搜索的标签"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>
  <van-divider content-position="left">已选标签</van-divider>
  <div v-if="activeIds.length===0">请选择标签</div>
  <van-row gutter="16" style="padding:0 16px">
    <van-col v-for="tag in activeIds">
      <van-tag closeable size="small" type="primary" @close="doClose(tag)">
        {{ tag }}
      </van-tag>
    </van-col>
  </van-row>


  <van-divider content-position="left">选择标签</van-divider>
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />
  <div style="padding: 16px">
    <van-button block type="primary" @click="doSearchResult">搜索</van-button>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from "vue-router";

const originTagList = [
  {
    text: '性别',
    children: [
      {text: '男', id: '男'},
      {text: '女', id: '女'},
    ],
  },
  {
    text: '江苏',
    children: [
      {text: '南京', id: 4},
      {text: '无锡', id: 5},
      {text: '徐州', id: 6},
    ],
  },
]

let tagList = ref(originTagList);

const searchText = ref('');
const onSearch = (val) => {
  tagList.value = originTagList.map(parentTag => {
    const tempChildren = [...parentTag.children];
    const tempParentTag = {...parentTag};
    tempParentTag.children = tempChildren.filter(item => item.text.includes(searchText.value));
    return tempParentTag;

  });
};
const onCancel = () => {
  searchText.value = '';
  tagList.value = originTagList;
};
//已选中的标签
const activeIds = ref([]);
const activeIndex = ref(0);
//标签列表

//移除标签
const doClose = (tag) => {
  activeIds.value = activeIds.value.filter(item => {
    return item !== tag;
  })
}
const router=useRouter();
const doSearchResult = () =>{
  router.push({
    path: '/user/list',
    query:{
      tags:activeIds.value
    }
  })
}
</script>

<style scoped>

</style>