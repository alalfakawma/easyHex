// init var and arrays
var hexes = [];
var hexSVG;
var clickTimes = 0;

// create childs function

function createHex(element, parentSize, childSize, childCol, parentCol, all, clickColor, first, second, third, fourth, fifth, sixth) {

	// init hexSizes and enter intial hex into elements
	hexSize(parentSize, childSize);
	element.innerHTML = hexSVG;
	element.style.width = parentSize + 'px';
	element.style.height = parentSize + 'px';
	addText(element);
	
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
		for (var u = 2; u < element.childNodes.length; u++) {
			element.childNodes[u].style.width = childSize + 'px';
			element.childNodes[u].style.height = childSize + 'px';
		}
	}

	clickEvent(element.childNodes[0], element.childNodes[1], clickColor);
	fillWithSvgs(element.childNodes);
	changeColor(element, childCol, parentCol);
}

// change the size of hex
function hexSize(size, child) {
	hexSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size + '" viewbox="0 0 173.20508075688772 200"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"></path></svg>';
	hexSVGchild = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="' + child + '" height="' + child + '" viewbox="0 0 173.20508075688772 200"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z"></path></svg>';
}

// add text to hex 
function text(element, text, color, size, weight, padding, cc) {
	element.childNodes[1].innerHTML += text;
	element.childNodes[1].style.color = color;
	element.childNodes[1].style.fontSize = size;
	element.childNodes[1].style.fontWeight = weight;
	element.childNodes[1].style.padding = padding;
	element.childNodes[1].className += ' ' + cc;
}

// add textdiv to the hexes
function addText(theElement, customClass) {
	var createText = document.createElement('div');
	createText.setAttribute('class', 'text');

	theElement.appendChild(createText);
}

// fill the elements with svgs
function fillWithSvgs(element) {
	for(var o = 2; o < element.length; o++) {
		element[o].innerHTML = hexSVGchild;
		addText(element[o]);
	}
}

// change color function
function changeColor(eleChange, childColor, parentColor) {
	for(var z = 2; z < eleChange.childNodes.length; z++) {
		eleChange.childNodes[z].style.fill = childColor;
	}
	eleChange.childNodes[0].style.fill = parentColor;
}

// EVENT LISTENING

// clickevent

function clickEvent(element, element2, clickColor) {
	element.addEventListener('click', function() {
		clickTimes++;
		var parent = this.parentElement
		for(var s = 2; s < parent.childNodes.length; s++) {
			if (parent.childNodes[s].classList.contains('hexAnimate')) {
				parent.childNodes[s].classList.remove('hexAnimate');
				parent.style.zIndex = 'initial';
				element.childNodes[0].style.fill = '';
			} else {
				parent.childNodes[s].classList.add('hexAnimate');
				parent.style.zIndex = clickTimes;
				element.childNodes[0].style.fill = clickColor;
			}
		}
	});

	element2.addEventListener('click', function() {
		clickTimes++;
		var parent = this.parentElement
		for(var s = 2; s < parent.childNodes.length; s++) {
			if (parent.childNodes[s].classList.contains('hexAnimate')) {
				parent.childNodes[s].classList.remove('hexAnimate');
				parent.style.zIndex = 'initial';
				element.childNodes[0].style.fill = '';
			} else {
				parent.childNodes[s].classList.add('hexAnimate');
				parent.style.zIndex = clickTimes;
				element.childNodes[0].style.fill = clickColor;
			}
		}
	});
}