var gibsonDict = {
noun: [
    'here', 'sky', 'port', 'color', 'television', 'channel', 'way', 'crowd',
    'body', 'drug', 'deficiency', 'Sprawl', 'voice', 'joke', 'Chatsubo',
    'bar', 'expatriates', 'there', 'week', 'glasses', 'steel', 'whores',
    'girl', 'steel', 'decay', 'plastic', 'creepjoint', 'rag', 'picking up',
    'hysteria', 'bile', 'bullshit', 'neurosurgery', 'Memphis',
    'cutting edge', 'hotel', 'year', 'dreamed', 'cyberspace', 'console',
    'temperfoam', 'Kirin', 'spare parts', 'tanks', 'adrenaline',
    'consensual hallucination', 'software', 'fields', 'fence', 'mycotoxin',
    'cowboy', 'prison', 'New Yen', 'Sprawl', 'shadowland'

],
verb: [
    'is', 'tuned', 'using', 'heard', 'say', 'shouldered', 'developed',
    'could', 'drink', 'tending', 'filled', 'widened', 'grunted', 'pink',
    'funny', 'vanish', 'let', 'nerve-splicing', 'rising', 'forgotton',
    'repair', 'suffered', 'fading', 'wake', 'trying', 'saw', 'clawed',
    'worked', 'penetrate', 'exultation', 'nerve splicing'
],
adjective: [
    'above', 'dead', 'massive', 'professional', 'prosthetic', 'East European',
    'affordable', 'crisp', 'Russian', 'plastic', 'grubby', 'colorless',
    'second', 'small', 'artistic', 'high', 'narrow'
],
adverb: [
    'not', 'monotonously', 'fuck', 'barely', 'certain', 'livewire',
    'difficult', 'illegal'
],
pronoun: [
    'it\'s', 'I\'m', 'Case', 'someone', 'he', 'my', 'you', 'Ratz',
    'somebody\'s', 'Zone'
],
conjunction: [
    'and', 'but', 'or'
],
preposition: [
    'was', 'of', 'to', 'like', 'as', 'through', 'around', 'for', 'between',
    'another', 'either', 'couldn\'t', 'in', 'over', 'alone', 'it\'s'
],
interjection: [
    'sure', 'Jesus'
],
article: [
    'the', 'a'
]
};

var commonPhrases = [
    ['pronoun', 'verb'],
    ['pronoun', 'verb', 'adverb'],
    ['pronoun', 'verb', 'article', 'adjective', 'noun'],
    ['pronoun', 'noun', 'verb', 'adverb','conjunction', 'article', 'noun'],
    ['noun', 'conjunction', 'noun', 'conjunction', 'noun', 'verb', 'adverb',
    'preposition', 'article', 'noun'],
    ['noun', 'verb', 'preposition', 'noun'],
    ['article', 'noun', 'verb', 'conjunction', 'verb'],
    ['article', 'noun', 'verb', 'conjunction', 'verb', 'preposition',
    'article', 'noun'],
    ['article', 'noun', 'verb'],
    ['interjection'],
    ['interjection', 'pronoun', 'verb', 'preposition', 'preposition', 'article',
    'noun'],
    ['adverb', 'verb', 'article', 'noun'],
    ['adverb', 'verb', 'article', 'noun', 'conjunction', 'article', 'noun'],
    ['adverb', 'verb'],
    ['adverb', 'article', 'noun', 'verb', 'conjunction', 'article', 'noun'],
    ['verb', 'noun'],
    ['verb', 'noun', 'conjunction', 'noun'],
    ['verb', 'noun', 'conjunction', 'noun', 'preposition', 'verb', 'article',
    'noun'],
    ['adjective', 'noun'],
    ['adjective', 'noun', 'conjunction', 'noun', 'verb', 'adverb', 'verb'],
    ['adjective', 'noun', 'verb', 'adverb'],
    ['adjective', 'noun', 'conjunctin', 'article', 'adjective', 'noun',
    'verb', 'preposition', 'article', 'noun'],
    ['preposition', 'noun', 'conjunction', 'noun'],
    ['preposition', 'noun', 'conjunction', 'noun', 'pronoun', 'noun', 'verb',
    'preposition']
];

var simpleComponents = {
    noun: ['dog', 'cat', 'sheep', 'horse'],
    verb: ['run', 'walk', 'ride'],
    adverb: ['quickly', 'slowly'],
    adjective: ['big', 'little'],
    punc: [',', '.']
};

var simplePhrases = [
    ['noun', 'verb', 'punc'],
    ['adjective', 'noun', 'adverb', 'verb', 'punc'],
    ['noun', 'noun', 'verb', 'adverb', 'punc']
];
