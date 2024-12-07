<template>
	<div class="author-table">
		<h4 class="author-table__title title-base">Authors Table</h4>
		<div class="author-table__wrapper">
			<div class="author-table__columns">
				<p
					class="author-table__column author-table__column_1 author-table__sub-title"
				>
					AUTHOR
				</p>
				<p
					class="author-table__column author-table__column_2 author-table__sub-title"
				>
					FUNCTION
				</p>
				<p
					class="author-table__column author-table__column_3 author-table__sub-title"
				>
					STATUS
				</p>
				<p
					class="author-table__column author-table__column_4 author-table__sub-title"
				>
					EMPLOYED
				</p>
				<p
					class="author-table__column author-table__column_5 author-table__sub-title"
				></p>
			</div>
			<div
				v-for="(author, index) in props.authors"
				:key="index"
				class="author-table__columns"
			>
				<div class="author-table__column author-table__column_1">
					<div class="author-table__image-wrapper">
						<component
							class="author-table__image"
							v-if="author.image"
							:is="author.image"
						/>
					</div>
					<div class="author-table__author">
						<p class="author-table__name">{{ author.name }}</p>
						<p class="author-table__email">{{ author.email }}</p>
					</div>
				</div>
				<div class="author-table__column author-table__column_2">
					<div class="author-table__function">
						<p class="author-table__function1">{{ author.function1 }}</p>
						<p class="author-table__function2">{{ author.function2 }}</p>
					</div>
				</div>
				<div class="author-table__column author-table__column_3">
					<p
						class="author-table__status author-table__status_online"
						v-if="author.status"
					>
						Online
					</p>
					<p class="author-table__status author-table__status_offline" v-else>
						Offline
					</p>
				</div>
				<div class="author-table__column author-table__column_4">
					<p class="author-table__employed">{{ author.employed }}</p>
				</div>
				<div class="author-table__column author-table__column_5">Edit</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	authors: {
		image: any;
		name: string;
		email: string;
		function1: string;
		function2: string;
		status: boolean;
		employed: string;
	}[];
}>();
</script>

<style scoped lang="scss">
.author-table {
	border-radius: 20px;
	padding: 28px 22.5px 0.5px 21px;
	background: rgb(6, 11, 40);
	background: linear-gradient(
		135deg,
		rgba(6, 11, 40, 0.74) 0%,
		rgba(10, 14, 35, 0.71) 100%
	);
	color: var(--white-color);
	position: relative;
	&__title {
		margin-bottom: 23px;
	}
	&__sub-title {
		font-size: 10px;
		color: var(--grey-color);
		font-weight: 500;
		line-height: 150%;
	}

	&__wrapper {
	}

	&__columns {
		padding-bottom: 13px;
		display: flex;
		align-items: center;
		width: 100%;
		position: relative;
		border-bottom: 1px solid var(--grey-color);
		margin-bottom: 11px;

		&:last-child {
			border: none;
		}
	}

	&__status {
		padding: 1.5px 10.5px 3.5px 11.5px;
		border-radius: 8px;
		margin-left: -12px;
		line-height: 140%;
		font-weight: bold;
		font-size: 14px;
		&_offline {
			border: 1px solid var(--white-color);
		}
		&_online {
			background-color: var(--green-color);
		}
	}
	&__column {
		display: flex;
		&_1 {
		}

		&_2 {
			position: absolute;
			left: 46.62%;

			@media (max-width: 640px) {
				display: none;
			}
		}

		&_3 {
			position: absolute;
			@media (min-width: 480px) {
				left: 63.34%;
			}
			@media (max-width: 640px) {
				right: 0;
			}
		}

		&_4 {
			position: absolute;
			left: 79.23%;
			@media (max-width: 480px) {
				display: none;
			}
		}
		&_5 {
			position: absolute;
			left: 93.95%;
			@media (max-width: 640px) {
				display: none;
			}
		}
	}

	&__image {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: -5px;
	}

	&__image-wrapper {
		width: 40px;
		height: 40px;
		display: flex;
		overflow: hidden;
		margin-right: 15px;
		border-radius: 12px;
	}

	&__author {
		font-weight: 500;
		font-size: 14px;
	}

	&__name {
		line-height: 140%;
	}

	&__email {
		color: var(--grey-color);
		line-height: 150%;
	}

	&__function {
		font-weight: 500;
		font-size: 14px;
	}

	&__function1 {
		line-height: 140%;
	}

	&__function2 {
		color: var(--grey-color);
		line-height: 150%;
	}
}
</style>
