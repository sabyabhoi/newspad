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
		<Details />
	</div>
</main>

<style>
	main {
		background-color: #111827;
		line-height: 1.3;
		color: white;
		height: 100%;
		overflow: scroll;
	}
	.page {
		width: min(90%, 65rem);
		margin-inline: auto;
	}
	.banner {
		padding-block: 2rem;
		display: grid;
		place-items: center;
		font-size: 2rem;
	}
</style>
