import "./circle.scss";
import template from "./circle.html";
import {Options, Vue} from "vue-class-component";
import {Prop} from "vue-property-decorator";

@Options({
	template,
})
export class Circle extends Vue {
	@Prop({ default: 0 }) value: number;

	get max() {
		return 50;
	}

	get ratio() {
		return this.value / this.max;
	}

	get stroke_dasharray() {
		const max = 490;
		const value = Math.round(this.ratio * max);
		console.log(value)

		return `${value} ${max}`;
	}
}
