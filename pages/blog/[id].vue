<script setup lang="ts">
import BlockRenderer from '~~/components/notion/BlockRenderer.vue';

const id = useRoute().params.id;
const { data: post } = await useFetch<Post>(`/api/notion/page/${id}`);
</script>

<template>
  <div>
    <h1 class="text-4xl font-bold leading-tight text-gray-900">{{ post?.title }}</h1>
    <p class="mb-4 text-sm">Written By: {{ post?.author }} | Published On: {{ post?.publishedOn }}</p>
    <BlockRenderer v-for="block in post?.content" :key="block.id" :block="block" />
  </div>
</template>
