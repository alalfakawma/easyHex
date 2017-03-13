var mainHex = document.getElementsByClassName('hex-main')[0];
var poop = document.getElementById('poop');

// CREATE MAIN HEX CONTAINER
var hexes = [];
var hexSVG;

// create the main hex if the hex-main id exists
createHex(poop, 100, 100, null, null, true);
createHex(hexes[0], 100, 100, '#84ffc9', '#0076ee', true);
createHex(hexes[1], 100, 100, '#00b6c1', '#b284fe', true);
createHex(hexes[2], 100, 100, '#87b4a0', '#76520d', true);
createHex(hexes[3], 100, 100, '#91ab15', '#d3561f', true);
createHex(hexes[4], 100, 100, '#4c5a0c', '#289b66', true);
createHex(hexes[5], 100, 100, '#7003b5', '#565b44', true);

// create childs function

function createHex(element, parentSize, childSize, childCol, parentCol, all, clickColor, first, second, third, fourth, fifth, sixth) {

	// init hexSizes and enter intial hex into elements
	hexSize(parentSize, childSize);
	element.innerHTML = hexSVG;
	element.style.width = parentSize + 'px';
	element.style.height = parentSize + 'px';
	
	for (var i = 1; i < 7; i++) {
		// check for parameter value
		if (all !== true) {
			// skip items if false
			if (i === 1 && first !== true) {continue;}
			if (i === 2 && second !== true) {continue;}
			if (i === 3 && third !== true) {continue;}
			if (i === 4 && fourth !== true) {continue;}
			if (i === 5 && fifth !== true) {continue;}
			if (i === 6 && sixth !== true) {continue;}
		}

		// create children
		var hexChild = document.createElement('div');
		hexChild.setAttribute('class', 'hex' + i);
		element.appendChild(hexChild);
		// create the svg's inside of the childs		
		hexes.push(document.getElementsByClassName('hex' + i)[0]);

		// adjust the size of the childs for fluid animation from the center
		for (var u = 1; u < element.childNodes.length; u++) {
			element.childNodes[u].style.width = childSize + 'px';
			element.childNodes[u].style.height = childSize + 'px';
		}

	}


	clickEvent(element.childNodes[0], clickColor);
	fillWithSvgs(element.childNodes);
	changeColor(element, childCol, parentCol);
}

// change the size of hex
function hexSize(size, child) {
	hexSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size + '" viewbox="0 0 173.20508075688772 200"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"></path></svg>';
	hexSVGchild = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="' + child + '" height="' + child + '" viewbox="0 0 173.20508075688772 200"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"></path></svg>';
}

// add text to the hexes
// function addText(theElement, parentText, text1, text2, text3, text4, text5, text6) {
// 	for (var t = 1; t < theElement.childNodes.length; t++) {

	
// 		////////////// ** **   **  WORK IN PROGRESS ****   ***  ////////////////////

// 		if (theElement.childNodes) {
// 			theElement.childNodes[t].innerHTML += '<div class="text">' + '</div>'
// 		}
// 	}
// }


// fill the elements with svgs
function fillWithSvgs(element) {
	for(var o = 1; o < element.length; o++) {
		element[o].innerHTML = hexSVGchild;
	}
}


// change color function
function changeColor(eleChange, childColor, parentColor) {
	for(var z = 1; z < eleChange.childNodes.length; z++) {
		eleChange.childNodes[z].style.fill = childColor;
	}
	eleChange.childNodes[0].style.fill = parentColor;
}

// EVENT LISTENING

// clickevent

function clickEvent(element, clickColor) {
	element.addEventListener('click', function() {
		var parent = element.parentElement
		for(var s = 1; s < parent.childNodes.length; s++) {
			if (parent.childNodes[s].classList.contains('hexAnimate')) {
				parent.childNodes[s].classList.remove('hexAnimate');
				parent.style.zIndex = 'initial';
				element.childNodes[0].style.fill = '';
			} else {
				parent.childNodes[s].classList.add('hexAnimate');
				parent.style.zIndex = '999';
				element.childNodes[0].style.fill = clickColor;
			}
		}
	});
}