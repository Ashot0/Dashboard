<template>
	<div class="projects-table">
		<div class="projects-table__title title-base">Projects</div>
		<p class="projects-table__num">
			<Checkmark />  <span class="projects-table__num_bold">30 done</span>
			this month
		</p>
		<div v-if="projects.length" class="projects-table__projects-wrapper">
			<div class="projects-table__columns">
				<p class="projects-table__column projects-table__column_1">COMPANIES</p>
				<p class="projects-table__column projects-table__column_2">BUDGET</p>
				<p class="projects-table__column projects-table__column_3">STATUS</p>
				<p class="projects-table__column projects-table__column_4">
					COMPLETION
				</p>
			</div>

			<div
				v-for="(project, index) in props.projects"
				:key="index"
				class="projects-table__columns"
			>
				<p class="projects-table__column projects-table__column_1">
					<component
						class="projects-table__image"
						v-if="project.image"
						:is="project.image"
					/>
					{{ project.name }}
				</p>
				<div class="projects-table__column projects-table__column_2">
					<span v-if="project.budget">${{ project.budget }}</span>
					<span v-else>{{ 'Not set' }}</span>
				</div>
				<p class="projects-table__column projects-table__column_3">
					{{ project.status }}
				</p>
				<p class="projects-table__column projects-table__column_4">
					{{ project.completion }}%
					<a-progress
						:percent="project.completion"
						size="small"
						:show-info="false"
					/>
				</p>
				<div class="projects-table__column projects-table__column_5">
					<button type="button" class="projects-table__btn">
						<DotDotDot :style="{ transform: 'rotate(90deg)' }" />
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { Checkmark, DotDotDot } from '@/assets/Icons/icons';
const props = defineProps<{
	projects: {
		id: number;
		image: any;
		name: string;
		members: string[];
		status: string;
		budget: number | null;
		completion: number;
	}[];
}>();
</script>

<style scoped lang="scss">
.projects-table {
	height: 519px;
	border-radius: 20px;
	padding: 20px 22px 31.5px 22px;
	background: rgb(6, 11, 40);
	background: linear-gradient(
		135deg,
		rgba(6, 11, 40, 0.74) 0%,
		rgba(10, 14, 35, 0.71) 100%
	);
	color: var(--white-color);
	position: relative;
	&__image {
		width: 20px;
		height: 20px;
	}
	&__btn {
		background: none;
		width: 20px;
		height: 20px;
		color: var(--grey-color);
	}

	&__title {
		margin-bottom: 6px;
	}

	&__num {
		font-size: 14px;
		font-weight: normal;
		line-height: 140%;
		color: var(--grey-color);
		margin-bottom: 28px;
		&_bold {
			font-weight: bold;
		}
	}

	&__projects-wrapper {
		width: 100%;
		height: 380.5px;
	}

	&__columns {
		display: flex;
		align-items: center;
		width: 100%;
		position: relative;
		border-bottom: 1px solid var(--grey-color);
		padding-bottom: 21px;
		margin-bottom: 21.5px;

		&:last-child {
			border: none;
		}
	}

	&__column {
		display: flex;
		&_1 {
			display: flex;
			gap: 17.5px;
		}

		&_2 {
			position: absolute;
			left: 41.5%;
			display: flex;
			gap: 0px;

			@media (max-width: 640px) {
				display: none;
			}
		}

		&_3 {
			position: absolute;
			@media (min-width: 480px) {
				left: 58.81%;
			}
			@media (max-width: 640px) {
				right: 0;
			}
		}

		&_4 {
			position: absolute;
			display: flex;
			flex-direction: column;
			gap: 4px;
			left: 76.94%;
			width: 120px;
			*:last-child {
				@media (max-width: 1024px) {
					display: none;
				}
			}

			@media (max-width: 480px) {
				display: none;
			}
		}
		&_5 {
			position: absolute;
			left: 91.88%;
			@media (max-width: 640px) {
				display: none;
			}
		}
	}
}
</style>
