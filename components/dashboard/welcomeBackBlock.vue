<template>
	<div class="welcome-back-block">
		<p class="welcome-back-block__title">Welcome back,</p>
		<h3 class="welcome-back-block__name">{{ props.name }}</h3>
		<p class="welcome-back-block__desc">
			Glad to see you again! Ask me anything.
		</p>
		<button class="welcome-back-block__btn" type="button">
			Tap to record 🡪
		</button>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	name: string;
}>();
</script>

<style scoped lang="scss">
.welcome-back-block {
	position: relative;
	border-radius: 20px;
	min-width: 290px;
	width: 40.75%;
	height: 344px;
	padding: 36px 32px;
	background: center / cover no-repeat
		url('/assets/Images/braden-collum-CBcS51cGoSw-unsplash\ 1.png');

	@media (max-width: 768px) {
		width: 100%;
	}
	&__title {
		font-size: 14px;
		font-weight: 500;
		color: var(--grey-color);
		margin-bottom: 11.5px;
	}

	&__name {
		color: var(--white-color);
		font-weight: bold;
		font-size: 28px;
		margin-bottom: 18.5px;
	}

	&__desc {
		max-width: 182px;
		font-size: 16px;
		line-height: 24px;
		color: var(--grey-color);
	}

	&__btn {
		height: 14px;
		color: var(--white-color);
		background: none;
		bottom: 40px;
		position: absolute;
	}
}
</style>
