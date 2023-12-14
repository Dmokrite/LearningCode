function thingCase(someString) {
    return someString.toLowerCase().replaceAll("", '-');
}

function toNothingCase(someString) {
    return someString.toLowerCase().replaceAll("", '-').replaceAll('plein', 'vide');
}

exports.thing = thingCase;
exports.toNothing = toNothingCase;