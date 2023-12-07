class Constants {
static PI = 3.14;
static ANSWER = 42;
}

const instanceConstante = new Constants();
console.log(Constants.PI);

class StringUtils {
    static capitilizeFirstLetter(anyString: string) {
        return `${anyString.charAt(0).toUpperCase()}${anyString.slice(1)}`
    }
}

console.log(StringUtils.capitilizeFirstLetter("rambo"));
