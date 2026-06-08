<template>
	<section id="about" class="section">
		<div class="container">
			<div class="sec-hd">
				<span class="sec-label">ABOUT THE FORUM</span>
				<h2 class="sec-title">关于 2026 欧洲论坛</h2>
				<p class="sec-desc">
					"欧洲论坛"是<a href="https://ucpae.com/" target="_blank" rel="noopener">欧洲华人专业协会联盟</a>（UCPAE）的年度旗舰活动。2026年由<a href="https://vcwi.nl/" target="_blank" rel="noopener">荷兰华人学者与工程师协会</a>（VCWI）承办，选址欧洲科技重镇埃因霍温，汇聚欧洲各国华人精英，共谋中欧合作新篇章。
				</p>
			</div>

			<div class="org-row">
				<div class="org-card">
					<div class="org-tag">主办</div>
					<h3>UCPAE</h3>
					<p class="org-sub"><a href="https://ucpae.com/" target="_blank" rel="noopener">欧洲华人专业协会联盟</a></p>
					<p class="org-desc">覆盖欧洲30余个国家，汇聚各领域华人专业人士，是欧洲最具影响力的华人专业联盟组织。</p>
				</div>
				<div class="org-x">×</div>
				<div class="org-card blue-border">
					<div class="org-tag blue">承办</div>
					<h3 class="blue-text">VCWI</h3>
					<p class="org-sub"><a href="https://vcwi.nl/" target="_blank" rel="noopener">荷兰华人学者与工程师协会</a></p>
					<p class="org-desc">深耕荷兰科技产业生态，汇聚在荷华人学者与工程师，连接ASML、飞利浦等顶级企业，是荷兰最具影响力的华人专业学术团体。</p>
				</div>
			</div>

			<div class="why-box">
				<h3 class="why-title">为什么选择埃因霍温？</h3>
				<div class="why-grid">
					<div v-for="item in whyItems" :key="item.title" class="why-item">
						<span class="why-icon">
							<img draggable="false" role="img" class="emoji" :alt="item.alt" :src="item.icon">
						</span>
						<div>
							<strong>{{ item.title }}</strong>
							<p>{{ item.description }}</p>
						</div>
					</div>
				</div>
			</div>

			<div class="attend-section">
				<h3 class="sub-title text-center">谁应该参加本次论坛？</h3>
				<div class="audience-grid">
					<div v-for="audience in audiences" :key="audience.num" class="audience-card fade-in">
						<div class="aud-num">{{ audience.num }}</div>
						<h4>{{ audience.title }}</h4>
						<p>{{ audience.description }}</p>
						<div class="aud-gain">
							<span class="gain-label">您将获得</span>
							<ul>
								<li v-for="gain in audience.gains" :key="gain">{{ gain }}</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const whyItems = [
	{ alt: '🏭', icon: '/images/forum-2026/1f3ed.svg', title: '欧洲科技心脏', description: 'ASML、飞利浦全球总部所在地，欧洲最重要的高科技产业集群之一' },
	{ alt: '🌍', icon: '/images/forum-2026/1f30d.svg', title: '绝佳地理枢纽', description: '毗邻德比法三国，从法兰克福、布鲁塞尔、阿姆斯特丹均可便捷直达' },
	{ alt: '💡', icon: '/images/forum-2026/1f4a1.svg', title: '创新创业沃土', description: 'High Tech Campus集聚200+科技企业，被誉为"欧洲最聪明的平方公里"' },
	{ alt: '🤝', icon: '/images/forum-2026/1f91d.svg', title: '中荷合作桥头堡', description: '荷兰是中国在欧洲最重要的贸易和科技合作伙伴之一，双边往来密切' },
]

const audiences = [
	{
		num: '01',
		title: '华人科技精英',
		description: '欧洲高校、科研机构、跨国企业的华人科学家、工程师及研究员',
		gains: ['前沿技术洞见与行业趋势报告', '高质量同行交流与人脉网络', '中欧合作机会精准对接'],
	},
	{
		num: '02',
		title: '创业者 & 企业家',
		description: '寻求融资、合作或市场拓展的中欧初创创始人及成长期企业负责人',
		gains: ['直面欧洲顶级投资人的Pitch舞台', '跨国落地资源与生态支持', '中欧双市场战略伙伴对接'],
	},
	{
		num: '03',
		title: '企业高管 & 决策者',
		description: '寻求开拓中欧市场、建立战略合作的跨国企业高管与CVC负责人',
		gains: ['精准高端人才招募渠道', '行业生态深度洞察与竞情', '品牌在华人精英圈层的影响力'],
	},
	{
		num: '04',
		title: '政策研究者 & 学者',
		description: '从事中欧关系、国际化人才政策、可持续发展等领域的研究者及政策顾问',
		gains: ['多元视角的前沿政策探讨', '跨学科学术交流与合作', '面向决策层的政策发声平台'],
	},
]
</script>
