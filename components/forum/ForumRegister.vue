<template>
	<section id="register" class="section register-section">
		<div class="container">
			<div class="sec-hd">
				<span class="sec-label">REGISTRATION</span>
				<h2 class="sec-title">立即报名</h2>
				<p class="sec-desc">名额有限，欢迎立即报名。</p>
			</div>

			<div class="reg-grid">
				<div
					v-for="option in registrationOptions"
					:key="option.type"
					class="reg-card fade-in"
					:class="{ 'reg-featured': option.featured }"
				>
					<div class="reg-type">{{ option.type }}</div>
					<div class="reg-price-note">{{ option.priceNote }}</div>
					<p>{{ option.description }}</p>
					<ul>
						<li v-for="benefit in option.benefits" :key="benefit">{{ benefit }}</li>
					</ul>
					<a :href="option.href" class="btn-reg" :class="{ 'btn-reg-gold': option.featured }">{{ option.cta }}</a>
				</div>
			</div>

			<div class="wechat-box">
				<div class="wechat-inner">
					<div class="qr-wrap">
						<div class="qr-block">
							<img src="/images/forum-2026/VCWI_wechat.jpg" alt="VCWI微信公众号二维码" width="120" height="120">
						</div>
						<p class="qr-caption">微信号：www_vcwi_nl</p>
					</div>
					<div class="wechat-text">
						<h3>关注官方渠道，获取最新动态</h3>
						<p>关注 <strong>VCWI微信公众号</strong>，第一时间获取演讲嘉宾公布、日程更新、早鸟票优惠等重要信息。</p>
						<div class="contact-row">
							<a href="mailto:europe.forum@vcwi.nl">
								<img draggable="false" role="img" class="emoji" alt="📧" src="/images/forum-2026/1f4e7.svg">
								europe.forum@vcwi.nl
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const registrationOptions = [
	{
		type: '标准票',
		priceNote: '参会费：500欧元/人',
		description: '适合个人参会者，包含两天全程参会、商务午餐及欢迎晚宴',
		featured: false,
		cta: '立即报名',
		href: 'https://vcwi.nl/europe-forum-2026-register/',
		benefits: [
			'个人参会费：500欧元/人',
			'两天全程参会资格',
			'全部主旨演讲 & 分论坛',
			'两天商务午餐',
			'第一天欢迎晚宴',
			'第二天产业参访',
			'论坛会刊及材料',
		],
	},
	{
		type: '协会会员票',
		priceNote: 'VCWI、UCPAE及协办单位会员：200欧元/人',
		description: '适合VCWI、UCPAE及协办单位会员，享受优惠价格及优先报名权益',
		featured: true,
		cta: '立即报名',
		href: 'https://vcwi.nl/europe-forum-2026-register/',
		benefits: [
			'会员参会费：200欧元/人',
			'全部标准票权益',
			'协会会员专属折扣',
			'优先选座权',
			'优先入场资格',
			'联盟内部交流群',
		],
	},
	{
		type: '演讲嘉宾申请',
		priceNote: '诚邀各领域专家',
		description: '如您有意愿在主旨演讲、分论坛或圆桌对话中分享见解，欢迎提交演讲申请',
		featured: false,
		cta: '提交申请',
		href: 'mailto:europe.forum@vcwi.nl?subject=%E6%BC%94%E8%AE%B2%E5%98%89%E5%AE%BE%E7%94%B3%E8%AF%B7',
		benefits: [
			'免费参会资格',
			'演讲嘉宾专属权益',
			'官方媒体报道支持',
			'特邀晚宴席位',
			'嘉宾手册收录',
		],
	},
]
</script>
