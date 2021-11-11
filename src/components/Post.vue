<template>
	<div class="post">
		<div class="post-header">
			<div class="profile-picture">
				<a href="#"
					><img :src="pfp" alt="pfp"
				/></a>
				<p>{{ firstname }} {{ lastname }}</p>
			</div>
			<div class="post-datetime">
				<p>{{ formatDate(date) }}</p>
				<p>{{ time }}</p>
			</div>
		</div>
		<div v-if="image" class="post-image">
			<img :src="image" alt="post-img" />
		</div>
		<div class="post-text">
			<p>{{ caption }}</p>
		</div>
		<div class="post-footer">
			<div class="like-button">
				<a href="#"><img src="../assets/like.png" alt="like" /></a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Home",
	props: {
		"pfp": {required: true},
		"firstname": {required: true},
		"lastname": {required: true},
		"date": {required: true},
		"time": {required: true},
		"caption": {required: true},
		"image": {required: false},
	},
	methods: {
		formatDate(date) {
			return new Date(date).toLocaleDateString("en-US", { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })
		}
	}
};
</script>

<style scoped lang="scss">
.post {
	background-color: white;
	margin-bottom: 20px;
	box-shadow: 2px 3px 4px 2px grey;
	padding: 10px;

	.post-header {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;

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
	}

	.post-image {
		margin: 0 -10px;
		margin-top: 10px;

		img {
			width: 100%;
		}
	}

	.post-footer > .like-button img {
		width: 32px;
		height: 30px;
	}
}
</style>
