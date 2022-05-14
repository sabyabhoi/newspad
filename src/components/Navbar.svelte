<script>
	import { MoonFill, SunFill } from "svelte-bootstrap-icons";

	let lightMode = false;
</script>

<header>
	<div><b>Sabyasachi Bhoi</b></div>
	<div>
		<button>
			{#if lightMode}
				<MoonFill />
			{:else}
				<SunFill />
			{/if}
		</button>
	</div>
</header>

<style>
	header {
		margin-block: 1rem;
		padding-inline: 0.5rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	button {
		color: white;
		background: none;
		padding: 0.8rem;
		border: none;
		border-radius: 0.5rem;
	}
	button:hover {
		background-color: orange;
	}
</style>
