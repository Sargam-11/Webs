fi
<template>
	<div class="cont" @mouseleave="hover = false">
		<h2 class="title fancy">Projects</h2>
		<p class="zero">
			<!-- These are some of the major projects I've built over the last couple of
			years.-->
			 These are some of the major
			projects I've worked on over the last few years.
		</p>
		<div class="bigproj">
			
		</div>

		<hr />

		<div data-aos="fade-in" data-aos-duration="500" class="others">
			<div @mouseover="hover = false">
				<h2 class="othsmlproj">Other small projects</h2>
				
			</div>

			<div class="grid">
				<div
					v-for="p in smlProjects"
					:key="p.title"
					:class="{ active: hover, proj: true }"
					@mouseleave="hover = false"
				>
					<Small
						@mouseover="hover = true"
						@mouseleave="hover = false"
						:title="p.title"
						:desc="p.desc"
						:link="p.link"
						:img="p.img"
						class="sml"
					/>
				</div>
			</div>

			<div class="row">
				<div class="eight columns">
					<p class="zero">
						You can check out my
						<a
							rel="noopener noreferrer"
							href="//github.com/Sargam-11"
							target="_blank"
							>GitHub (@Sargam-11)</a
						>
					</p>
				</div>
				<div class="u-cf"></div>
			</div>
		</div>
	</div>
</template>

<script>
import SmlProj from '../assets/data/smlproj.js'
export default {
	data() {
		return {
			hover: false,
			smlProjects: SmlProj.projects
		}
	}
}
</script>

<style scoped>
.othsmlproj {
	font-size: 1.75em;
}
.others {
	margin-top: 3em;
	margin-bottom: 3em;
}
.bigproj {
	margin-top: 2em;
}
.proj .sml {
	font-weight: 300;
	font-size: 1.2em;
	margin-bottom: 0.2em;
}
@media (min-width: 768px) {
	.active {
		opacity: 0.5;
		transition: 0.2s;
	}
}
.proj {
	transition: 0.3s;
}
.proj:hover {
	opacity: 1 !important;
}
.proj * {
	transition: 0.2s;
}
.grid {
	display: grid;
	grid-gap: 2em;
	grid-template-columns: repeat(2, 1fr);
	margin-top: 3em;
	margin-bottom: 3em;
}
@media (max-width: 750px) {
	.grid {
		display: grid;
		grid-gap: 1.5em;
		grid-template-columns: repeat(1, 1fr);
	}
}
</style>
