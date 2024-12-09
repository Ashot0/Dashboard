<template>
	<div ref="chartDom" class="rtl-earth"></div>
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
				baseTexture: ROOT_PATH + '/data-gl/asset/world.topo.bathy.200401.jpg',
				heightTexture: ROOT_PATH + '/data-gl/asset/world.topo.bathy.200401.jpg',
				displacementScale: 0.04,
				shading: 'realistic',
				environment: ROOT_PATH + '/data-gl/asset/starfield.jpg',
				realisticMaterial: {
					roughness: 0.9,
				},
				postEffect: {
					enable: true,
				},
				light: {
					main: {
						intensity: 5,
						shadow: true,
					},
					ambientCubemap: {
						texture: ROOT_PATH + '/data-gl/asset/pisa.hdr',
						diffuseIntensity: 0.2,
					},
				},
			},
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
.rtl-earth {
	width: 100%;
	height: 100%;
	border-radius: 20px;
	overflow: hidden;
}
</style>
