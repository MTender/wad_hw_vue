<template>
	<div class="home">
		<button v-on:click="resetLikes()">Reset Likes</button>
		<Post
			v-for="post in posts"
			:key="post.id"
			:id="post.id"
			:pfp="post.author.pfp"
			:firstname="post.author.firstname"
			:lastname="post.author.lastname"
			:date="post.date"
			:time="post.time"
			:caption="post.caption"
			:image="post.image"
			:like="post.like"
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
	methods: {
		resetLikes() {
			this.$store.dispatch("resetLikesAction");
		}
	}
};
</script>

<style scoped lang="scss">
.home {
	display: flex;
	flex-flow: column nowrap;
	justify-content: left;
}
</style>