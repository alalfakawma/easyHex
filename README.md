# easyHex

Live Demo - http://alalfakawma.in/hexmenu/

Easy Chain Hex Menu Builder

Have not minified it yet, still in building stage.

Import it to your html file

You can use the function createHex to create the Hexagonal Menu.

First create a div with a class of hexCont, and inside another div that you want the hexagons to be on

    <div class="hexCont">
	<div id="hexagon"></div>
    </div>

- *ALL hexagons are stored in hexes[]*, which you can refer to after you add them in by hexes[index].
- You can also use childNodes[] array to access the ones inside the sub-menus, which makes it easier. Like hexes[1].childNodes[2].
- When referring to childNodes, always start from 2, since 0 is the SVG hex, and 1 is the Text class div.

And target the hexagon from the createHex. Eg - 

	var getHex = document.getElementsById('hexagon');
	createHex(getHex, 50, 50, '#874d4d', '#874d4d', null, '#a7c692', true, null, true, null, true, null);

Or the short version to get all 6 sub-menus

	createHex(getHex, 50, 50, '#874d4d', '#874d4d', true);

	*createHex(element, parentSize, childSize, childCol, parentCol, all, clickColor, first, second, third, fourth, fifth, sixth)*

* element = the element id/class, etc where you want the menu to be.
* parentSize = the size of the main Hexagon.
* childSize = size of it's children(max-6).
* childCol = color of children.
* parentCol = color of parent hex.
* all = (true/false) - true will show all hexagons.
* clickColor = the color of the hexagon when clicked.
* first, second, third, fourth, fifth, sixth = (true/false) - set all to false if you intend on using this. This will specify specific positions of the hexagon child.

In order to add text or any HTML element inside the Hexagons, you can use the *text()* function.

	*text(element, text, color, size, weight)*

* element = the element id/class, etc where you want the menu to be in.
* text = the text, in string form. You can use links, img, etc.
* color = set text color.
* size = text size (eg. '25px').
* weight = text weight (eg. '700').

Eg - 

	text(hexes[2], 'About Us', '#fff', '20px', '700');


# also parentSize and childSize should be same for now, need some math for the workaround which I can't think of yet.
