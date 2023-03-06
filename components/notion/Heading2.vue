<template>
  <h2 :id="block.id" class="text-3xl font-bold leading-tight text-gray-900 mb-2">
    {{ block?.heading_2?.rich_text[0].plain_text }}
  </h2>
</template>

<script setup lang="ts">
const props = defineProps({
  block: { type: Object as PropType<Block>, default: () => ({}) }
});
</script>
