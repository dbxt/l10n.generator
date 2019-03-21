import glob from "glob";

const exec = require('child_process').exec;

glob("build/**/Localizable.strings", { mark: true }, (er, files) => {
  files.forEach(o => {
    validateLocalizable(o)
  });
});

const validateLocalizable = file => {
    console.log(file);
    exec(`rubustrings ${file}`, (err, stdout, stderr) => {
        // if (err) {
        //     // node couldn't execute the command
        //     return;
        // }

        // the *entire* stdout and stderr (buffered)
        //console.log(`err: ${stdout}`);
        console.log(`stdout: ${stdout}`);
        //console.log(`stderr: ${stderr}`);
    });
};