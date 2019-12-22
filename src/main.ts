// We must use the esm distribution of Vue since has Vue's compiler
// You should import everything that you use with Vue using 'vue/dist/vue.esm'
import { createApp, createComponent, h, computed, ref, watch } from 'vue/dist/vue.esm'

const Count = createComponent({
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

const app = createApp().mount({
	render: () => h(Count, { initialCount: 2 }),
}, '#app')