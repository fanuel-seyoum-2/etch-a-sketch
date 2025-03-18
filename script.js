const MAX_INTENSITY = 255;

function genRandomVal(reach) {
	return Math.floor(Math.random() * (reach + 1));
}
/* createNbyMGrid
 *	Creates an N by M grid of squares and appends them to a container
 */
function createNbyMGrid(N, M, container) {
	let parDiv = document.querySelector(container);
	for (let j = 0; j < N; j++) {	
		let parentDiv = document.createElement("div");
		parentDiv.setAttribute("class", `row row${j}`);
		// New "col" divs will be created and added to a "row" div
		for (let i = 0; i < M; i++) {
			let div = document.createElement("div");
			div.setAttribute("class", `col col${i} row${j}-col${i}`);
			parentDiv.appendChild(div);
		}
		// The "row" div, containing M "col" div 
		// is appended to the parDiv or "container"
		parDiv.appendChild(parentDiv);
	}
}

function removeContainer(parentDiv, childDiv) {
	let parentD = document.querySelector(parentDiv);
	let childD = document.querySelector(childDiv);
	parentD.removeChild(childD);
}

/* createAndAppend
*	- creates a child of type childType
*	- sets the attributes of the child
* 	- appends the child to a parentDiv
*/
function createAndAppend(parentDiv, childType, childAttrs, attrValues) {
	let parentD = document.querySelector(parentDiv);
	let childD = document.createElement(childType);

	for (let i = 0; i < childAttrs.length; i++)
		childD.setAttribute(childAttrs[i], attrValues[i]);
	
	parentD.appendChild(childD);
}

function triggerHoverEffect(divName) {
	let divN = document.querySelector(divName);
	let [color, opacity] = ["black", 0.1];
	divN.addEventListener("mouseover", (e) => {
		e.target.setAttribute("style",
		` background-color: ${color};
		  opacity: ${opacity};
		`
		);
	});
}

createNbyMGrid(16, 16, ".container");
triggerHoverEffect(".container");

let promptBt = document.querySelector(".bt-list");
promptBt.addEventListener("click", () => {
	let N = +prompt("How large would you like the grid to be? [Rows]") || 16;
	if (N > 100) N = 100;
	let M = +prompt("How large would you like the grid to be? [Columns]") || 16;
	if (M > 100) M = 100;
	removeContainer(".ct", ".container");
	createAndAppend(".ct", "div", ["class"], ["container"]);
	createNbyMGrid(N, M, ".container");
	triggerHoverEffect(".container");
});
