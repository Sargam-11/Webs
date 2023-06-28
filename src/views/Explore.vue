<template>
	<div class="cont">
		<h2 class="title fancy">Explore</h2>
		<p class="sub">Miscellaneous stuff about me.</p>

		<div data-aos="fade-up">
			<a rel="noopener noreferrer"  target="_blank">
				<div id="design" class="coolbox">
					<div class="flexbox">
						<h6>Design</h6>
						<span>
							<bx-bx-link-external />
						</span>
					</div>
					<p>
						In my free time I enjoy picking up my camera check out my clicks here 
					</p>
				</div>
			</a>
		</div>

		<div data-aos="fade-up" data-aos-delay="100">
			
		</div>

		<div data-aos="fade-up" data-aos-delay="200">
			<a rel="noopener noreferrer" href="http://sargam.online/" target="_blank">
				<div id="organ" class="coolbox">
					<div class="flexbox">
						<h6>Résumé</h6>
						<span>
							<bx-bx-link-external />
						</span>
					</div>
					<p>
						Check out my resume here
					</p>
				</div>
			</a>
		</div>

	
		<br />
		<br />

		<Top id="top-tracks" style="margin-bottom: 4em" />

		<Website data-aos="fade-in" />

		<Contact data-aos="fade-in" style="margin-top: 4em" />
	</div>
</template>

<style scoped lang="scss">
.socials {
	display: grid;
	grid-gap: 1em;
	grid-template-columns: repeat(2, 1fr);
}
.socials a {
	color: rgb(30, 80, 165);
	transition: 0.2s;
	font-size: 1.1em;
}
.socials a:hover {
	opacity: 0.5;
}
.coolbox {
	padding: 2em;
	border-radius: 1em;
	margin-bottom: 1.25em;
	transition: 0.3s;
	color: #222;
	h6 {
		margin-bottom: 0.25em;
		font-size: 1.2em;
		margin-right: 0.2em;
	}
	.flexbox {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		span {
			margin-bottom: -0.135em;
		}
	}
	p {
		margin-bottom: 0;
	}
	.cta {
		margin: 0;
		text-transform: none;
		letter-spacing: 0;
	}
}
#design {
	background-color: rgba(146, 184, 250, 0.288);
	h6 {
		color: rgb(43, 85, 158);
	}
}
#design:hover {
	background-color: rgba(146, 184, 250, 0.4);
}
#events {
	background-color: rgba(146, 250, 245, 0.288);
	h6 {
		color: rgb(8, 128, 72);
	}
}
#events:hover {
	background-color: rgba(151, 228, 225, 0.384);
}
#organ {
	background-color: rgba(197, 116, 235, 0.171);
	h6 {
		color: rgb(136, 26, 139);
	}
}
#organ:hover {
	background-color: rgba(194, 114, 231, 0.26);
}
</style>
