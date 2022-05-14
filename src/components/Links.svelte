<script>
	import InfoSection from "./InfoSection.svelte";
	import LinkElement from "./LinkElement.svelte";
	import { Github, Linkedin, EnvelopeFill } from "svelte-bootstrap-icons";
</script>

<InfoSection title="On the Web">
	<ul class="links">
		<LinkElement link="https://github.com/sabyabhoi/" title="@sabyabhoi">
			<Github />
		</LinkElement>
		<LinkElement
			link="https://www.linkedin.com/in/sabyabhoi/"
			title="sabyabhoi"
		>
			<Linkedin />
		</LinkElement>
		<LinkElement link="mailto:sabyabhoi@gmail.com" title="sabyabhoi@gmail.com">
			<EnvelopeFill />
		</LinkElement>
	</ul>
</InfoSection>

<style>
	.links {
		list-style-type: none;
	}
</style>
