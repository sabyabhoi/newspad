<script>
	import Navbar from "./components/Navbar.svelte";
	import Details from "./components/Details.svelte";

	let lightMode = false;
</script>

<main class={lightMode ? "light" : "dark"}>
	<div class="page">
		<Navbar {lightMode} on:click={() => (lightMode = !lightMode)}/>
		<div class="banner">
			<h1>Hi, I'm Sabya.</h1>
		</div>
		<Details />
	</div>
</main>

<style>
	.dark {
		background-color: #111827;
		color: white;
	}
	.light {
		background-color: #fffeee;
		color: black;
	}
	main {
		line-height: 1.3;
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
