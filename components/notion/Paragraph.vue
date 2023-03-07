<template>
  <p :id="block.id" class="text-lg leading-7 text-gray-800 text-left mb-4 font-normal" v-html="paragraph">
  </p>
</template>

<script setup lang="ts">
const props = defineProps({
  block: { type: Object as PropType<Block>, default: () => ({}) }
});

const paragraph = ref('');
props.block?.paragraph?.rich_text.forEach(p => {

  if (p.text.link != null) {
    paragraph.value += `<a href="${p.text.link.url}" class="text-blue-500 hover:text-blue-700">${p.plain_text}</a>`;
  } else {
    if (p.annotations?.bold) {
      paragraph.value += `<strong>${p.plain_text}</strong>`;
    } else {
      paragraph.value += p.plain_text;
    }
  }
});
</script>
