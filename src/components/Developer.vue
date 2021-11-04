<template>
	<div class="developer">
		<img src="../assets/pfp-placeholder-640.png" alt="developer" />
		<p>{{ name }}</p>
	</div>
</template>

<script>
export default {
	name: "Developer",
	props: {
		name: String,
	},
};
</script>

<style lang="scss">
.developer {
	display: flex;
	justify-content: start;
	align-items: center;
	flex-flow: column nowrap;

	img {
		width: 200px;
	}

	p {
		font-weight: bold;
	}
}
</style>
