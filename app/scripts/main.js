/* global Scholar, Writer, LanguageComponentDictionary, neuromancer */
(function ($) {
    'use strict';
    var testScholar = new Scholar(neuromancer);
    var testDict = new LanguageComponentDictionary(testScholar.assembleLanguageComponents(),
                                                  testScholar.assembleLanguagePatterns())
    ;
    var writer = new Writer();
    var title = writer.writeTitle(testDict, 4);
    //console.log(writer.writeParagraph(testDict, 7));

    $('#title').html('<h3>' + title + '</h3>');

    for (var i = 0; i < 4; i++) {
        var numSentences = Math.floor(Math.random() * 5) + 2;
        $('#spot').append('<p>' + writer.writeParagraph(testDict, numSentences) + '</p>');
    }
})(jQuery);
