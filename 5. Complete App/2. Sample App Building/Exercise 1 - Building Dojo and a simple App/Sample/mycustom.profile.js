var profile = {
    // point basePath to ~/dev
    //basePath:".",

    // point releaseDir to ~/dev/acme-deploy
    releaseDir:"./build",

    // now a typical loader packages configuration
    packages:[{
        name:"dojo",
        location:"../../../dojo-1.7.1/dojo"
    },{
        name:"dojox",
        location:"../../../dojo-1.7.1/dojox"
    },{
        name:"dijit",
        location:"../../../dojo-1.7.1/dijit"
    },{
        name:"mycustom",
        location:"./mycustom"
    }],

		deps: ["dojo", "dojox", "dijit"]
}

var dojoConfig = {
     packages:[{
        name:"dojo",
        location:"../../../dojo-1.7.1/dojo"
    },{
        name:"dojox",
        location:"../../../dojo-1.7.1/dojox"
    },{
        name:"dijit",
        location:"../../../dojo-1.7.1/dijit"
    },{
        name:"mycustom",
        location:"./mycustom"
    }]
}
