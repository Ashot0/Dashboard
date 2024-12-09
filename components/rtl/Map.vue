<template>
	<div ref="chartDom" class="map"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import 'echarts-gl';

const ROOT_PATH = 'https://echarts.apache.org/examples';

const chartDom = ref(null);

onMounted(() => {
	if (chartDom.value) {
		const myChart = echarts.init(chartDom.value);
		const option = {
			backgroundColor: '#000',
			globe: {
				baseTexture: ROOT_PATH + '/data-gl/asset/earth.jpg',
				shading: 'lambert',
				environment: ROOT_PATH + '/data-gl/asset/starfield.jpg',
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
