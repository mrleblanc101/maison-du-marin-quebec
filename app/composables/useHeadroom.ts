/**
 * Headroom-style scroll direction tracking: true while the header should be
 * shown (near the top, or scrolling up), false while it should hide
 * (scrolling down, past `offset`). The component decides how to render that
 * (transform/transition) — this just tracks direction.
 */
export function useHeadroom(
    options: { offset?: number; tolerance?: number } = {},
) {
    const { offset = 72, tolerance = 5 } = options
    const visible = ref(true)

    if (import.meta.client) {
        let lastY = window.scrollY
        let ticking = false

        const update = () => {
            const currentY = window.scrollY

            if (currentY <= offset) {
                visible.value = true
            } else if (Math.abs(currentY - lastY) > tolerance) {
                visible.value = currentY < lastY
            }

            lastY = currentY
            ticking = false
        }

        const onScroll = () => {
            if (ticking) return
            ticking = true
            requestAnimationFrame(update)
        }

        onMounted(() =>
            window.addEventListener('scroll', onScroll, { passive: true }),
        )
        onUnmounted(() => window.removeEventListener('scroll', onScroll))
    }

    return visible
}
