<script>
	import Navbar from "./components/Navbar.svelte";
	import Details from "./components/Details.svelte";
</script>

<main>
	<div class="page">
		<Navbar />
		<div class="banner">
			<h1>Hi, I'm Sabya.</h1>
		</div>
		<Details/>
	</div>
</main>

<style>
	main {
		background-color: black;
		color: orange;
		height: 100vh;
	}
	.page {
		width: 80%;
		margin-inline: auto;
	}
	.banner {
		padding-block: 2rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
		font-size: 2rem;
	}
</style>
