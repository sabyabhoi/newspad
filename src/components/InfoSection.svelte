<script>
	export let title = "Title";
</script>

<section>
	<div>
		<h1>{title}</h1>
	</div>
	<p><slot /></p>
</section>

<style>
	section {
		display: flex;
		row-gap: 0.5rem;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		margin-block: 1rem;
	}

	h1 {
		text-decoration: underline;
		text-decoration-color: rgba(255, 255, 255, 0.8);
		text-decoration-thickness: 0.2rem;
	}

	h1:hover {
		text-decoration-color: rgba(255, 255, 255, 1);
	}
</style>
