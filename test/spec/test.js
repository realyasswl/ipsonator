(function () {
    'use strict';

    describe('Scholar', function () {
        describe('a basic instance', function () {
            it('should be an instance of Scholar', function () {
                var simpleScholar = new Scholar();
                expect(simpleScholar).to.be.instanceof(Scholar);
            });
            it('should have a "data" property', function () {
                var simpleScholar = new Scholar(languageData);
                expect(simpleScholar).to.have.ownProperty('data');
            });
        });
        describe('#assembleLanguageComponents', function () {
            var scholar = new Scholar(languageData);
            it('should not be an "ownProperty" of the Scholar instance',
               function () {
                   expect('assembleLanguageComponents' in scholar)
                       .to.be.true
                   ;
                   expect(scholar).to.not.have
                       .ownProperty('assembleLanguageComponents');
                   expect(Scholar.prototype)
                       .to.have.ownProperty('assembleLanguageComponents');
               })
             ;
             it('should return an object', function () {
                 expect(scholar.assembleLanguageComponents())
                     .to.be.an('object');
             });
             it('should have keys that represent the language components',
                function () {
                    expect(scholar.assembleLanguageComponents())
                        .to.include.keys(['vb', 'n_pro', 'n', 'adj', 'n_pro_dem']);
                })
              ;
              it('should not have keys that were excluded', function () {
                  expect(scholar.assembleLanguageComponents())
                      .to.not.include.keys(['n?', 'STOP', 'punc']);
              });
        });
        describe('#assembleLanguagePatterns()', function () {
            var scholar = new Scholar(languageData);
            it('should be "in" scholar', function () {
                expect('assembleLanguagePatterns' in scholar)
                    .to.be.true;
            });
            it('should return an array', function () {
                expect(scholar.assembleLanguagePatterns()).to.be.an('array');
            });
            it('should return an array containing the language components',
               function () {
                   expect(scholar.assembleLanguagePatterns()[0])
                       .to.include('n');
                   expect(scholar.assembleLanguagePatterns()[0])
                       .to.include('vb');
               })
             ;
        });
    });

    describe('LanguageComponentDictionary', function () {
        var gibsonScholar = new Scholar(languageData);
        var gibsonDict = new LanguageComponentDictionary(gibsonScholar.assembleLanguageComponents(),
                                                         gibsonScholar.assembleLanguagePatterns());
        describe('a basic instance', function () {
            it('should be an instance of LanguageComponentDictionary',
               function () {
                   var basicDict = new LanguageComponentDictionary();
                   expect(basicDict).to.be.instanceof(LanguageComponentDictionary);
               })
             ;
             it('should have properties that represent language component ' +
                'elements and language component patterns', function () {
                 var basicDict = new LanguageComponentDictionary();
                 expect(basicDict).to.have.ownProperty('languageComponents');
                 expect(basicDict).to.have.ownProperty('languagePatterns');
             })
        });

        describe('#getPatterns()', function () {
            it('should be a property on the object\'s prototype',
               function () {
                   expect(LanguageComponentDictionary.prototype)
                       .to.have.ownProperty('getPatterns');
               })
             ;
             it('should return an array of patterns', function () {
                 expect(gibsonDict.getPatterns()).to.be.an('array');
             });
             it('should have a length > 0', function () {
                 expect(gibsonDict.getPatterns()).to.have.length.above(0);
             });
             it('should be an array of arrays', function () {
                 expect(gibsonDict.getPatterns()[0]).to.be.an('array');
             });
             it('should have its subarrays contain strings', function () {
                 expect(gibsonDict.getPatterns()[0][0]).to.be.a('string');
             });
             it('should return the parts of speech', function () {
                 expect(gibsonDict.getPatterns()[0])
                     .to.include.members(['n', 'vb'])
             });
        });

        describe('#getWordsFrom()', function () {
            it('should be a property on the object\'s prototype', function () {
                expect(LanguageComponentDictionary.prototype)
                    .to.have.ownProperty('getWordsFrom');
            });
            it('should return an array', function () {
                expect(gibsonDict.getWordsFrom('n')).to.be.an('array');
            });
            it('should return all words from the chosen key', function () {
                expect(gibsonDict.getWordsFrom('n')).to.have.length.above(2);
            });
        });
    });

    describe('Writer', function () {
        var gibsonScholar = new Scholar(languageData);
        var gibsonDict = new LanguageComponentDictionary
            (gibsonScholar.assembleLanguageComponents(),
             gibsonScholar.assembleLanguagePatterns())
        ;

        describe('a basic instance', function () {
            it('should be an instance of Writer', function () {
                var basicWriter = new Writer();
                expect(basicWriter).to.be.an.instanceof(Writer);
            });
        });

        describe('#chooseWord()', function () {
           var writer = new Writer();
           var words = ['this', 'that', 'the', 'other'];
            it('should be a property on the object\'s prototype', function () {
                expect(Writer.prototype).to.have.ownProperty('chooseWord');
            });
            it('should return a word from its "words" argument array',
               function () {
                   expect(words).to.include(writer.chooseWord(words));
               })
            ;
            it('should return a string', function () {
                expect(writer.chooseWord(words)).to.be.a('string');
            });
            it('should return random words', function () {
                var results1 = [], results2 = [], i;
                for (i = 0; i < 100; i++) {
                    results1.push(writer.chooseWord(words));
                }
                for (i = 0; i < 100; i++) {
                    results2.push(writer.chooseWord(words));
                }
                expect(results1).to.not.eql(results2);
            });
        });

        describe('#assemblePhrase()', function () {
            var writer = new Writer();
            var simpleDict = new LanguageComponentDictionary(simpleComponents,
                                                            simplePhrases);
            it('should be a property on the object\'s prototype', function () {
                expect(Writer.prototype).to.have.ownProperty('assemblePhrase');
            });
            it('should return an array', function () {
                expect(writer.assemblePhrase(simpleDict)).to.be.an('array');
            });
            it('should return an array composed of the right words',
               function () {
                   var allWords = [];
                   forEachIn(simpleComponents, function (property, value) {
                       value.forEach(function (word) {
                           allWords.push(word);
                       });
                   })
                ;
                expect(allWords).to.include.members(writer.assemblePhrase(simpleDict));
               })
            ;
        });

        describe('#writePhrase()', function () {
            var writer = new Writer();
            var simpleDict = new LanguageComponentDictionary(simpleComponents,
                                                            simplePhrases)
            ;
            it('should be a property of the object\'s prototype', function () {
                expect(Writer.prototype).to.have.ownProperty('writePhrase')
            });
            it('should return a string', function () {
                expect(writer.writePhrase(simpleDict)).to.be.a('string');
            });
            it('should take an optional second argument to determine maximum ' +
               'length', function () {
                expect(writer.writePhrase(simpleDict, 1).split(' '))
                    .to.have.length.below(2);
            });
            it('should not have a punctuation mark as its last character',
               function () {
                   expect(writer.writePhrase(simpleDict)).to.not.match(/[.,!]$/);
               });
        });

        describe('#writeTitle()', function () {
            var writer = new Writer();
            var simpleDict = new LanguageComponentDictionary(simpleComponents,
                                                            simplePhrases)
            ;
            it('should be a property of the object\'s prototype', function () {
                expect(Writer.prototype).to.have.ownProperty('writeTitle');
            });
            it('should have it\'s first letter capitalized', function () {
                expect(writer.writeTitle(simpleDict)).to.match(/^([A-Z]|[^a-zA-Z])/);
            });
        });

        describe('#writeSentence()', function () {
            var writer = new Writer();
            var simpleDict = new LanguageComponentDictionary(simpleComponents,
                                                            simplePhrases)
            ;
            it('should be a property of the object\'s prototype', function () {
                expect(Writer.prototype).to.have.ownProperty('writeSentence');
            });
            it('should end with a period', function () {
                expect(writer.writeSentence(simpleDict)).to.match(/\.$/);
            });
        });

        describe('#writeParagraph()', function () {
            var writer = new Writer();
            var simpleDict = new LanguageComponentDictionary(simpleComponents,
                                                            simplePhrases)
            ;
            it('should be a property of the object\'s prototype', function () {
                expect(Writer.prototype).to.have.ownProperty('writeParagraph');
            });
            it('should return a string', function () {
                expect(writer.writeParagraph(simpleDict)).to.be.a('string');
            });
            it('should contain 4 "." characters when no length is give',
               function () {
                   expect(writer.writeParagraph(simpleDict).split('.').length - 1)
                       .to.equal(4);
               })
            ;
            it('should contain the right number of sentences when a length ' +
               'is given', function () {
                expect(writer.writeParagraph(simpleDict, 12).split('.').length - 1)
                    .to.equal(12);
            });
        });
    });
})();
