<template>
	<div class="information">
		<h4 class="information__title title-base">Billing Information</h4>
		<div v-for="information in informationsBlocks" class="information__block">
			<div class="information__info">
				<p class="information__name">{{ information.name }}</p>
				<div class="information__text">
					Company Name {{ information.companyName }}
				</div>
				<div class="information__text">
					Email Address {{ information.emailAddress }}
				</div>
				<div class="information__text">
					VAT Number {{ information.VATNumber }}
				</div>
			</div>
			<div class="information__btn-block">
				<button type="button" class="information__delete">
					<Delete /> DELETE
				</button>
				<button type="button" class="information__edit"><Edit /> EDIT</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Edit, Delete } from '@/assets/Icons/icons';
const informationsBlocks = [
	{
		name: 'Oliver Liam',
		companyName: 'Viking Burrito',
		emailAddress: 'oliver@burrito.com',
		VATNumber: 'FRB1235476',
	},
	{
		name: 'Oliver Liam',
		companyName: 'Viking Burrito',
		emailAddress: 'oliver@burrito.com',
		VATNumber: 'FRB1235476',
	},
	{
		name: 'Oliver Liam',
		companyName: 'Viking Burrito',
		emailAddress: 'oliver@burrito.com',
		VATNumber: 'FRB1235476',
	},
];
</script>

<style scoped lang="scss">
.information {
	background: rgb(6, 11, 40);
	background: linear-gradient(
		130deg,
		rgba(6, 11, 40, 0.94) 0%,
		rgba(10, 14, 35, 0.49) 100%
	);
	padding: 28px 22.5px 22.5px 22.5px;
	border-radius: 20px;
	color: var(--white-color);
	display: flex;
	flex-direction: column;
	gap: 17.5px;

	&__btn-block {
		background: none;
		display: flex;
		gap: 16px;
		@media (max-width: 768px) {
			flex-direction: column;
		}
	}

	&__edit,
	&__delete {
		background: none;
		font-weight: 500;
		font-size: 12px;
		line-height: 150%;
		display: flex;
		gap: 3.5px;
		align-items: center;
		height: fit-content;
	}

	&__delete {
		color: var(--red-color);
	}

	&__edit {
		color: var(--grey-color);
	}

	&__block {
		display: flex;
		justify-content: space-between;
		padding: 26px 22px 27.5px 27px;
		border-radius: 20px;
		background: rgb(6, 11, 40);
		background: linear-gradient(
			130deg,
			rgba(6, 11, 40, 0.94) 0%,
			rgba(10, 14, 35, 0.49) 100%
		);
	}

	&__name {
		font-size: 14px;
		font-weight: 500;
		line-height: 140%;
		margin-bottom: 5px;
	}

	&__info {
	}

	&__text {
		color: var(--grey-color);
		font-size: 12px;
		line-height: 150%;
	}
}
</style>
