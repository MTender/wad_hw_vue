<template>
	<div class="home">
		<Post />
	</div>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
	name: "Home",
	components: {
		Post,
	},
};
</script>

<style scoped lang="scss">
.center-area {
	background-color: rgb(245, 245, 245);
	width: 50%;
	min-width: 300px;
	height: 100%;
	margin: 0 auto;
	padding: 3%;
	padding-top: 50px;
}

.posts-area {
	display: flex;
	flex-flow: column nowrap;
	justify-content: left;
}

.post {
	background-color: white;
	margin-bottom: 20px;
	box-shadow: 2px 3px 4px 2px grey;
	padding: 10px;
}

.post-header {
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
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
}

.post-datetime > p {
	margin: 0;
	padding: 0;
	color: rgb(117, 117, 117);
	text-align: right;
}

.post-footer > .like-button img {
	width: 32px;
	height: 30px;
}

.post-image {
	margin: 0 -10px;
	margin-top: 10px;
}

.post-image img {
	width: 100%;
}

.dropdown-content {
	display: none;
	position: absolute;
	right: 0px;
	top: 64px;
	background-color: #ffff;
	z-index: 1;
	color: gray;
	padding: 7px;
}

.show {
	display: block;
}
</style>