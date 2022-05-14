<script>
	import InfoSection from "./InfoSection.svelte";
	import { Github, Linkedin, EnvelopeFill } from "svelte-bootstrap-icons";
</script>

<InfoSection title="On the Web">
	<ul class="links">
		<li>
			<a href="https://github.com/sabyabhoi/"> <Github />@sabyabhoi</a>
		</li>
		<li>
			<a href="https://www.linkedin.com/in/sabyabhoi/">
				<Linkedin />sabyabhoi</a
			>
		</li>
		<li>
			<a href="mailto:sabyabhoi@gmail.com"
				><EnvelopeFill />sabyabhoi@gmail.com</a
			>
		</li>
	</ul>
</InfoSection>

<style>
	a {
		color: white;
		font-weight: bold;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
	.links {
		list-style-type: none;
	}
</style>
