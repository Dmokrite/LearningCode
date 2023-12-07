"use strict";
class Constants {
}
Constants.PI = 3.14;
Constants.ANSWER = 42;
const instanceConstante = new Constants();
console.log(Constants.PI);
class StringUtils {
    static capitilizeFirstLetter(anyString) {
        return `${anyString.charAt(0).toUpperCase()}${anyString.slice(1)}`;
    }
}
console.log(StringUtils.capitilizeFirstLetter("rambo"));
