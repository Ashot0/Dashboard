<template>
	<div class="stub">
		<Map />
	</div>
</template>

<script setup lang="ts">
import Map from '~/components/rtl/Map.vue';

const route = useRoute();
</script>

<style scoped>
.stub {
	width: 100%;
	height: 100%;
}
</style>
