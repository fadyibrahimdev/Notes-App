const yargs = require('yargs')
const notes = require('./notes.js')

//Notes-App ==> main goal is handling file system (fs) & yargs (for commands and arguments from terminal)

yargs.version('1.1.0')

// const command = process.argv[2]

// if(command === 'add'){
//     console.log('Adding notes!')
// }else if(command === 'remove'){
//     console.log('removing notes')
// }

// console.log(process.argv)


yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: { //for making argument for the add command
        title: { //making title argument for it
            describe: 'Note Title',
            demandOption: true, //making it required,you can't use add command without specifing the arg
            type: 'string' //type of the argument has to be string
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){

        notes.addNotes(argv.title, argv.body) // the title & body are saved in the argv object
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title: {
            describe: 'Note to delete',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list a new note',
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'note to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse() //for yargs to work without logging it like on the next line
// console.log(yargs.argv)

// const validator = require('validator')
// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'Hello, This is my first trial!')
// fs.appendFileSync('notes.txt', '\nThis is my second Edit to the file!')


// console.log(validator.isEmail('fadyattia11@gmail.com'))