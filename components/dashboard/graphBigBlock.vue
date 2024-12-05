<template>
	<div class="graph-big-block">
		<h3 class="graph-big-block__title">Sales overview</h3>
		<p class="graph-big-block__percent">
			<span
				:class="
					props.percent < 0
						? 'graph-big-block__percent_negative'
						: 'graph-big-block__percent_positive'
				"
				>({{ props.percent > 0 ? '+' : '' }}{{ props.percent }}) 
			</span>
			in 2024
		</p>
		<div class="graph-big-block__graph-wrapper">
			<Line :data="chartData" :options="chartOptions" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Line } from 'vue-chartjs';
import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	LineElement,
	PointElement,
	LineController,
	CategoryScale,
	LinearScale,
} from 'chart.js';

ChartJS.register(
	Title,
	Tooltip,
	Legend,
	LineElement,
	PointElement,
	LineController,
	CategoryScale,
	LinearScale
);

const chartData = ref({
	labels: [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	],
	datasets: [
		{
			label: ' ',
			data: [340, 120, 460, 230, 320, 110, 470, 250, 300, 90, 280, 150],
			borderColor: '#0075ff',
			backgroundColor: '#2CD9FF02',
			tension: 0.4,
			pointBackgroundColor: 'rgba(75, 192, 192, 0)',
			pointBorderColor: '#ffffff00',
			pointHoverRadius: 6,
		},
	],
});

const chartOptions: any = {
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: false,
		},
		tooltip: {
			enabled: true,
		},
	},
	scales: {
		x: {
			ticks: {
				color: '#a0aec0',
			},
		},
		y: {
			beginAtZero: true,
			ticks: {
				color: '#a0aec0',
			},
		},
	},
};

const props = defineProps<{
	title: string;
	num: number[];
	percent: number;
}>();
</script>

<style scoped lang="scss">
.graph-big-block {
	height: 445px;
	width: 57.75%;
	min-width: 412px;
	border-radius: 20px;
	padding: 28px 19px 29px 21px;
	background: rgb(6, 11, 40);
	background: linear-gradient(
		135deg,
		rgba(6, 11, 40, 0.74) 0%,
		rgba(10, 14, 35, 0.71) 100%
	);
	@media (max-width: 1024px) {
		width: 100%;
		min-width: 100%;
	}
	&__title {
		font-size: 18px;
		font-weight: bold;
		line-height: 140%;
		color: var(--white-color);
		margin-bottom: 6px;
	}

	&__percent {
		font-size: 14px;
		color: var(--grey-color);
		margin-bottom: 40.5px;
		&_negative {
			font-weight: 500;
			color: var(--red-color);
		}
		&_positive {
			font-weight: 500;
			color: var(--green-color);
		}
	}

	&__graph-wrapper {
		width: 100%;
		max-width: 100vw;
		overflow: hidden;
		height: 296.5px;
	}
}
</style>
