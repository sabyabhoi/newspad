<script>
	import InfoSection from "./InfoSection.svelte";
</script>

<header>
	<InfoSection title="Work"
		>I'm a second-year engineering student at Birla Institute of Technology and
		Science. I'm a Linux enthusiast. I use GNU/Linux as my primary driver, and
		like to tinker around with new, free and open-source projects.</InfoSection
	>
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
	<InfoSection title="On the Web">
		<ul>
			<li><a href="https://github.com/sabyabhoi/">@sabyabhoi</a></li>
			<li><a href="https://www.linkedin.com/in/sabyabhoi/">sabyabhoi</a></li>
			<li><a href="mailto:sabyabhoi@gmail.com">sabyabhoi@gmail.com</a></li>
		</ul>
	</InfoSection>
</header>

<style>
	ul {
		list-style-position: inside;
	}
	li {
		margin-block: 0.25rem;
	}
	ul ul {
		padding-left: 1.5rem;
	}
	a {
		color: white;
		font-weight: bold;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
</style>
