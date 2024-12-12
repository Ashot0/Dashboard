import { defineStore } from 'pinia';
import { markRaw } from 'vue';
import {
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

interface Project {
	id: number;
	image: any;
	name: string;
	members: string[];
	status: string;
	budget: number | null;
	completion: number;
}

export const useProjectsStore = defineStore('project', {
	state: () => ({
		projects: [
			{
				id: 1,
				image: markRaw(AdobeXD),
				name: 'Chakra Soft UI Version',
				members: [
					markRaw(Avatar1),
					markRaw(Avatar2),
					markRaw(Avatar3),
					markRaw(Avatar4),
					markRaw(Avatar5),
				],
				budget: 14000,
				completion: 60,
				status: 'Working',
			},
			{
				id: 2,
				image: markRaw(ProgressTrack),
				name: 'Add Progress Track',
				members: [markRaw(Avatar1), markRaw(Avatar2)],
				budget: 3000,
				completion: 10,
				status: 'Canceled',
			},
			{
				id: 3,
				image: markRaw(Slack),
				name: 'Fix Platform Errors',
				members: [markRaw(Avatar1), markRaw(Avatar2)],
				budget: 0,
				completion: 100,
				status: 'Done',
			},
			{
				id: 4,
				image: markRaw(Spotify),
				name: 'Launch our Mobile App',
				members: [
					markRaw(Avatar1),
					markRaw(Avatar2),
					markRaw(Avatar3),
					markRaw(Avatar4),
				],
				budget: 32000,
				completion: 100,
				status: 'Done',
			},
			{
				id: 5,
				image: markRaw(Jira),
				name: 'Add the New Pricing Page',
				members: [
					markRaw(Avatar1),
					markRaw(Avatar2),
					markRaw(Avatar3),
					markRaw(Avatar4),
					markRaw(Avatar5),
				],
				budget: 400,
				completion: 25,
				status: 'Working',
			},
			{
				id: 6,
				image: markRaw(Invision),
				name: 'Redesign New Online Shop',
				members: [markRaw(Avatar1), markRaw(Avatar2)],
				budget: 7600,
				completion: 40,
				status: 'Working',
			},
		] as Project[],
	}),
	getters: {
		ProjectCount: (state) => state.projects.length,
	},
	actions: {
		setProjects(newProjects: Project[]) {
			this.projects = newProjects;
		},

		addProject(newProject: Project) {
			this.projects.push(newProject);
		},

		removeProjectById(id: number) {
			this.projects = this.projects.filter((project) => project.id !== id);
		},

		clearProjects() {
			this.projects = [];
		},
	},
});
