/* global forEachIn */
var LanguageComponentDictionary = (function () {
    'use strict';

    function InnerDictionary(languageComponents, languagePatterns) {
        this.languageComponents = languageComponents;
        this.languagePatterns = languagePatterns;
    }

    var getPatterns = function () {
        return this.languagePatterns;
    };

    var getWordsFrom = function (languageComponent) {
        return this.languageComponents[languageComponent];
    };

    InnerDictionary.prototype = {
        constructor: InnerDictionary,
        getWordsFrom: getWordsFrom,
        getPatterns: getPatterns
    };

    return InnerDictionary;
}());
