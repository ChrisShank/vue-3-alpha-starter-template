import { createApp, createComponent, h } from 'vue/dist/vue.esm'

const App = createComponent({
	template: 'Hello {{ foo }}',

	props: {
		foo: { required: true, type: String }
	}
})

const vm = createApp().mount({ render: () => h(App, { foo: 'World' }) }, '#app')