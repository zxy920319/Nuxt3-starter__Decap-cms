<template>
	<section id="register" class="section register-section">
		<div class="container">
			<div class="sec-hd">
				<span class="sec-label">{{ t[locale]['forum']['register']['label'] }}</span>
				<h2 class="sec-title">{{ t[locale]['forum']['register']['title'] }}</h2>
				<p class="sec-desc">{{ t[locale]['forum']['register']['desc'] }}</p>
				<p class="sec-desc">{{ t[locale]['forum']['register']['venue'] }}</p>
			</div>

			<aside class="forum-media-notice" aria-labelledby="forum-media-title">
				<h3 id="forum-media-title">{{ t[locale]['forum']['register']['media_title'] }}</h3>
				<p>{{ t[locale]['forum']['register']['media_notice'] }}</p>
				<p><a :href="t[locale]['forum']['register']['media_rules_href']">{{ t[locale]['forum']['register']['media_rules_label'] }}</a> · <a href="mailto:europe.forum@vcwi.nl">europe.forum@vcwi.nl</a></p>
			</aside>

			<div class="wechat-box">
				<div class="wechat-inner">
					<div class="qr-wrap">
						<div class="qr-block">
							<img src="/images/forum-2026/VCWI_wechat.jpg" alt="VCWI微信公众号二维码" width="120" height="120">
						</div>
						<p class="qr-caption">{{ t[locale]['forum']['register']['wechat_id'] }}</p>
					</div>
					<div class="wechat-text">
						<h3>{{ t[locale]['forum']['register']['follow_title'] }}</h3>
						<p v-html="t[locale]['forum']['register']['follow_desc_html']"></p>
						<div class="contact-row">
							<a :href="t[locale]['forum']['register']['contact_email_href']">
								<img draggable="false" role="img" class="emoji" alt="📧" src="/images/forum-2026/1f4e7.svg">
								{{ t[locale]['forum']['register']['contact_email'] }}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { useLocaleStore } from '@/store/locale'
import { storeToRefs } from 'pinia'
const store = useLocaleStore()
const { locale } = storeToRefs(store)
const { data: t } = await useAsyncData('lang', () => queryContent('/i18n/locales').findOne())

</script>
