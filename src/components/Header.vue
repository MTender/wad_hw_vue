<template>
	<div class="header-wrapper">
		<div class="header">
			<div class="logo">
				<a href="index.html"
					><img src="../assets/logo.png" id="header-logo" alt="logo"
				/></a>
				<NavMenu />
			</div>
			<div class="search">
				<div class="search-box">
					<input type="search" id="search-box" placeholder="" />
				</div>
				<div class="search-button">
					<input
						type="submit"
						id="search-button"
						value="Search"
						onclick="location.href='index.html'"
					/>
				</div>
			</div>
			<div class="profile-picture" id="current-user-pfp">
				<a href="#"
					><img src="../assets/pfp-placeholder.png" alt="pfp"
				/></a>
			</div>
		</div>
	</div>
</template>

<script>
import NavMenu from "@/components/NavMenu.vue";

export default {
	name: "Header",
	props: {},
	components: {
		NavMenu,
	},
};
</script>

<style scoped lang="scss">
.header-wrapper {
	background-color: white;
	padding: 20px;
	position: sticky;
	top: 0;

	.header {
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;

		.logo {
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			align-items: center;
		}

		.search {
			width: 50%;
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;

			> .search-box {
				width: 80%;
				height: 80%;
			}

			> .search-button {
				width: 20%;
				height: 80%;
				min-width: 54px;
			}

			input {
				box-sizing: border-box;
				width: 100%;
				height: 100%;
				border: 2px solid lightgrey;
				border-radius: 3px;
			}

			input:focus {
				outline: none;
			}

			#search-button {
				background-color: rgb(17, 104, 138);
				color: white;
				font-weight: bold;
				border: none;
				cursor: pointer;
			}

			#search-button:hover {
				background-color: rgb(102, 131, 138);
			}
		}

		> div {
			min-width: 300px;
		}

		.profile-picture {
			img {
				width: 32px;
				height: 32px;
				border-radius: 50%;
			}

			p {
				margin-top: 2px;
			}

			> a {
				float: right;
			}
		}
	}
}
</style>