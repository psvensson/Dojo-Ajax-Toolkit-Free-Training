//>>built
// wrapped by build app
define("mycustom/MainApp", ["dijit","dojo","dojox","dojo/require!dijit/_Widget,dijit/_Templated,mycustom/navigator/ui/MenuBar,mycustom/common/ui/LoginWidget,mycustom/navigator/ui/ViewPort"], function(dijit,dojo,dojox){
// Provide registers the class with dojo, so that it is not loaded twice
dojo.provide("mycustom.MainApp");

// All other classes that are used either as superclasses, as constructors or in other ways referred to must be 'required'
dojo.require("dijit._Widget");
dojo.require("dijit._Templated");

dojo.require("mycustom.navigator.ui.MenuBar");
dojo.require("mycustom.common.ui.LoginWidget");
dojo.require("mycustom.navigator.ui.ViewPort");

// The declare statement actually creates the new class, named after the first argument. Superclasses are declared in the second argument,
// and the class body (an object literal with all properties, functions as non-functions) is the third argument.
dojo.declare("mycustom.MainApp", [ dijit._Widget, dijit._Templated ],
{
		// Here is the HTML template/snippet for the widget.
		templateString:			dojo.cache("mycustom", "MainApp.html", "<div class=\"mycustom_box\">\n\t<div class=\"mycustom_top\">\n\t\t<div class=\"mycustom_left\"  dojoType=\"mycustom.navigator.ui.MenuBar\"></div>\n\t\t<div class=\"mycustom_right\" dojoType=\"mycustom.common.ui.LoginWidget\"></div>\n\t</div>\n\t<div class=\"mycustom_center\">\t\n\t\t<div dojoType=\"mycustom.navigator.ui.ViewPort\"></div>\n\t</div>\n\t<div class=\"mycustom_bottom\">\n\t\tBottom area\t\n\t</div>\n</div>\n"),
		// This enables us to define widgets inside our widget using 'dojoType'
		widgetsInTemplate:	true,
		
		// The postCreate function is called after the template is rendered, but before it is inserted into the DOM
		postCreate:	function()
		{
			console.log("mycustom.MainApp postCreate called.");

		}
		
});

});
