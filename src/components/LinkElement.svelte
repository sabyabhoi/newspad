<script>
	export let link = "#";
	export let title = "foo";
</script>

<li>
	<a href={link}>
		<div><slot /></div>
		<div>{title}</div>
	</a>
</li>

<style>
	a {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		column-gap: 1rem;
		color: inherit;
		text-decoration: none;
		font-weight: bold;
	}
	a:hover {
		text-decoration: underline;
	}
</style>
