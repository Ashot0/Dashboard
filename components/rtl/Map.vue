<template>
	<div ref="chartDom" class="map"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import 'echarts-gl';
import earth from '@/assets/Images/texture/earth.jpg';
import starfield from '@/assets/Images/texture/starfield.jpg';

const chartDom = ref(null);

onMounted(() => {
	if (chartDom.value) {
		const myChart = echarts.init(chartDom.value);
		const option = {
			backgroundColor: '#000',
			globe: {
				baseTexture: earth,
				shading: 'lambert',
				environment: starfield,
				atmosphere: {
					show: true,
				},
				light: {
					ambient: {
						intensity: 0.1,
					},
					main: {
						intensity: 1.5,
					},
				},
			},
			series: [],
		};
		myChart.setOption(option);
		window.addEventListener('resize', myChart.resize);
		onUnmounted(() => {
			window.removeEventListener('resize', myChart.resize);
			myChart.dispose();
		});
	}
});
</script>

<style scoped lang="scss">
.map {
	width: 100%;
	height: 100%;
	border-radius: 20px;
	overflow: hidden;
}
</style>
