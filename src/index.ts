import "./index.scss";

window.addEventListener("DOMContentLoaded", e => {
	// console.log("loaded")

	function parseSvg(value: number) {
		const circleMax = 50;
		const circleRatio = value / circleMax;

		const strokeMax = 490;
		const strokeValue = Math.round(circleRatio * strokeMax);
		const strokeDasharray = `${strokeValue} ${strokeMax}`

		return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	      viewBox="0 0 216.1 188.4" enable-background="new 0 0 216.1 188.4"
	     xml:space="preserve">
	<path fill="none" stroke="#dfe3e9" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"
	      stroke-miterlimit="14" d="
		M 177.5, 181.4
		c 19.4-18.4, 31.5-44.5, 31.5-73.3
		c 0-55.8-45.2-101-101-101
		S 7,52.2,7,108
		c 0,28.9,12.1,54.9,31.5,73.3">
	</path>
		<path transform="scale(-1 1) translate(-216.1 0)" fill="none" stroke="#4990e2" stroke-dasharray="${strokeDasharray}"
		      stroke-width="14" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="14" d="
		M 177.5, 181.4
		c 19.4-18.4, 31.5-44.5, 31.5-73.3
		c 0-55.8-45.2-101-101-101
		S 7,52.2,7,108
		c 0,28.9,12.1,54.9,31.5,73.3">
	</path>
</svg>`
	}

	const circle = document.querySelector("#circle .svg");

	circle.innerHTML = parseSvg(43);
})
