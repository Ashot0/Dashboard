<template>
	<div class="tables">
		<TablesAuthorsTable
			class="tables__authors"
			:authors="authorsStore.authors"
		/>
		<TablesProjectsTable
			class="tables__projects"
			:projects="projectsStore.projects"
		/>
	</div>
</template>

<script setup lang="ts">
import { useAuthorsStore } from '@/stores/authors';
import { useProjectsStore } from '@/stores/projects';
const authorsStore = useAuthorsStore();
const projectsStore = useProjectsStore();
</script>

<style scoped lang="scss">
.tables {
	display: flex;
	flex-direction: column;
	gap: 24px;
	position: relative;
	max-width: 100vw;
	&__authors {
		max-width: 100%;
	}

	&__projects {
		max-width: 100%;
	}
}
</style>
