<script>
	export let title = "Title";
	export let content = "Content";
</script>

<section>
	<div>
		<h2>{title}</h2>
	</div>
	<p>{content}</p>
</section>

<style>
	section {
		display: flex;
		row-gap: 0.5rem;
		flex-direction: column;
		justify-content: flex-start;
	}

	h2:hover {
		text-decoration: underline;
	}
</style>
