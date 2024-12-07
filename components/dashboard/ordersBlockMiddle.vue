<template>
	<div class="orders-block-middle">
		<h3 class="orders-block-middle__title">Orders overview</h3>
		<p class="orders-block-middle__num">
			<Checkmark />  <span class="orders-block-middle__num_bold">+30%</span>
			this month
		</p>
		<div class="orders-block-middle__projects">
			<div
				v-for="(project, index) in projects"
				class="orders-block-middle__project project"
				:key="project.id"
			>
				<div
					class="project__img-wrapper"
					:class="'project__img-wrapper_' + index"
				>
					<component
						v-if="project.image"
						class="project__img"
						:is="project.image"
					/>
				</div>
				<div class="project__text-wrapper">
					<h4 class="project__title">{{ project.title }}</h4>
					<p class="project__text">{{ project.text }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	Checkmark,
	NotificationIcon,
	AdobeXD,
	CSS,
	CartIcon,
	Card,
} from '@/assets/Icons/icons';

const projects = [
	{
		image: NotificationIcon,
		title: '$2400, Design changes',
		text: '22 DEC 7:20 PM',
		id: 1,
	},
	{
		image: CSS,
		title: 'New order #4219423',
		text: '21 DEC 11:21 PM',
		id: 2,
	},
	{
		image: CartIcon,
		title: 'Server Payments for April',
		text: '21 DEC 9:28 PM',
		id: 3,
	},
	{
		image: Card,
		title: 'New card added for order #3210145',
		text: '20 DEC 3:52 PM',
		id: 4,
	},
	{
		title: 'Unlock packages for Development',
		text: '19 DEC 11:35 PM',
		id: 5,
	},
	{
		image: AdobeXD,
		title: 'New order #9851258',
		text: '18 DEC 4:41 PM',
		id: 6,
	},
];
</script>

<style scoped lang="scss">
.orders-block-middle {
	height: 519px;
	border-radius: 20px;
	background: rgb(6, 11, 40);
	background: linear-gradient(
		135deg,
		rgba(6, 11, 40, 0.74) 0%,
		rgba(10, 14, 35, 0.71) 100%
	);
	padding: 28px 21px 31px 21px;

	&__title {
		font-size: 18px;
		font-weight: bold;
		line-height: 140%;
		color: var(--white-color);
		margin-bottom: 6px;
	}

	&__num {
		margin-bottom: 32.5px;
		color: var(--grey-color);
		font-size: 14px;
		line-height: 140%;
		&_bold {
			font-weight: bold;
		}
	}

	&__projects {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
}
.project {
	display: flex;
	gap: 19px;
	&__img-wrapper {
		margin-top: 7px;
		width: 16px;
		height: 16px;
		&_0 {
			color: var(--nav-btn-icon-color);
		}
		&_2 {
			color: var(--blue-color);
		}
	}

	&__img {
		width: 16px;
		height: 16px;
	}

	&__text-wrapper {
		display: flex;
		flex-direction: column;
		gap: 3.5px;
	}

	&__title {
		color: var(--white-color);
		font-size: 14px;
		font-weight: 500;
		line-height: 150%;
	}

	&__text {
		color: var(--grey-color);
		font-size: 12px;
		font-weight: 500;
		line-height: 150%;
	}
}
</style>
