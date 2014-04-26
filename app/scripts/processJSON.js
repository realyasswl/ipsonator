function getData(url) {
    'use strict';
    var data;
    jQuery.ajax({
        async: false,
        url: url,
        dataType: 'json',
        success: function (response) {
            data = response;
        }
    });
    return data.data.tagged_sentences;
}

var neuromancer = getData('ajax/neuromancer.json');
