import "./app.scss";
import template from "./app.html";
import {Options, Vue} from "vue-class-component";
import {Circle} from "./circle/circle";

@Options({
	template,
	components: {
		Circle,
	}
})
export class App extends Vue {
	get info() {
		return {
			title: "Pedro's weekly goal",
		}
	}

	/** Lifecycle */
	created() {
		//
	}

	/** Methods */
	async init() {
		//
	}
}
