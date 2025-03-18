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
			div.setAttribute("class", `col col${i}`);
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

function triggerListener(divName) {
	let divN = document.querySelector(divName);
	divN.addEventListener("mouseover", (e) => {
		e.target.classList.toggle("hover-over");
	});
}

createNbyMGrid(16, 16, ".container");
triggerListener(".container");
