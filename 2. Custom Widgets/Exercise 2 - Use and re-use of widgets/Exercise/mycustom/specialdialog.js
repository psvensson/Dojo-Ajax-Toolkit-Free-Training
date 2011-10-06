// Provide registers the class with dojo, so that it is not loaded twice
dojo.provide("mycustom.specialdialog");

// All other classes that are used either as superclasses, as constructors or in other ways referred to must be 'required'
dojo.require("mycustom.dialog");

// The declare statement actually creates the new class, named after the first argument. Superclasses are declared in the second argument,
// and the class body (an object literal with all properties, functions as non-functions) is the third argument.
dojo.declare("mycustom.specialdialog", [ mycustom.dialog ],
{
		_onOkClicked: function(e)
		{
			console.log("** mycustom.specialdialog _onOkClicked called. **");
			this.thedialog.hide();
			this.accepted = true;
		}
});
