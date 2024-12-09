<template>
	<div class="projects">
		<h3 class="projects__title title-base">Projects</h3>
		<h4 class="projects__sub-title">Architects design houses</h4>
		<div class="projects__wrapper">
			<div v-for="project in projects" class="projects__project project">
				<div class="project__image">
					<img class="project__img" :src="project.image" alt="" srcset="" />
				</div>
				<p class="project__num">Project #{{ project.num }}</p>
				<h5 class="project__name title-base">{{ project.name }}</h5>
				<p class="project__description">{{ project.desc }}</p>
				<div class="project__bottom">
					<button class="project__button" type="button">VIEW ALL</button>
					<div class="project__members">
						<div v-for="(member, index) in project.members" :key="index">
							<component :is="member" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import {
	Avatar1,
	Avatar2,
	Avatar3,
	Avatar4,
	Avatar5,
} from '@/assets/Icons/icons';
import Modern from '@/assets/Images/Modern.png';
import Scandinavian from '@/assets/Images/Scandinavian.png';
import Minimalist from '@/assets/Images/Minimalist.png';

const projects = [
	{
		image: Modern,
		name: 'Modern',
		num: 1,
		desc: 'As Uber works through a huge amount of internal management turmoil.',
		members: [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5],
	},
	{
		image: Scandinavian,
		name: 'Scandinavian',
		num: 2,
		desc: 'Music is something that every person has his or her own specific opinion about.',
		members: [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5],
	},
	{
		image: Minimalist,
		name: 'Minimalist',
		num: 3,
		desc: 'Different people have different taste, and various types of music.',
		members: [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5],
	},
];
</script>

<style scoped lang="scss">
.projects {
	background: rgb(6, 11, 40);
	background: linear-gradient(
		135deg,
		rgba(6, 11, 40, 0.94) 0%,
		rgba(10, 14, 35, 0.49) 100%
	);
	border-radius: 20px;
	color: var(--white-color);
	padding: 28px 24px;

	&__title {
		margin-bottom: 6px;
	}

	&__sub-title {
		color: var(--grey-color);
		font-size: 14px;
		line-height: 150%;
		margin-bottom: 24px;
	}

	&__wrapper {
		display: flex;
		gap: 14px;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}

	&__project {
		max-width: 30%;
	}
}
.project {
	min-width: 265px;
	@media (max-width: 1280px) {
		min-width: 370px;
	}
	&__image {
		max-width: 370px;
		height: 191.5px;
		overflow: hidden;
		border-radius: 10px;
		margin-bottom: 20px;
		position: relative;
	}

	&__img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	&__num {
		font-size: 10px;
		color: var(--grey-color);
		line-height: 150%;
		font-weight: 500;
	}

	&__name {
		margin-bottom: 7.5px;
	}

	&__description {
		font-size: 14px;
		line-height: 150%;
		color: var(--grey-color);
		margin-bottom: 17px;
	}

	&__bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&__button {
		width: 110px;
		height: 35px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: none;
		border: 1px solid var(--white-color);
		color: var(--white-color);
		border-radius: 12px;
		font-size: 10px;
		font-weight: bold;
		line-height: 150%;
	}

	&__members {
		display: flex;
		* {
			width: 20px;
			height: 20px;
		}
	}
}
</style>
