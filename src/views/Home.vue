<template>
	<div class="home">
		<Post
			v-for="post in posts"
			:key="post.id"
			:pfp="post.author.pfp"
			:firstname="post.author.firstname"
			:lastname="post.author.lastname"
			:date="post.date"
			:time="post.time"
			:caption="post.caption"
			:image="post.image"
		/>
	</div>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
	name: "Home",
	components: {
		Post,
	},
	computed: {
		posts() {
			return this.$store.state.posts;
		},
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
</style>