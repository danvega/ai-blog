<script setup lang="ts">
import Heading1 from './Heading1.vue';
import Heading2 from './Heading2.vue';
import Heading3 from './Heading3.vue';
import Image from './Image.vue';
import Paragraph from './Paragraph.vue';
import BulletedList from './BulletedList.vue';

const props = defineProps({
  block: { type: Object as PropType<Block>, default: () => ({}) }
});

const currentBlock: { [key: string]: Component } = {
  heading_1: Heading1,
  heading_2: Heading2,
  heading_3: Heading3,
  paragraph: Paragraph,
  image: Image,
  bulleted_list_item: BulletedList
};
</script>

<template>
  <component :is="currentBlock[block.type]" v-if="block" :block="block" />
</template>
