dojo.provide("mycustom.common.ui.LoginWidget");

dojo.require("dijit._Widget");
dojo.require("dijit._Templated");


dojo.declare("mycustom.common.ui.LoginWidget", [ dijit._Widget, dijit._Templated ],
{
		// Here is the HTML template/snippet for the widget.
		templateString:			dojo.cache("mycustom.common.ui", "LoginWidget.html"),
		// This enables us to define widgets inside our widget using 'dojoType'
		widgetsInTemplate:	true,
		
		// The postCreate function is called after the template is rendered, but before it is inserted into the DOM
		postCreate:	function()
		{
			console.log("mycustom.common.ui.LoginWidget postCreate called.");

		}

		
});
