<template>
	<div class="about">
		<div>
			<h1>
				postIt's website's development team is comprised of only three
				people.
			</h1>
			<ul>
				<li><Developer name="Sander Soodla" /></li>
				<li><Developer name="Maria Küüsvek" /></li>
				<li><Developer name="Märt Tender" /></li>
			</ul>
		</div>
	</div>
</template>

<script>
import Developer from "@/components/Developer.vue";

export default {
	name: "About",
	components: {
		Developer,
	},
};
</script>


<style scoped lang="scss">
h1 {
	margin-bottom: 100px;
}

ul {
	list-style: none;
	display: flex;
	justify-content: space-around;
	flex-flow: row wrap;
	padding: 0;
}
</style>
