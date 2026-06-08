<template>
	<section id="schedule" class="section bg-alt">
		<div class="container">
			<div class="sec-hd">
				<span class="sec-label">PROGRAM SCHEDULE</span>
				<h2 class="sec-title">两天论坛完整日程</h2>
				<p class="sec-desc">精心设计的两天议程，兼顾深度学习、高效社交与沉浸式产业体验</p>
			</div>

			<div class="schedule-tabs">
				<button
					v-for="tab in tabs"
					:key="tab.day"
					type="button"
					class="tab-btn"
					:class="{ active: activeDay === tab.day }"
					@click="activeDay = tab.day"
				>
					{{ tab.label }}
				</button>
			</div>

			<div
				v-for="tab in tabs"
				:key="tab.day"
				class="day-content"
				:class="{ active: activeDay === tab.day }"
			>
				<div class="timeline">
					<div v-for="item in tab.items" :key="item.time + item.title" class="tl-item fade-in">
						<div class="tl-time">{{ item.time }}</div>
						<div class="tl-dot" :class="item.dotClass" />
						<div class="tl-card">
							<span class="tl-badge" :class="item.badgeClass">{{ item.badge }}</span>
							<h4>{{ item.title }}</h4>
							<p>{{ item.description }}</p>
							<div v-if="item.tags?.length" class="tl-tags">
								<span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
							</div>
							<div v-if="item.tracks?.length" class="tl-tracks">
								<span
									v-for="track in item.tracks"
									:key="track.label"
									:class="track.className"
								>{{ track.label }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const activeDay = ref(1)

const tabs = [
	{
		day: 1,
		label: '第一天 · 10月9日（周五）',
		items: [
			{
				time: '08:30',
				dotClass: 'reg-dot',
				badge: '注册签到',
				badgeClass: 'badge-reg',
				title: '嘉宾报到 & 会前交流',
				description: '现场报到、领取会议材料，参观展区，与早到嘉宾提前交流建立联系',
			},
			{
				time: '09:30',
				dotClass: 'ceremony-dot',
				badge: '开幕式',
				badgeClass: 'badge-ceremony',
				title: '开幕式 & 领导致辞',
				description: 'UCPAE联盟主席、VCWI会长及嘉宾代表致辞，正式宣告论坛开幕',
			},
			{
				time: '10:00',
				dotClass: 'keynote-dot',
				badge: '主旨演讲',
				badgeClass: 'badge-keynote',
				title: '主旨演讲 I & II',
				description: '两场连续主旨演讲，聚焦中欧合作宏观战略与国际化人才议题，奠定论坛基调',
				tags: ['K1 中欧合作新机遇与挑战', 'K2 国际化人才需求与流动'],
			},
			{
				time: '12:00',
				dotClass: 'social-dot',
				badge: '商务午餐',
				badgeClass: 'badge-social',
				title: 'Networking Lunch & Poster Session',
				description: '用餐期间同步进行学术海报展示，轻松氛围中促进跨领域交流与合作洽谈',
			},
			{
				time: '13:30',
				dotClass: 'session-dot',
				badge: '并行分论坛',
				badgeClass: 'badge-session',
				title: '三大分论坛同步开启',
				description: 'Tracks A–C 同时进行，参会者可根据兴趣自由选择参与',
				tracks: [
					{ label: 'A: AI技术', className: 'tr-a' },
					{ label: 'B: 能源科技', className: 'tr-b' },
					{ label: 'C: 中企出海', className: 'tr-c' },
				],
			},
			{
				time: '16:00',
				dotClass: 'coffee-dot',
				badge: '茶歇 & 社交',
				badgeClass: 'badge-coffee',
				title: 'Coffee Break + 转盘马社交时间',
				description: '创新"转盘马式"社交环节，确保每位参会者在15分钟内完成5–8位精准人脉链接，高效突破社交界限',
			},
			{
				time: '17:00',
				dotClass: 'keynote-dot',
				badge: '主旨演讲',
				badgeClass: 'badge-keynote',
				title: '主旨演讲 III & IV',
				description: '下午主旨演讲，分享中欧创新创业前沿与可持续发展最新实践',
				tags: ['K3 中欧创新与创业的未来', 'K4 可持续发展与社会责任'],
			},
			{
				time: '18:30',
				dotClass: 'gala-dot',
				badge: '欢迎晚宴',
				badgeClass: 'badge-gala',
				title: 'Welcome Dinner',
				description: '正式晚宴，深度社交。',
			},
		],
	},
	{
		day: 2,
		label: '第二天 · 10月10日（周六）',
		items: [
			{
				time: '09:00',
				dotClass: 'session-dot',
				badge: '并行分论坛',
				badgeClass: 'badge-session',
				title: '两大分论坛同步开启',
				description: 'Tracks D–E 同时进行，参会者可根据兴趣自由选择参与',
				tracks: [
					{ label: 'D: 创业创新', className: 'tr-d' },
					{ label: 'E: 生物医药', className: 'tr-e' },
				],
			},
			{
				time: '11:00',
				dotClass: 'keynote-dot',
				badge: '高端圆桌',
				badgeClass: 'badge-keynote',
				title: '跨界对话：政策 · 产业 · 学术三方论坛',
				description: '邀请政策顾问、企业高管与顶尖学者同台，就中欧合作核心议题展开高密度对话，凝聚共识，形成行动方案',
			},
			{
				time: '12:00',
				dotClass: 'ceremony-dot',
				badge: '闭幕式',
				badgeClass: 'badge-ceremony',
				title: '闭幕式 & 成果发布',
				description: '论坛总结，宣布合作备忘录签署成果，颁发优秀Pitch项目奖，发布联合倡议书，下届论坛预告',
			},
			{
				time: '12:30',
				dotClass: 'social-dot',
				badge: '午餐 & 洽谈',
				badgeClass: 'badge-social',
				title: 'Networking Lunch & 商务洽谈区',
				description: '论坛特设预约制商务洽谈专区，参会者可提前安排1v1会面，高效推进合作意向落地',
			},
			{
				time: '13:30',
				dotClass: 'visit-dot',
				badge: '荷兰现代农业考察之旅',
				badgeClass: 'badge-visit',
				title: '荷兰现代农业考察之旅',
				description: '参访荷兰世界领先的现代温室农业基地，近距离观摩精准农业、垂直农场与农业机器人，感受荷兰以小博大的农业创新精神',
				tags: ['精准温室农业', '农业机器人', '可持续农业模式', '数字农业平台'],
			},
		],
	},
]
</script>
