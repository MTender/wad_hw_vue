<template>
	<div class="footer-wrapper">
		<div class="footer">
			<div class="logo">
				<a href="index.html"
					><img
						src="../assets/logo-120.png"
						id="header-logo"
						alt="logo"
				/></a>
			</div>
			<div class="info">
				<h2>postIt Inc.</h2>
				<NavMenu />
			</div>
		</div>
	</div>
</template>

<script>
import NavMenu from "@/components/NavMenu.vue";

export default {
	name: "Footer",
	components: {
		NavMenu,
	},
};
</script>

<style scoped lang="scss">
.footer-wrapper {
	background-color: white;
	padding: 20px;
	background: rgb(141, 238, 255);

	.footer {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;

		.logo a #header-logo {
			height: 60px;
		}
	}

	.info {
		display: flex;
		justify-content: start;
		flex-flow: column nowrap;
		align-items: flex-end;

		h2 {
			margin: 0 0 10px 0;
			color: #2c3e50;
		}
	}
}
</style>