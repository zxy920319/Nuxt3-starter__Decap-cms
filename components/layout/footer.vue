<template>
	<footer>
		<div id="footer-wrapper">
			<ul>
				<li v-for="f in friends" key="f">{{ f }}</li>
			</ul>
		</div>
	</footer>
</template>

<script setup>
const friends = [
	'中国留德学者计算机学会',
	'留瑞学者通讯与计算机学会',
	'中国留荷同学会',
	'德中建筑协会',
	'比利时华人专业人士协会',
	'中英科技贸易协会',
	'荷兰华人生命科学协会',
	'瑞典华人生物医药协会',
	'德国同济校友会',
	'中国旅德学者化学化工学会',
	'爱尔兰华人专业人士协会',
	'意大利米兰博士沙龙',
	'中欧企业信息交流协会',
	'中国留德学人数学与应用数学学会',
	'法国华人汽车工程师协会',
	'华力IT论坛',
	'中欧生命科学联盟',
	'全法科技工作者协会',
	'中国旅法生物医学会',
	'旅丹华人专业人士协会',
	'中德汽车工业技术学会',
	'慕尼黑生物医学与环境健康高端人才协会',
	'德国留德学者医学及生命科学学会',
	'葡萄牙中国学生学者联合会',
	'欧洲浙江大学校友会联谊会',
	'意大利华人专业人士协会',
	'厦门大学法国校友会',
	'中法信息科学与工程协会',
	'中荷人工智能及创新发展协会',
	'荷兰华人学者工程师协会',
	'旅英中国工程师协会',
	'旅英华人化学化工学会',
	'德国中华医学联合会',
	'中国留德生命科学和生物技术学会',
	'中法城市可持续发展协会',
	'中法青年企业家协会',
	'南京大学德国校友会',
	'留德华人资源与环境学会',
	'德国华人体育科学学会',
	'山东大学德国校友会',
	'德国华人生物医药专业人士协会',
	'法中整和协会',
	'中国留法人员农业学会',
	'中国留德经济学会',
	'中国旅法工程师协会',
	'旅英中国资源与环境协会',
	'旅英中国电子信息技术协会',
	'法中企业家和管理工作者协会',
	'瑞典隆德华人专家协会',
	'同济大学法国校友会',
	'德国汽车电子协会',
	'奥中科技协会',
	'法国海外留学人员创业者协会',
	'欧洲华人汽车工程师协会',
	'中德能源协会',
	'欧中投资协会',
	'芬兰华人科技协会',
	'中国旅法航空航天协会',
	'中欧生命科学联盟',
	'海外食品华人协会',
	'中国西班牙学者合作交流协会']
</script>

<style lang="scss" scoped>
footer {
	position: relative;
	height: max-content;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: $spacing5;
	margin-inline: $spacing4;
	opacity: 0;
	animation: 5s ease 3s forwards appear;

	@keyframes appear {
		0% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	@include media(xsm) {
		display: block;
		height: auto;
		margin-top: $spacing2;
		margin-inline: 0;
	}
}

#footer-wrapper {
	grid-column: 2;
	width: 90vw;
	padding: $spacing1;
	justify-self: center;
	border-top: 0.1em solid $light-grey;

	ul {
		list-style-type: none;
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 1rem;
	}
}
</style>
