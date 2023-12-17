import { createReadStream } from "fs";

const readStream = createReadStream("./lorem.txt", {
    //modifie le nombre de fichiers lues de base 65536 octets
    highWaterMark: 256000,
    encoding: 'utf8'
})

readStream.on('data', (dataChunk) => {
    console.log(`I read the file ${dataChunk.length} octets`);
})

readStream.on('end', () => {
    console.log('Work done !');
})