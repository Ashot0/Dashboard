<template>
	<div class="rtl">
		<RtlEarth />
	</div>
</template>

<script setup lang="ts">
import RtlEarth from '@/components/rtl/rtlEarth.vue';

const route = useRoute();
</script>

<style scoped lang="scss">
.rtl {
	width: 100%;
	height: 100%;
}
</style>
