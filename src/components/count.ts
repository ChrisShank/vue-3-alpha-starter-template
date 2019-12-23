import { createComponent, ref, computed, watch } from 'vue'

export const Count = createComponent({
	template: `
	<button @click="count += 1">Increment Count</button>
	<button @click="count -= 1">Decrement Count</button>
	<div>Count: {{ count }}</div>
	<div>Double Count: {{ doubleCount }}</div>
	`,
	props: {
		initialCount: { required: true, type: Number }
	},
	setup(props) {
		const count = ref(props.initialCount)
		const doubleCount = computed(() => count.value * 2)

		watch(() => console.log(count.value))

		return { count, doubleCount }
	}
})