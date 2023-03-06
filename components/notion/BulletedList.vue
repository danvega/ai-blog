<template>
  <ul :id="block.id">
    <li>{{ block?.bulleted_list_item?.rich_text[0].plain_text }}</li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps({
  block: { type: Object as PropType<Block>, default: () => ({}) }
});
</script>
