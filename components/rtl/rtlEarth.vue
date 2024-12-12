<template>
	<div ref="chartDom" class="rtl-earth"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import 'echarts-gl';
import earth from '@/assets/Images/texture/world.topo.bathy.200401.jpg';
import starfield from '@/assets/Images/texture/starfield.jpg';

const chartDom = ref(null);

onMounted(() => {
	if (chartDom.value) {
		const myChart = echarts.init(chartDom.value);
		const option = {
			backgroundColor: '#000',
			globe: {
				baseTexture: earth,
				heightTexture: earth,
				displacementScale: 0.04,
				shading: 'realistic',
				environment: starfield,
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
