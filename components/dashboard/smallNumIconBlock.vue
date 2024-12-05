<template>
	<div class="small-num-icon-block">
		<div class="small-num-icon-block__text">
			<p class="small-num-icon-block__name">{{ props.name }}</p>
			<p class="small-num-icon-block__num">
				{{ props.num }}
				<span
					v-if="props.percent && props.percent !== 0"
					class="small-num-icon-block__percent"
					:class="
						props.percent < 0
							? 'small-num-icon-block__percent_negative'
							: 'small-num-icon-block__percent_positive'
					"
					>{{ props.percent > 0 ? '+' : '' }}{{ props.percent }}%</span
				>
			</p>
		</div>
		<div class="small-num-icon-block__icon-wrapper">
			<slot name="icon"> </slot>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	name: string;
	num: string;
	percent?: number;
}>();
</script>

<style scoped lang="scss">
.small-num-icon-block {
	background: rgb(6, 11, 38);
	background: linear-gradient(
		152deg,
		rgba(6, 11, 38, 0.74) 0%,
		rgba(26, 31, 55, 0.5) 100%
	);
	// max-width: 382px;
	width: 24%;
	min-width: 250px;
	height: 80px;
	display: flex;
	justify-content: space-between;
	padding: 17.5px 18px 17.5px 21px;
	align-items: center;
	border-radius: 20px;
	@media (max-width: 1024px) {
		width: 49%;
	}
	@media (max-width: 640px) {
		width: 100%;
	}
	&__text {
		display: flex;
		flex-direction: column;
		gap: 3px;
	}

	&__name {
		color: var(--grey-color);
		font-size: 12px;
		font-weight: 500;
	}

	&__num {
		color: var(--white-color);
		font-size: 18px;
		line-height: 140%;
		font-weight: bold;
	}
	&__percent {
		font-size: 14px;
		&_negative {
			color: var(--red-color);
		}
		&_positive {
			color: var(--green-color);
		}
	}

	&__icon-wrapper {
		border-radius: 12px;
		width: 45px;
		height: 45px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--nav-btn-icon-color);
		color: var(--white-color);
		* {
			max-width: 22.5px;
			max-height: 22.5px;
		}
	}
}
</style>
