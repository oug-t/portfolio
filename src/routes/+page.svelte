<script>
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import CertificationCard from '$lib/components/CertificationCard.svelte';

	const experience = [
		{
			date: '2025 — PRESENT',
			title: 'Full-Stack Developer',
			company: 'UVA Research Laboratory',
			description:
				'Engineered a scalable research platform to catalog rare earth element properties. Developed immersive Three.js 3D atomic visualizations and architected high-performance PostgreSQL schemas on Amazon Aurora, reducing data retrieval latency by 40% for global academic retrieval.',
			skills: ['Node.js', 'Three.js', 'AWS EC2', 'PostgreSQL', 'Docker', 'OAuth 2.0'],
			link: 'https://www.virginia.edu/'
		},
		{
			date: 'MAY — AUG 2025',
			title: 'Software Engineer',
			company: 'Camden Nurseries',
			description:
				'Developed a full-stack e-commerce platform managing 200+ retail products. Optimized transaction processing using AWS CloudFront edge locations and leveraged AWS Elastic Beanstalk to ensure 99.9% system availability during peak operational usage.',
			skills: ['React', 'Node.js', 'AWS CloudFront', 'Elastic Beanstalk', 'APIs'],
			link: 'https://www.camdennurseries.com.au/'
		},
		{
			date: 'JUN — AUG 2024',
			title: 'Quantitative Analyst',
			company: 'Hangzhou Landscaping',
			description:
				'Engineered financial models using Python to evaluate $500,000 in procurement assets. Developed a risk-management framework monitoring 10,000+ transactions through Monte Carlo simulations, RSI indicators, and regression-based forecasting to optimize capital allocation.',
			skills: ['Python', 'Pandas', 'NumPy', 'Monte Carlo', 'Risk Management', 'Statistics'],
			link: 'https://www.sunnystone.cn/'
		}
	];

	const projects = [
		{
			title: 'difi — Git Diff Review Tool',
			description:
				'A high-performance CLI tool built in Go for interactive Git diff reviews. Features a keyboard-centric Terminal User Interface (TUI) with a file tree and editor-aware navigation, allowing users to jump directly to specific lines in Neovim/Vim for rapid code refinement.',
			tags: ['Go', 'Bubble Tea', 'Git API', 'CLI', 'Nvim Plugin'],
			link: 'https://github.com/oug-t/difi',
			stars: 230,
			thumbnail: '/difi-demo.gif',
			hnRanking: 6,
			hnLink: 'https://news.ycombinator.com/item?id=46870917'
		},
		{
			title: 'zsweep — Modern Minesweeper',
			description:
				'A performance-focused reimagining of Minesweeper with a "Monkeytype" aesthetic. Engineered for flow-state with native Vim-bindings (h/j/k/l), real-time 3BV/s metrics, and a global leaderboard integrated via Supabase for competitive play.',
			tags: ['Svelte', 'TypeScript', 'Vim', 'Supabase', 'Full-Stack'],
			link: 'https://zsweep.com',
			stars: 53,
			thumbnail: '/zsweep-demo.gif',
			hnRanking: 6,
			hnLink: 'https://news.ycombinator.com/item?id=46667849'
		},
		{
			title: 'Neovim — Core Contributor',
			description:
				'Contributed multiple Pull Requests to the Neovim core (C/Lua). Focused on Lua state change and ENV variable config supporting Vim logic.',
			tags: ['C', 'Lua', 'Open Source', 'Systems'],
			link: 'https://github.com/neovim/neovim/pulls?q=is%3Apr+author%3Aoug-t+',
			stars: '90k+',
			thumbnail: '/nvim-demo.png'
		}
	];

	const certifications = [
		{
			title: 'AWS Certified AI Practitioner',
			issuer: 'Amazon Web Services',
			date: '2025',
            link: 'https://www.credly.com/badges/639eb293-6ca7-4412-b909-01608c57cc89/linked_in_profile',
			badge: 'aws-ai-practitioner.png',
			description: 'Validated expertise in deploying production-grade AI solutions on AWS. Focused on prompt engineering, fine-tuning Foundation Models via Amazon Bedrock, and implementing low-latency inference pipelines for real-time financial data processing.'
		},
		{
			title: 'AWS Certified Cloud Practitioner',
			issuer: 'Amazon Web Services',
			date: '2025',
            link: 'https://www.credly.com/badges/896f99ca-564e-49b9-978a-177e5f111ca3/linked_in_profile',
			badge: '/aws-cloud-practitioner.png',
			description: 'Mastery of the AWS Well-Architected Framework, emphasizing security, high availability, and performance efficiency. Architected cloud-native environments leveraging Amazon Aurora for relational data and EC2/Lambda for scalable compute logic.'
		},
        {
            title: 'USACO Silver Division',
            issuer: 'USA Computing Olympiad',
            date: '2023',
            link: 'https://usaco.org/',
            badge: '/usaco-logo.png',
            description: 'Competed in high-stakes algorithmic challenges focusing on computational efficiency and data structure optimization. Solved complex problems requiring $O(n \log n)$ performance using greedy algorithms, dynamic programming, and graph theory.'
        }
	];
