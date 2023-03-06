<template>
  <p :id="block.id" class="text-lg leading-7 text-gray-800 text-left mb-4 font-normal">
    {{ block?.paragraph?.rich_text[0].plain_text }}
  </p>
</template>

<script setup lang="ts">
const props = defineProps({
  block: { type: Object as PropType<Block>, default: () => ({}) }
});
</script>
