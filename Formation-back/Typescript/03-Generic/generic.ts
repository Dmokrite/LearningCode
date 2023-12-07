function returnArg(arg: unknown) {
    return arg;
}

interface Formation {
    subject: string;
    chapters: string [];
}

const formationTypescript: Formation = {
    subject: 'typescript',
    chapters: ['Types', 'Class', 'Generic']
}

const newVar = returnArg(formationTypescript);

console.log(formationTypescript.subject);

function returnArgGeneric<T>(arg: unknown) {
    return arg as T;
}

const copyOfTypescriptFormation = returnArgGeneric<Formation>(formationTypescript);
console.log(copyOfTypescriptFormation.subject);

function returnArgGenericMagic<T>(arg: T) {
    return arg;
}

const copyOfFormationAgain = returnArgGenericMagic(formationTypescript);

interface JsonApiResponse<TypeGeneric extends Object>{
    id: string,
    type: string,
    attributes: TypeGeneric
}

interface UserResponse {
    firstName: string,
    email: string,
    password: string
}

const apiResponseForUser: JsonApiResponse<UserResponse> = {
    id: '4',
    type: "users",
    attributes: {
        firstName: "marc",
        email: "marc@zuc.facebook",
        password: "monMotDePasse"
    }
}

console.log(apiResponseForUser.attributes.firstName);

interface BaseResponse {
    status: number;
    value: unknown;
}

function logResponse<T extends BaseResponse>(response: T) {
    console.log(response);
}

interface bananaResponse extends BaseResponse {
    value: "banana";
}

logResponse<bananaResponse>({
    status: 200,
    value:"banana"
})

class Stack<T> {
    values: T[] = [];

    add(newObject: T) {
        this.values.push(newObject);
    }

    getArray(): T[] {
        return this.values;
    }
}

const wordStack = new Stack<string>();
wordStack.add("bye");

const lottoNumbers = new Stack<number>();
lottoNumbers.add(42);

const copyOfWordStack: string[] = wordStack.getArray();
