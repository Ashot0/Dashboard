<template>
	<div class="projects-big-block">
		<button type="button" class="projects-big-block__btn"><DotDotDot :style="{ transform: 'rotate(90deg)' }"/></button>
		<div class="projects-big-block__title">Projects</div>
		<p class="projects-big-block__num"><Checkmark/>  <span class="projects-big-block__num_bold">30 done</span> this month</p>
		<div class="projects-big-block__projects-wrapper">
			<div class="projects-big-block__columns">
				<p class="projects-big-block__column projects-big-block__column_1">
					COMPANIES
				</p>
				<p class="projects-big-block__column projects-big-block__column_2">
					MEMBERS
				</p>
				<p class="projects-big-block__column projects-big-block__column_3">
					BUDGET
				</p>
				<p class="projects-big-block__column projects-big-block__column_4">
					COMPLETION
				</p>
			</div>

			<div v-for="(project, index) in projects" :key="index"  class="projects-big-block__columns">
				<p class="projects-big-block__column projects-big-block__column_1">
					<component class="projects-big-block__image" :is="project.image" />
					{{ project.name }}
				</p>
				<p class="projects-big-block__column projects-big-block__column_2">
					<div v-for="(member, index) in project.members" :key="index" ><component :is="member" /></div>
				</p>
				<p class="projects-big-block__column projects-big-block__column_3">
					<span v-if="project.budget">${{ project.budget }}</span>
					<span v-else>{{ 'Not set' }}</span>
				</p>
				<p class="projects-big-block__column projects-big-block__column_4">
					{{ project.completion }}%
					<a-progress
						:percent="project.completion"
						size="small"
						:show-info="false"
					/>
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	Checkmark,
	DotDotDot,
	AdobeXD,
	ProgressTrack,
	Slack,
	Spotify,
	Jira,
	Invision,
	Avatar1,
	Avatar2,
	Avatar3,
	Avatar4,
	Avatar5,
} from '@/assets/Icons/icons';
const projects = [
	{
		image: AdobeXD,
		name: 'Chakra Soft UI Version',
		members: [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5],
		budget: 14000,
		completion: 60,
	},
	{
		image: ProgressTrack,
		name: 'Add Progress Track',
		members: [Avatar1, Avatar2],
		budget: 3000,
		completion: 10,
	},
	{
		image: Slack,
		name: 'Fix Platform Errors',
		members: [Avatar1, Avatar2],
		budget: null,
		completion: 100,
	},
	{
		image: Spotify,
		name: 'Launch our Mobile App',
		members: [Avatar1, Avatar2, Avatar3, Avatar4],
		budget: 32000,
		completion: 100,
	},
	{
		image: Jira,
		name: 'Add the New Pricing Page',
		members: [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5],
		budget: 400,
		completion: 25,
	},
	{
		image: Invision,
		name: 'Redesign New Online Shop',
		members: [Avatar1, Avatar2],
		budget: 7600,
		completion: 40,
	},
];
</script>

<style scoped lang="scss">
.projects-big-block {
	width:66.06%;
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
	@media (max-width:1024px) {
		width: 100%;
		
	}
	&__image{
		width: 20px;
		height: 20px;
	}
	&__btn {
		background: none;
		position: absolute;
		top: 22.5px;
		right: 22.5px;
		width: 20px;
		height: 20px;
		color: var(--grey-color);
	}

	&__title {
		font-size: 18px;
		font-weight: bold;
		line-height: 140%;
		margin-bottom: 6px;
	}

	&__num {
		font-size: 14px;
		font-weight: normal;
		line-height: 140%;
		color: var(--grey-color);
		margin-bottom: 28px;
		&_bold{
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
			left: 44.47%;
			display: flex;
			gap: 0px;
			
		@media (max-width:640px) {
				display: none;
			}	
		}

		&_3 {
			position: absolute;
			@media (min-width: 480px) {
			left: 65.61%;
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
			left: 83.15%;
			width: 120px;
				*:last-child{
					@media (max-width:1024px) {
					display: none;
					
					}		
				}
		
		@media (max-width:480px) {
				display: none;
			}	
		}
	}
}
</style>
