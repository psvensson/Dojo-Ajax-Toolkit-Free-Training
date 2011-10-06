// Provide registers the class with dojo, so that it is not loaded twice
dojo.provide("mycustom.dialog");

// All other classes that are used either as superclasses, as constructors or in other ways referred to must be 'required'
dojo.require("dijit._Widget");
dojo.require("dijit._Templated");
dojo.require("dijit.form.Button");
dojo.require("dijit.Dialog");

// The declare statement actually creates the new class, named after the first argument. Superclasses are declared in the second argument,
// and the class body (an object literal with all properties, functions as non-functions) is the third argument.
dojo.declare("mycustom.dialog", [ dijit._Widget, dijit._Templated ],
{
		// Here is the HTML template/snippet for the widget.
		templateString:			dojo.cache("mycustom", "dialog.html"),
		// This enables us to define widgets inside our widget using 'dojoType'
		widgetsInTemplate:	true,
		// This is just a custom property which is subtituted in using '${}' in the template
		caption_text:				"nothing",
		accepted:						false,

		// The postCreate function is called after the template is rendered, but before it is inserted into the DOM
		postCreate:	function()
		{
			console.log("mycustom.dialog postCreate called.");
			// Wire up the event handler of the button widget to call our internal function
			console.log("button is "+this.theokbutton);
			dojo.connect(this.theokbutton, "onClick", this, this._onOkClicked);
			dojo.connect(this.thecancelbutton, "onClick", this, this._onCancelClicked);
			dojo.connect(this.thedialog, "onCancel", this, this._onDialogCancel);
		},

		show: function()
		{
			console.log("mycustom.dialog show called. this is "+this.declaredClass);
			this.thedialog.show();
		},

		_onOkClicked: function(e)
		{
			console.log("mycustom.dialog _onOkClicked called.");
			this.thedialog.hide();
			this.accepted = true;
		},

		_onCancelClicked: function(e)
		{
			console.log("mycustom.dialog _onCancelClicked called.");
			this.thedialog.hide();
			this.accepted = false;
		},

		_onDialogCancel: function(e)
		{
			console.log("mycustom.dialog _onDialogCancel called.");
			this.accepted = false;
		}
});
