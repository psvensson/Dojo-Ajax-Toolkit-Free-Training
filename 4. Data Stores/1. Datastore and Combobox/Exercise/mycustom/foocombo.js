// Provide registers the class with dojo, so that it is not loaded twice
dojo.provide("mycustom.foocombo");

// All other classes that are used either as superclasses, as constructors or in other ways referred to must be 'required'
dojo.require("dijit._Widget");
dojo.require("dijit._Templated");
dojo.require("dojo.data.ItemFileReadStore");
dojo.require("dojox.grid.DataGrid");

// The declare statement actually creates the new class, named after the first argument. Superclasses are declared in the second argument,
// and the class body (an object literal with all properties, functions as non-functions) is the third argument.
dojo.declare("mycustom.foocombo", [ dijit._Widget, dijit._Templated ],
{
		// Here is the HTML template/snippet for the widget.
		templateString:			dojo.cache("mycustom", "foocombo.html"),
		// This enables us to define widgets inside our widget using 'dojoType'
		widgetsInTemplate:	true,
		data:			"",

		// The postCreate function is called after the template is rendered, but before it is inserted into the DOM
		postCreate:	function()
		{
			console.log("mycustom.foocombo postCreate called.");

			var store = new dojo.data.ItemFileReadStore({data: this.data});

			var layout = 
			[
            [
							{
		            'name': 'Column 1',
		            'field': 'id',
		            'width': '120px'
			        },
			        {
		            'name': 'Column 2',
		            'field': 'col2',
		            'width': '120px'
			        },
			        {
		            'name': 'Column 3',
		            'field': 'col3',
		            'width': '160px'
			        },
			        {
		            'name': 'Column 4',
		            'field': 'col4',
		            'width': '150px'
			        }
					]
			];

        /*create a new grid:*/
        var grid = new dojox.grid.DataGrid(
				{           
            store: store,
            structure: layout
        },
        this.thegridnode);
				grid.startup();
		}

		
});
