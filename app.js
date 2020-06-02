const  fs=require('fs');
const chalk=require('chalk');
const yargs=require('yargs');
const noteutilities=require('./node')
// const getNotes=require('./notes.txt');
yargs.version('1.0.0');
//create add command

yargs.command({
    command: "add",
    describe: "this is self made command",
    builder:{
        title:{
            describe: "this is title",
            type:"string",
            demandOption:true
        },
        body:{
            describe:"this is the body of the title",
            type:"string",
            demandOption: true
        }

    },
    handler:function(argv) {
        noteutilities.addNote(argv.title,argv.body)
    }
});
yargs.command({
    command:"remove",
    describe:"remove the given note from the database",
    builder: {
        title:{
    describe: "this is title",
        type:"string",
        demandOption:true}
    },
    handler:function (argv) {
        noteutilities.removeNote(argv.title)
    }

});
yargs.command({
    command:"getnotes",
    describe:"get the notes with the given title",
    builder: {
        title:{
    describe: "this is title",
        type:"string",
        demandOption:true}
    },
    handler:function (argv) {
        const data=noteutilities.getNotes(argv.title)
        type=typeof data;
        if (type==="object"){
            console.log("title:"+data[0].title)
            console.log("title:"+data[0].body)
        }
        else {
            console.log(chalk.red(data))
        }
        // if (typeof(data)===array){
        //     console.log("title:"+data[0].title)
        //     console.log("body:"+data[0].body)
        // }
        // else {
        //     console.log(chalk.red(data))
        // }
    }

});
//create a remove command
yargs.parse();