function createNbyNGrid(N, container) {
	let parDiv = document.querySelector(container);
	for (let j = 0; j < N; j++) {	
		let parentDiv = document.createElement("div");
		parentDiv.setAttribute("class", `row row${j}`);

		for (let i = 0; i < N; i++) {
			let div = document.createElement("div");
			div.setAttribute("class", `col col${i}`);
			parentDiv.appendChild(div);
		}
		parDiv.appendChild(parentDiv);
	}
}
createNbyNGrid(16, ".container");

let container = document.querySelector(".container");
container.addEventListener("mouseover", (e) => {
	e.target.classList.toggle("hover-over");
});
