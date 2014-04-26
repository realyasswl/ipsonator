/* global forEachIn, LanguageComponentDictionary */

var Writer = (function () {
    'use strict';

    function InnerWriter(sentencePatterns) {
        this.dictionary = new LanguageComponentDictionary();
        this.sentencePatterns = sentencePatterns || [];
    }

    InnerWriter.prototype = {
        constructor: InnerWriter,

    };

    return InnerWriter;
}());
