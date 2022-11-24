import "./index.scss";

const data = [
	{
		id: "week",
		label: "Week",
		minutes: {
			current: 38,
			more: 12,
		},
		streak: {
			current: 4,
			best: 12,
		},
		list: [
			{
				name: "Walter Wynne",
				minutes: 105,
				status: "up",
			},
			{
				name: "Annabel Ferdinand",
				minutes: 52,
				status: "",
			},
			{
				name: "Marty MvFly",
				minutes: 50,
				status: "up",
			},
			{
				name: "You!",
				minutes: 38,
				status: "up",
				is_me: true,
			},
		]
	},
	{
		id: "month",
		label: "Month",
		minutes: {
			current: 12,
			more: 186,
		},
		streak: {
			current: 7,
			best: 44,
		},
		list: [
			{
				name: "Annabel Ferdinand",
				minutes: 45,
				status: "",
			},
			{
				name: "Walter Wynne",
				minutes: 2,
				status: "up",
			},
			{
				name: "You!",
				minutes: 12,
				status: "up",
				is_me: true,
			},
			{
				name: "Marty MvFly",
				minutes: 56,
				status: "",
			},
		]
	},
]

type Data = typeof data;

window.addEventListener("DOMContentLoaded", e => {
	// console.log("loaded")

	function setCircleValue(svg: SVGElement, value: number) {
		const circleMax = 50;
		const circleRatio = value / circleMax;

		/** Parse stroke-dasharray */
		const strokeMax = 490;
		const strokeValue = Math.round(circleRatio * strokeMax);
		const strokeDasharray = `${strokeValue} ${strokeMax}`

		/** Get svg path */
		const activePath = svg.querySelector(".active") as SVGPathElement;

		/** Set stroke-dasharray */
		activePath.style.strokeDasharray = strokeDasharray;
	}

	function fillData(data: Data, index: number) {
		const dataItem = data[index];

		/** Get elements */
		const circleSvg = document.querySelector("#circle .svg svg") as SVGElement;
		const minutesCurrent = document.querySelector("#minutes_current");
		const minutesMore = document.querySelector("#minutes_more");
		const streakCurrent = document.querySelector("#streak_current");
		const streakBest = document.querySelector("#streak_best");
		const list = document.querySelector("#list");
		const listItem = document.querySelector("#list_item_template");

		/** Set circle values */
		setCircleValue(circleSvg, dataItem.minutes.current);
		minutesCurrent.innerHTML = `${dataItem.minutes.current}m`;

		/** Set minutes from circle right side info section */
		minutesMore.innerHTML = `${dataItem.minutes.more}`;

		/** Set streak values */
		streakCurrent.innerHTML = `${dataItem.streak.current}`;
		streakBest.innerHTML = `${dataItem.streak.best}`;

		/** Clear list items */
		list.innerHTML = ""

		/** Set list items */
		dataItem.list.forEach((el, i) => {
			const clone = listItem.cloneNode(true) as HTMLElement;

			clone.id = "";

			/** Set list item data */
			const count = clone.querySelector(".count");
			const name = clone.querySelector(".name");
			const result = clone.querySelector(".result");

			count.innerHTML = `${i + 1}`;
			name.innerHTML = el.name;
			result.innerHTML = `${el.minutes}m`;

			if (el.status) {
				clone.classList.add(el.status);
			}

			if (el.is_me) {
				clone.classList.add("me");
			}

			/** Append item to list */
			list.append(clone);
		});
	}

	const startIndex = 0;

	/** Set leaderboard select options and value */
	const leaderboardSelect = document.querySelector("#leaderboard_select") as HTMLSelectElement;

	data.forEach(el => {
		const option = document.createElement("option") as HTMLOptionElement;

		option.value = el.id;
		option.text = el.label;

		leaderboardSelect.options.add(option);
	});

	leaderboardSelect.value = data[startIndex].id;

	/** Set leaderboard select change listener */
	leaderboardSelect.onchange = e => {
		const index = data.findIndex(el => el.id === leaderboardSelect.value);

		// console.log(index)

		if (index !== -1) {
			fillData(data, index);
		}
	}

	/** Fill data */
	fillData(data, startIndex);
})
