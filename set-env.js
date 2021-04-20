const fs = require("fs")
const path = require("path")
const { argv } = require("yargs")

const { env } = argv

const acceptedEnvs = ["debug", "staging", "release"];

function writeFile(file, string){
    if(fs.existsSync(file)){
        fs.writeFileSync(file, string)
        return true;
    }

    console.log(`File "${file}" not found.`);
    process.exit(1);
}

function validParams(){
    console.log(`Validating params...`);
    if (!env) {
        console.log(
            `Error.  Please inform a valid environment: ${acceptedEnvs.join(", ")}.`
        );
        process.exit(1);
    }

    if (!acceptedEnvs.includes(env)) {
        console.log(
            `Error. Wrong environment, choose one of those: ${acceptedEnvs.join(
            ", "
            )}.`
        );
        process.exit(1);
    }
}

function setEnvironment() {
    console.log(`Setting environmet to ${env}...`);
  
    const importerString = `export { env } from './${env}'\n`;
  
    const envIndexFileLocation = path.resolve(
        __dirname,
        ".",
        "src",
        "config",
        "env",
        "index.ts"
    );
  
    writeFile(envIndexFileLocation, importerString);
    console.log(`Environment successfully setted to ${env}.`);
    process.exit(0);
}

validParams()
setEnvironment()