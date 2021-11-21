<template>
	<div class="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link> |
		<router-link to="/contact-us">Contact Us</router-link>
	</div>
</template>

<script>
export default {
	name: "NavMenu",
};
</script>

<style scoped lang="scss">
.nav {
	min-width: 200px;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #2f9e41;
		}
	}
}
</style>