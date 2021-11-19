let message = {
    es : 'Hola amigo !',
    de : 'Guten Tag !',
    en : 'Hi there !'
}

function helloWorld(lang) {
    if (lang == 'es') {
        console.log (message.es);
    }else if (lang == 'de') {
        console.log (message.de);
    }else {
        console.log (message.en);
    }
}
helloWorld ('es');
helloWorld ('de');
helloWorld ('en');
helloWorld ('fr');
