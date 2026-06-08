export function useForumFadeIn(rootRef) {
	let observer

	onMounted(() => {
		const root = rootRef.value
		if (!root) return

		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('in')
					}
				})
			},
			{ threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
		)

		root.querySelectorAll('.fade-in:not(.in)').forEach((el) => observer.observe(el))
	})

	onUnmounted(() => observer?.disconnect())
}
