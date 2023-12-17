import { createReadStream, createWriteStream } from "fs";

const readStream = createReadStream("lorem.txt");
const writeStream = createWriteStream("loremCopy.txt", 'utf8');

readStream.on('data', (data) => {
    console.log("je lis");
})

writeStream.on('pipe', (data) => {
    console.log("je commence");
})

writeStream.on('unpipe', (data) => {
    console.log("done");
})

readStream.pipe(writeStream);