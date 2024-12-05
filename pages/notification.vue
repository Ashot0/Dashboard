<template>
	<div>
		<h2>Welcome!</h2>
		<p>{{ route.path }}</p>
	</div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style scoped></style>
