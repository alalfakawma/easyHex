# easyHex
Easy Chain Hex Menu Builder

Have not minified it yet, still in building stage.

Import it to your html file

You can use the function createHex to create the Hexagonal Menu.

First create a div with a class of hexCont, and inside another div that you want the hexagons to be on

    <div class="hexCont">
		<div id="hexagon"></div>
	</div>

*createHex(element, parentSize, childSize, childCol, parentCol, all, clickColor, first, second, third, fourth, fifth, sixth)*

* element = the element id/class, etc where you want the menu to be.
* parentSize = the size of the main Hexagon.
* childSize = size of it's children(max-6).
* childCol = color of children.
* parentCol = color of parent hex.
* all = (true/false) - true will show all hexagons.
* clickColor = the color of the hexagon when clicked.
* first, second, third, fourth, fifth, sixth = (true/false) - set all to false if you intend on using this. This will specify specific positions of the hexagon child.


# Have not implemented text feature for menu text.
# also parentSize and childSize should be same for now, need some math for the workaround which I can't think of yet.