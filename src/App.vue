<template>
	<div id="app">
		<Header />
		<div id="main">
			<router-view />
		</div>
		<Footer />
	</div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
	name: "App",
	components: {
		Header,
		Footer,
	},
};
</script>


<style lang="scss">
html {
	height: 100%;
	width: 100%;
}

body {
	height: 100%;
	width: 100%;
	background-color: rgb(17, 104, 138);
	position: relative;
	margin: 0;
	font-family: "Roboto", sans-serif;
}

#app {
	height: 100%;
	display: flex;
	flex-flow: column nowrap;
	align-items: stretch;
}

#main {
	flex-grow: 1;
}
</style>
