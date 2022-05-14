<script>
	import InfoSection from "./InfoSection.svelte";
</script>

<InfoSection title="Skills">
	<ul>
		<li>C/C++</li>
		<li>Rust</li>
		<li>GoLang</li>
		<li>Python</li>
		<ul>
			<li>Pandas</li>
			<li>Matplotlib</li>
			<li>Scikit-Learn</li>
			<li>Tensorflow</li>
		</ul>
		<li>R</li>
		<li>HTML/CSS</li>
		<li>Javascript/Typescript</li>
		<ul>
			<li>React.js</li>
			<li>Next.js</li>
			<li>Svelte</li>
		</ul>
		<li>Dart/Flutter</li>
		<li>Bash scripting</li>
		<li>LaTeX</li>
		<li>groff/nroff</li>
	</ul>
</InfoSection>

<style>
	ul {
		list-style-position: inside;
	}
	ul ul {
		padding-left: 1.5rem;
	}
</style>
