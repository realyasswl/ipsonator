var LoremGibson = (function() {
  'use strict';


  var words = [
    'it\'s',
    'sky',
    'drug',
    'deficiency',
    'expatriates',
    'bar',
    'East European',
    'Wage',
    'massive',
    'Case',
    'ugliness',
    'precise',
    'grubby',
    'pink',
    'lack',
    'fuck',
    'Russian',
    'funny',
    'Ratz',
    'hysteria',
    'a',
    'the',
    'octave',
    'bartender',
    'nerve-splicing',
    'bile',
    'known',
    'Chilba',
    'bodies',
    'Zone',
    'descended',
    'neurosurgery',
    'monthly',
    'cyberspace',
    'cowboy',
    'voodoo',
    'console',
    'temperfoam',
    'Japanese',
    'wasn\'t',
    'Kirin',
    'then',
    'same',
    'job',
    'commerce',
    'artictic',
    'Sprawl',
    'operated',
    'software',
    'hallucination',
    'employers',
    'fields',
    'data',
    'sworn',
    'mattered',
    'sure',
    'never',
    'bodiless'
  ];
  var self;

  function foo() {
    // private function inside closure
    return 'this is a private function';
  }

  function chooseWord() {
    var choice = Math.floor(Math.random() * words.length);
    return words[choice];
  }

  function isCapitalized(word) {
    if (/^[a-zA-Z]/.test(word)) {
      return /^[A-Z]/.test(word);
    }
    else {
      return undefined;
    }
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  var api = {
    hello: function () {
      return 'hello';
    },
    generatePhrase: function(num) {
      var result = [],
          i
      ;

      if (num <= 0) {
        throw new Error('the argument must be a positive number');
      }

      for (i = 0; i < num; i++) {
        result.push(chooseWord());
      }
      return result.join(' ');
    },

    generateTitle: function(max, min) {
      var range = max - min;
      var num = Math.ceil(Math.random() * range) + min;
      var phrase = this.generatePhrase(num);
      return capitalize(phrase);
    }
  };

  /* test-code */
  api._foo = foo;
  api._words = words;
  api._chooseWord = chooseWord;
  api._isCapitalized = isCapitalized;
  api._capitalize = capitalize;
  /* end-test-code */

  return api;
}());

(function ($) {
  'use strict';
  $('#spot').html('<p>' + LoremGibson.generateTitle(10, 2) + '</p>');
})(jQuery);


