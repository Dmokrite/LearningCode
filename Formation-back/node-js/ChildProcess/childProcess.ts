import { spawn } from "child_process";

const lsCommand = spawn('dir', ['--truc']);

lsCommand.stdout.on('data', (data) => {
    console.log(data.toString());
})

lsCommand.stderr.on('data', (err) => {
    console.log('stderr',err.toString());
})
