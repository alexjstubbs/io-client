/*  Exposed Navigation Event Listener(s)
-------------------------------------------------- */

var navigationEventListeners = {

    /*  Key Bindings
    -------------------------------------------------- */
    bindEventNavigation: function() {
        window.addEventListener("keydown", navigationEventListeners.passKeyEvent);
    },

    passKeyEvent: function(e) {
        if (e) {

            console.log("Key Event", e);
            // navigationEvent(e);
        }
    }

};


/*  Exports
-------------------------------------------------- */
exports.navigationEventListeners = navigationEventListeners;
