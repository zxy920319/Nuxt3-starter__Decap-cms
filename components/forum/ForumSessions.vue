<template>
	<section id="sessions" class="section">
		<div class="container">
			<div class="sec-hd">
				<span class="sec-label">PARALLEL SESSIONS</span>
				<h2 class="sec-title">五大并行分论坛</h2>
				<p class="sec-desc">选择您最感兴趣的领域，深度参与专业交流。每个分论坛均由行业协会主席领衔，确保内容深度与实用价值。</p>
			</div>
			<div class="sessions-grid">
				<div v-for="session in sessions" :key="session.track" class="session-card fade-in">
					<div class="track-label">{{ session.track }}</div>
					<span class="s-icon">
						<img draggable="false" role="img" class="emoji" :alt="session.alt" :src="session.icon">
					</span>
					<h3>{{ session.title }}</h3>
					<p>{{ session.description }}</p>
					<div class="s-topics">
						<span v-for="topic in session.topics" :key="topic">{{ topic }}</span>
					</div>
					<div class="s-format">
						<span v-for="format in session.formats" :key="format">{{ format }}</span>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const sessions = [
	{
		track: 'TRACK A',
		alt: '🤖',
		icon: '/images/forum-2026/1f916.svg',
		title: 'AI技术与产业前沿发展',
		description: '聚焦AI技术突破及中欧产业在AI应用的最新趋势，探讨大模型、具身智能、AI for Science在欧洲产业中的落地路径。',
		topics: ['大模型产业化', 'AI for Science', '具身智能', 'AI监管对比'],
		formats: ['主题演讲', '圆桌研讨', '观众问答'],
	},
	{
		track: 'TRACK B',
		alt: '⚡',
		icon: '/images/forum-2026/26a1.svg',
		title: '能源转型与产业合作',
		description: '聚焦全球能源转型背景下的中欧合作与产业重构，探讨新能源、电池、储能、风电、电动汽车等关键领域的发展趋势，关注绿色政策、产业竞争与科研协同，推动中欧在能源科技与产业生态中的深度对话与合作。',
		topics: ['战略与政策', '产业与技术', '科研与未来合作'],
		formats: ['主题演讲', '专题讨论'],
	},
	{
		track: 'TRACK C',
		alt: '🌐',
		icon: '/images/forum-2026/1f310.svg',
		title: '中企出海',
		description: '聚焦中企出海欧洲的战略布局与市场机遇，探讨本地化路径、双边合作模式及出海风险，为企业决策提供战略参考，助力中欧双向对接。',
		topics: ['贸易政策解读', '技术转移机制', '产业链布局', '市场准入策略'],
		formats: ['政策解读', '商业案例', 'B2B对接'],
	},
	{
		track: 'TRACK D',
		alt: '🚀',
		icon: '/images/forum-2026/1f680.svg',
		title: '创业与创新',
		description: '汇聚中欧创业团队，展示创新项目，促进资本对接与成果转化。特设创业Pitch环节，直面欧洲顶级投资人与企业CVC。',
		topics: ['DeepTech创投', '欧洲创业生态', '跨国孵化经验', '资本对接'],
		formats: ['Pitch演示', '投资人面对面', '创业圆桌'],
	},
	{
		track: 'TRACK E',
		alt: '🧬',
		icon: '/images/forum-2026/1f9ec.svg',
		title: '生物医药专题研讨会',
		description: '围绕新药研发、精准医疗及中欧医疗合作展开深度交流，探讨生物技术创业生态与中欧药监政策差异下的合作路径。',
		topics: ['mRNA技术平台', '精准医疗前沿', '中欧药监合规', '生物创业生态'],
		formats: ['主题演讲', '案例研讨', '专家问答'],
	},
]
</script>
