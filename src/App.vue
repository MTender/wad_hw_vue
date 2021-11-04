<template>
	<div id="app">
		<Header />
		<div id="main">
			<div class="center-area">
				<router-view />
			</div>
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

.center-area {
    background-color: rgb(245, 245, 245);
    width: 50%;
    min-width: 300px;
    height: 100%;
    margin: 0 auto;
    padding: 3%;
    padding-top: 50px;
}
</style>
