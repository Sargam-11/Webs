<template>
	<main>
		<div class="cont">
			<!-- <img
			data-aos="fade-in"
			class="topimg"
			src="/me.jpeg"
			alt="Arhaan Bahadur"
			draggable="false"
		/>
			<br />-->

			<div data-aos="fade-in">
				<h4 style class="name fancy">Sargam Kapoor</h4>
				<div class="yo zero" style="margin-bottom: 0.55em">
					<h6 class="zero">Student</h6>
				</div>

				<p class="zero" style="margin-bottom: 1em">
					<!-- Hello! I'm {{ `${prefix} ${age}` }} year old developer and designer,
					currently a freshman studying Computer Science. \ Hello!-->
					I’m Sargam, {{ `${prefix} ${age}` }} year old student currently
					studying cs at
					<a href="https://www.dsc.du.ac.in/" target="_blank">Delhi University</a>.
					
					I am learning coding and love experimententing 
					
				</p>


				<p class="zero">
					I’m always looking for opportunities to work on new projects,
					or do anything fun! Feel free to
					<router-link to="/explore#contact">reach out</router-link>!
				</p>
			</div>

		
		</div>

		<div class="cont" style="max-width: 43em">
			<br />
			<Page
				data-aos="fade-up"
				title="Portfolio"
				to="/projects"
				desc="I build stuff"
			/>
			<Page
				data-aos="fade-up"
				data-aos-delay="100"
				title="Explore"
				to="/explore"
			
			/>
			<Page
				data-aos="fade-up"
				data-aos-delay="150"
				title="Contact"
				to="/explore#contact"
				desc="Let's talk"
			/>
			<Page
				data-aos="fade-up"
				data-aos-delay="200"
				title="Resume"
				to="https://sargam.online"
				desc="Stuff I do"
				ext
			/>
		</div>

		<div class="cont">
			<div class="flex-center">
				<div class="six columns">
					<img
						draggable="false"
						loading="lazy"
						src="/yo.jpg"
						alt="me irl (fr)"
						class="topimg"
						style="width: 100%; margin-top: 3em; border-radius: 0.5em"
					/>
					<h6 class="center" style="opacity: 0.7">me :)</h6>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			age: 18,
			prefix: 'an',
			links: [
				'https://res.cloudinary.com/arhaanb/image/upload/v1643443900/website%20main%20page/img1.png',
				'https://res.cloudinary.com/arhaanb/image/upload/v1643443898/website%20main%20page/h_2_xubwje.png',
				'https://res.cloudinary.com/arhaanb/image/upload/v1643443897/website%20main%20page/h_3_xumzkh.png',
				'https://res.cloudinary.com/arhaanb/image/upload/v1643443897/website%20main%20page/h_4_mnae7p.png',
				'https://res.cloudinary.com/arhaanb/image/upload/v1643443901/website%20main%20page/h_5_pmkwmj.png',
				'https://res.cloudinary.com/arhaanb/image/upload/v1643443897/website%20main%20page/h_6_wzchp9.png'
			]
		}
	},
	mounted() {
		const age = this.getAge('7/23/03')
		this.age = age
		this.prefix = [8, 11, 18].includes(age) ? 'an' : 'a'
	},
	methods: {
		getAge(DOB) {
			var today = new Date()
			var birthDate = new Date(DOB)
			var age = today.getFullYear() - birthDate.getFullYear()
			var m = today.getMonth() - birthDate.getMonth()
			if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
				age = age - 1
			}
			return age
		}
	}
}
</script>

<style scoped>
p {
	text-transform: lowercase;
}
.pics img {
	width: 100%;
}

.pics {
	margin-top: 2em;
	margin-bottom: 2.5em;
}
.picsgrid {
	display: grid;
	/* grid-gap: 3em; */
	grid-template-columns: repeat(3, 1fr);
}
.socialgrid {
	display: grid;
	/* grid-gap: 3em; */
	grid-template-columns: repeat(2, 1fr);
}
.meirl {
	/* margin-top: 2em; */
	font-size: 1.1em;
}
@media (max-width: 750px) {
	.meirl {
		margin-top: 0;
	}
	.picsgrid,
	.socialgrid {
		display: grid;
		/* grid-gap: 3em; */
		grid-gap: 0;
		grid-template-columns: repeat(1, 1fr);
	}
	.pics {
		margin-top: 0;
		margin-bottom: 0;
	}
}
.yo,
.name {
	margin: 0;
	font-size: 2.15em;
}

.name {
	margin-top: 1.5em;
	margin-bottom: -0.35em;
}

h1 {
	font-size: 5em;
	margin: 0;
}
.subtitle {
	margin: 0;
	font-size: 2em;
	font-weight: 500;
	opacity: 0.65;
	margin-top: -0.25em;
}
.subtitle a {
	border: none;
}
.main {
	margin-top: 12em;
}
img.topimg {
	width: 10em;
	border-radius: 0.5em;
	margin-bottom: 1em;
}
.vh {
	margin: 0 auto;
	max-width: 50em;
	margin-top: 20vh;
}
.sml {
	font-size: 0.5em;
}
.nav a {
	border: none;
	margin: 0 1em;
	font-size: 1em;
	letter-spacing: 0.05em;
	text-transform: uppercase;
}
.nav {
	margin-top: 1em;
}
.yo a {
	transition: 0.3s;
}
.yo a:hover {
	color: #69e;
}
.topimg {
	margin-top: 0.5em;
}
@media (max-width: 750px) {
	.topimg {
		margin-top: 0;
	}
	.name {
		margin-top: 0.75em;
	}
}
</style>
