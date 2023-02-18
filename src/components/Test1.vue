<script setup lang="ts">
import { ref } from 'vue';
import RepoService from '../helper/RepoService.js';

const currentPage = ref(1);
const repoList = ref([]);
const load = () => {
  currentPage.value++;
  RepoServiceObj.getRepoList(currentPage.value);
};

const RepoServiceObj: any = new RepoService();
RepoServiceObj.init();
RepoServiceObj.onInit(res => {
  console.log(res);
  repoList.value.push(...res);
});
RepoServiceObj.onRepoChange(res => {
  console.log(res);
  repoList.value.push(...res);
});
</script>

<template>
  <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
    <li v-for="repo in repoList" :key="repo.id" class="infinite-list-item">
      <h2>{{ repo.name }}</h2>
    </li>
  </ul>
</template>
