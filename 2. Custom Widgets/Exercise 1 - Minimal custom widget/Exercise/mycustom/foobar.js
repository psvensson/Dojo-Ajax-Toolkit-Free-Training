// Provide registers the class with dojo, so that it is not loaded twice
dojo.provide("mycustom.foobar");

// All other classes that are used either as superclasses, as constructors or in other ways referred to must be 'required'
dojo.require("dijit._Widget");
dojo.require("dijit._Templated");
dojo.require("dijit.form.Button");
dojo.require("dijit.form.TextBox");

// The declare statement actually creates the new class, named after the first argument. Superclasses are declared in the second argument,
// and the class body (an object literal with all properties, functions as non-functions) is the third argument.
dojo.declare("mycustom.foobar", [ dijit._Widget, dijit._Templated ],
{
		// Here is the HTML template/snippet for the widget.
		templateString:			dojo.cache("mycustom", "foobar.html"),
		// This enables us to define widgets inside our widget using 'dojoType'
		widgetsInTemplate:	true,
		// This is just a custom property which is subtituted in using '${}' in the template
		username:						"none",

		// The postCreate function is called after the template is rendered, but before it is inserted into the DOM
		postCreate:	function()
		{
			console.log("mycustom.foobar postCreate called.");
			// Wire up the event handler of the button widget to call our internal function
			console.log("button is "+this.theokbutton);
			dojo.connect(this.theokbutton, "onClick", this, this._onOkClicked);
		},

		_onOkClicked: function(e)
		{
			console.log("mycustom.foobar _onOkClicked called.");
			var thename = this.thetextbox.get('value');
			this.selected.innerHTML = thename;
		}
});
