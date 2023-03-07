<script lang="ts" setup>
const { data: posts } = await useFetch<Post[]>('/api/notion/database-query');

</script>

<template>
  <h1 class="text-2xl font-bold mb-10">Latest Blog Posts</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    <div v-for="post in posts" :key="post.id" class="bg-white rounded-lg shadow-md overflow-hidden hover:opacity-75">
      <NuxtLink :to="`/blog/${post.slug}`"><img :src="post.cover" alt="Blog post image" class="w-full h-48 object-cover">
      </NuxtLink>
      <div class="p-6">
        <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
        <p class="text-gray-700 mb-4">{{ post.excerpt }}</p>
        <NuxtLink :to="`/blog/${post.slug}`"
          class="inline-block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded float-right mb-8">Read More
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
