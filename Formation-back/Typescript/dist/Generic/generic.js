"use strict";
function returnArg(arg) {
    return arg;
}
const formationTypescript = {
    subject: 'typescript',
    chapters: ['Types', 'Class', 'Generic']
};
const newVar = returnArg(formationTypescript);
console.log(formationTypescript.subject);
function returnArgGeneric(arg) {
    return arg;
}
const copyOfTypescriptFormation = returnArgGeneric(formationTypescript);
console.log(copyOfTypescriptFormation.subject);
function returnArgGenericMagic(arg) {
    return arg;
}
const copyOfFormationAgain = returnArgGenericMagic(formationTypescript);
const apiResponseForUser = {
    id: '4',
    type: "users",
    attributes: {
        firstName: "marc",
        email: "marc@zuc.facebook",
        password: "monMotDePasse"
    }
};
console.log(apiResponseForUser.attributes.firstName);
function logResponse(response) {
    console.log(response);
}
logResponse({
    status: 200,
    value: "banana"
});
