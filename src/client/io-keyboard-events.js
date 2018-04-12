let _ = require("lodash");


/*  Exposed Navigation Event Listener(s)
-------------------------------------------------- */


let getNavigationItems = function() {

    // TODO: Just create map of cols/rows on re/init
    let navItems           = document.getElementsByClassName("nav-item"),
        navSelected        = document.getElementsByClassName("nav-selected")[0],
        navSelectedColumn  = navSelected.getAttribute("data-nav-column"),
        navSelectedRow     = navSelected.getAttribute("data-nav-row"),
        navMap            = {
            navItems:          navItems,
            navSelected:       navSelected,
            navSelectedColumn: navSelectedColumn,
            navSelectedRow:    navSelectedRow
        }

    return navMap;
}
let navigationEvent = {
    
    // TODO: If switching columns on > 0 row, find the closest row in previous column to select instead of defaulting to top of nav items

    // Next Nav Item (COLUMN) ->
    nextNavItemColumn: function() {

        let navItemsObj = getNavigationItems();

        navItemsObj.navSelectedColumn++;

        let navNextItemColumn = document.querySelectorAll('[data-nav-column="'+navItemsObj.navSelectedColumn+'"]')[0];

        if (navNextItemColumn) {
            navItemsObj.navSelected.classList.remove("nav-selected");
            navNextItemColumn.classList.add("nav-selected");
        }

        else {
            console.log("[!] >> No Next Item (COL)");
        }

    },

    // Previous Nav Item (COLUMN)  <-
    prevNavItemColumn: function() {
        let navItemsObj = getNavigationItems();

        navItemsObj.navSelectedColumn--;

        let navPrevItemColumn = document.querySelectorAll('[data-nav-column="'+navItemsObj.navSelectedColumn+'"]')[0];
           
        if (navPrevItemColumn) {
            navItemsObj.navSelected.classList.remove("nav-selected");
            navPrevItemColumn.classList.add("nav-selected");
        }

        else {
            console.log("[!] >> No Prev Item (COL)");
        }
    },

      // Next Nav Item (ROW) _
      nextNavItemRow: function() {

        let navItemsObj = getNavigationItems();

        navItemsObj.navSelectedRow++;

        let navNextItemRow = document.querySelectorAll('[data-nav-row="'+navItemsObj.navSelectedRow+'"][data-nav-column="'+navItemsObj.navSelectedColumn+'"]')[0];
            
        if (navNextItemRow) {
            navItemsObj.navSelected.classList.remove("nav-selected");
            navNextItemRow.classList.add("nav-selected");
        }

        else {
            console.log("[!] >> No Next Item (ROW)");
        }

    },

     // Prev Nav Item (ROW) -
     prevNavItemRow: function() {

        let navItemsObj = getNavigationItems();

        navItemsObj.navSelectedRow--;

        let navPrevItemRow = document.querySelectorAll('[data-nav-row="'+navItemsObj.navSelectedRow+'"][data-nav-column="'+navItemsObj.navSelectedColumn+'"]')[0];
            
        if (navPrevItemRow) {
            navItemsObj.navSelected.classList.remove("nav-selected");
            navPrevItemRow.classList.add("nav-selected");
        }

        else {
            console.log("[!] >> No Prev Item (ROW)");
        }

    },


     // Prev Nav Item ([) <-
     prevScreen: function() {
        var event = new CustomEvent('screenRender', { detail: "0" });
        window.dispatchEvent(event);
    },


     // Prev Nav Item (]) ->
     nextScreen: function() {
         var event = new CustomEvent('screenRender', { detail: "1" });
         window.dispatchEvent(event);
     },

    // Prev Nav Item (]) ->
    returnFunction: function() {
       console.log("Return A Function Here");
    },
}


let keyMapping = {
    13: {
        name:  "Enter",
        event: navigationEvent.returnFunction
    },
    37: {
        name:  "leftArrow",
        event: navigationEvent.prevNavItemColumn
    },
    38: {
        name:  "upArrow",
        event: navigationEvent.prevNavItemRow
    },
    39: {
        name:  "rightArrow",
        event: navigationEvent.nextNavItemColumn
    },
    40: {
        name:  "downArrow",
        event: navigationEvent.nextNavItemRow
    },
    219: {
        name:  "left square bracket",
        event: navigationEvent.prevScreen
    },
    221: {
        name:  "right square bracket",
        event: navigationEvent.nextScreen
    },
}

let navigationEventListeners = {

    /*  Key Bindings
    -------------------------------------------------- */
    bindEventNavigation: function() {
        window.addEventListener("keydown", navigationEventListeners.passKeyEvent);
    },

    passKeyEvent: function(e) {

        console.log(e);

        if (e && keyMapping[e.keyCode]) {
            keyMapping[e.keyCode].event();
        }
    }


};

let navigationInit = function() {
    let navSelection = _.first(document.getElementsByClassName("nav-selected"));
    if (navSelection) { navSelection.classList.remove("nav-selected"); }
    
    _.first(document.getElementsByClassName("nav-item")).classList.add("nav-selected");
}

/*  Exports
-------------------------------------------------- */
exports.navigationEventListeners = navigationEventListeners;
exports.navigationInit           = navigationInit;
