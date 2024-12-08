<template>
	<div ref="earthContainer" class="earth-container"></div>
</template>

<script setup lang="ts">
// import * as THREE from 'three';

// const earthContainer = ref<HTMLDivElement | null>(null);

// onMounted(() => {
// 	// Размеры контейнера
// 	const width = earthContainer.value?.clientWidth || window.innerWidth;
// 	const height = earthContainer.value?.clientHeight || window.innerHeight;

// 	// Сцена
// 	const scene = new THREE.Scene();

// 	// Камера
// 	const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
// 	camera.position.z = 5;

// 	// Рендерер
// 	const renderer = new THREE.WebGLRenderer({ antialias: true });
// 	renderer.setSize(width, height);
// 	if (earthContainer.value) {
// 		earthContainer.value.appendChild(renderer.domElement);
// 	}

// 	// Геометрия Земли
// 	const geometry = new THREE.SphereGeometry(1, 32, 32);

// 	// Текстура Земли
// 	const textureLoader = new THREE.TextureLoader();
// 	const earthTexture = textureLoader.load(
// 		'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/earth_atmos_2048.jpg'
// 	);

// 	const material = new THREE.MeshStandardMaterial({ map: earthTexture });
// 	const earth = new THREE.Mesh(geometry, material);
// 	scene.add(earth);

// 	// Освещение
// 	const light = new THREE.PointLight(0xffffff, 1);
// 	light.position.set(5, 5, 5);
// 	scene.add(light);

// 	// Анимация
// 	const animate = () => {
// 		requestAnimationFrame(animate);

// 		// Вращение Земли
// 		earth.rotation.y += 0.01;

// 		renderer.render(scene, camera);
// 	};

// 	animate();

// 	// Обработка изменения размера окна
// 	window.addEventListener('resize', () => {
// 		const newWidth = earthContainer.value?.clientWidth || window.innerWidth;
// 		const newHeight = earthContainer.value?.clientHeight || window.innerHeight;

// 		camera.aspect = newWidth / newHeight;
// 		camera.updateProjectionMatrix();
// 		renderer.setSize(newWidth, newHeight);
// 	});
// });
</script>

<style scoped>
.earth-container {
	width: 100%;
	height: 100vh;
	overflow: hidden;
}
</style>
