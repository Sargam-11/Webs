<script setup>
import Notionloader from '../../components/notionloader.vue'
import { NotionRenderer, useGetPageBlocks } from 'vue3-notion'

const { data: blockMap } = useGetPageBlocks('bc97b55870d9479181facc653dd9a6f6')
</script>

<template>
	<main class="cont">
		<div v-if="blockMap">
			<NotionRenderer :blockMap="blockMap" fullPage prism katex />
			<br />
		</div>
		<Notionloader v-else />
	</main>
</template>

<style></style>
