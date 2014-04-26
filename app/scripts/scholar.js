// The Scholar object receives a javascript object of parsed text and uses
// it to write a Dictionary object

var Scholar = (function () {
    'use strict';

    function InnerScholar(data) {
        this.data = data;
    }

    // Private functions
    var addPropertyAndValue = function (obj, property, value) {
        var questioned = /\?$/;

        // if the property name ends in a quesion mark, remove it
        if (questioned.test(property)) {
            property = property.slice(0, -1);
        }

        if (property !== 'STOP') {
            if (obj[property] === undefined) {
                obj[property] = [];
            }
            // don't add periods!
            if (value !== '.') {
                obj[property].push(value);
            }
        }
    };

    // Public
    var assembleLanguageComponents = function () {
        var sentences = this.data;
        var languageComponents = {};
        sentences.forEach(function (sentence) {
            sentence.forEach(function (word) {
                addPropertyAndValue(languageComponents, word.part_of_speech,
                            word.token);
            });
        });
        return languageComponents;
    };

    var assembleLanguagePatterns = function () {
        var sentences = this.data;
        var patterns = [];

        sentences.forEach(function (sentence) {
            var pattern = [];
            sentence.forEach(function (word) {
                var component = word.part_of_speech;
                var questioned = /\?$/;
                if (questioned.test(component)) {
                    component = component.slice(0, -1);
                }
                if (component !== 'STOP') {
                    pattern.push(component);
                }
                patterns.push(pattern);
            });
        });
        return patterns;
    };

    InnerScholar.prototype = {
        constructor: InnerScholar,
        assembleLanguageComponents: assembleLanguageComponents,
        assembleLanguagePatterns: assembleLanguagePatterns
    };

    return InnerScholar;
})();
