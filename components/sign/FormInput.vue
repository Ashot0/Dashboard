<template>
	<div class="form-input">
		<p class="form-input__label">{{ props.name }}</p>
		<input
			class="form-input__input"
			:placeholder="props.placeholder"
			:type="props.type"
			:name="props.name"
			:id="props.id"
		/>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	name: string;
	type: string;
	id: string;
	placeholder: string;
}>();
</script>

<style scoped lang="scss">
.form-input {
	&__label {
		font-size: 14px;
		font-weight: 500;
		line-height: 140%;
		margin-bottom: 4.5px;
	}

	&__input {
		color: var(--white-color);
		font-weight: bold;
		background: none;
		border: 2px solid #ffffff50;
		border-radius: 20px;
		width: 350px;
		padding: 15px 20px;
		background: rgb(255, 255, 255);
		background: linear-gradient(
			270deg,
			rgba(255, 255, 255, 0.09) 0%,
			rgba(255, 255, 255, 0) 100%
		);
		@media (max-width: 480px) {
			width: 300px;
		}
	}
}
</style>