</script>

<section id="about" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
	<p class="text-cloud-dim mb-4 leading-relaxed">
		I am a Computer Science student at the University of Virginia focused on the intersection of 
		<span class="text-cloud">quantitative finance</span> and <span class="text-cloud">distributed systems</span>. 
		My engineering philosophy is rooted in algorithmic rigor, developed through competitive programming 
		(<span class="text-cloud">USACO Silver</span>), and a passion for building high-performance terminal tooling.
	</p>
	<p class="text-cloud-dim mb-4 leading-relaxed">
		I specialize in keyboard-first software, contributing to <span class="text-cloud">Neovim core</span> 
		and developing tools like <span class="text-cloud">difi</span> and <span class="text-cloud">zsweep</span>, 
		both of which reached the front page of <span class="text-reze">Hacker News</span>. I aim to build 
		software that is as performant as it is accessible for power users.
	</p>
</section>

<section id="experience" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
	<div class="bg-bg-main/75 sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
		<h2 class="text-cloud text-sm font-bold tracking-widest uppercase lg:sr-only">Experience</h2>
	</div>
	<div class="flex flex-col gap-12">
		{#each experience as job}
			<ExperienceCard {...job} />
		{/each}
	</div>
	<div class="mt-12">
		<a href="/resume.pdf" target="_blank" rel="noreferrer" class="group text-cloud hover:text-reze inline-flex items-center leading-tight font-semibold transition-colors">
			<span class="group-hover:border-reze border-b border-transparent pb-px transition">View Full Résumé</span>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="ml-1 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-2"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.5a.75.75 0 010 1.08l-5.5 5.5a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" /></svg>
		</a>
	</div>
</section>

<section id="projects" class="group/list mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
	<div class="bg-bg-main/75 sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
		<h2 class="text-cloud text-sm font-bold tracking-widest uppercase lg:sr-only">Projects</h2>
	</div>
	<div class="flex flex-col gap-12">
		{#each projects as project}
			<ProjectCard {...project} />
		{/each}
	</div>
	<div class="mt-12">
		<a href="https://github.com/oug-t?tab=repositories" target="_blank" rel="noreferrer" class="group text-cloud hover:text-reze inline-flex items-center leading-tight font-semibold transition-colors">
			<span class="group-hover:border-reze border-b border-transparent pb-px transition">View All Projects</span>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="ml-1 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-2"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.5a.75.75 0 010 1.08l-5.5 5.5a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" /></svg>
		</a>
	</div>
</section>

<section id="certifications" class="group/list mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
	<div class="bg-bg-main/75 sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
		<h2 class="text-cloud text-sm font-bold tracking-widest uppercase lg:sr-only">Certifications</h2>
	</div>
	<div class="flex flex-col gap-8">
		{#each certifications as cert}
			<CertificationCard {...cert} />
		{/each}
	</div>
    <div class="mt-12 flex flex-col items-start gap-4">
		<button 
			on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
			class="group text-cloud hover:text-reze inline-flex items-center leading-tight font-semibold transition-colors"
		>
			<span class="group-hover:border-reze border-b border-transparent pb-px transition">
				Back to Top
			</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="ml-1 h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-2"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.57a.75.75 0 01-1.08-1.04l5.5-5.5a.75.75 0 011.08 0l5.5 5.5a.75.75 0 11-1.08 1.04l-3.96-3.958V16.25A.75.75 0 0110 17z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>

        <p class="max-w-md text-sm leading-normal text-cloud-dim/60">
            Loosely designed in <span class="text-cloud-dim">Figma</span> and engineered in 
            <span class="text-cloud-dim">Neovim</span> on an <span class="text-cloud-dim">HHKB</span>. 
            Built with <span class="text-cloud-dim">SvelteKit</span> and 
            <span class="text-cloud-dim">Tailwind CSS</span>, reviewed with 
            <span class="text-cloud-dim">difi</span>, and deployed with 
            <span class="text-cloud-dim">Vercel</span>.
        </p>
	</div>
</section>
