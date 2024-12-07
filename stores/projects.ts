import { defineStore } from 'pinia';
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
				image: AdobeXD,
				name: 'Chakra Soft UI Version',
				members: [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5],
				budget: 14000,
				completion: 60,
				status: 'Working',
			},
			{
				id: 2,
				image: ProgressTrack,
				name: 'Add Progress Track',
				members: [Avatar1, Avatar2],
				budget: 3000,
				completion: 10,
				status: 'Canceled',
			},
			{
				id: 3,
				image: Slack,
				name: 'Fix Platform Errors',
				members: [Avatar1, Avatar2],
				budget: 0,
				completion: 100,
				status: 'Done',
			},
			{
				id: 4,
				image: Spotify,
				name: 'Launch our Mobile App',
				members: [Avatar1, Avatar2, Avatar3, Avatar4],
				budget: 32000,
				completion: 100,
				status: 'Done',
			},
			{
				id: 5,
				image: Jira,
				name: 'Add the New Pricing Page',
				members: [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5],
				budget: 400,
				completion: 25,
				status: 'Working',
			},
			{
				id: 6,
				image: Invision,
				name: 'Redesign New Online Shop',
				members: [Avatar1, Avatar2],
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
