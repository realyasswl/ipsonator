/* global forEachIn */

var Writer = (function () {
    'use strict';

    function InnerWriter() {}

    // Private methods
    var capitalize = function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    var assemblePhrase = function(dictionary) {
        var languagePattern = chooseFromArray(dictionary.getPatterns());
        var result = [];
        languagePattern.forEach(function (component) {
            result.push(chooseFromArray(dictionary.getWordsFrom(component)));
        });
        return result;
    };


    // Prototype
    var chooseFromArray = function (array) {
        var length = array.length;
        var choice = Math.floor(Math.random() * length);
        return array[choice];
    };

    var chooseWord = function(words) {
        return chooseFromArray(words);
    };

    var writePhrase = function (dictionary, maxLength) {
        var phrase = assemblePhrase(dictionary).slice(0, maxLength);
        var result = '';

        phrase.forEach(function (word) {
            if (result === '') {
                result += word.toLowerCase();
            }
            else if (/^[,-;:!'?]/.test(word)) {
                result += word;
            }
            else {
                result += ' ' + word.toLowerCase();
            }
        });

        // if the last character is a punctuation mark - remove it
        if (/[,.-;?!]$/.test(result)) {
            result = result.slice(0, -1);
        }
        return result;
    };

    var writeTitle = function (dictionary, maxLength) {
        var phrase = writePhrase(dictionary, maxLength);
        return capitalize(phrase);
    };

    var writeSentence = function (dictionary, maxLength) {
        return writeTitle(dictionary, maxLength) + '.';
    };

    var writeParagraph = function (dictionary, len) {
        var paragraph = writeSentence(dictionary);
        var length = len || 4;
        var i;

        for (i = 1; i < length; i++) {
            paragraph += ' ' + writeSentence(dictionary);
        }

        return paragraph;
    };

    InnerWriter.prototype = {
        constructor: InnerWriter,
        chooseWord: chooseWord,
        assemblePhrase: assemblePhrase,
        writePhrase: writePhrase,
        writeTitle: writeTitle,
        writeSentence: writeSentence,
        writeParagraph: writeParagraph
    };

    return InnerWriter;
}());
