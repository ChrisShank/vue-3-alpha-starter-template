import { createApp, h } from 'vue'
import { Count } from './components/Count'

const app = createApp()

app.mount({
	render: () => h(Count, { initialCount: 2 }),
}, '#app')