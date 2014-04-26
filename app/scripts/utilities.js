'use strict';

// todo: get this all inside of a function
//       add a forEach polyfill
//       add an inherit polyfill

function forEachIn(object, action) {
    var property;

    for (property in object) {
        if (object.hasOwnProperty(property)) {
            action(property, object[property]);
        }
    }
}
