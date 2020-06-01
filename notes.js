const fs = require('fs')
const chalk = require('chalk')

const addNotes = (title, body) => {
    const notes = loadNotes()
    
    // to check if the note title is duplicate
    //const duplicateNotes = notes.filter((note) => note.title === title) //find all matches
    const duplicateNote = notes.find((note) => note.title === title) // stops when find first match

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.bgGreen('Note added!'))
    }else {
        console.log(chalk.bgRed('Note title is Duplicate, try another title'))
    }
}

const removeNotes = (title) => {

    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notes.length > notesToKeep.length){
        console.log(chalk.bgGreen('Note Removed'))
        saveNotes(notesToKeep)

    }else {
        console.log(chalk.bgRed('No note found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes...'))
    notes.forEach((note) => console.log(note.title))
}


const readNote = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find((note) => note.title === title)

    if(noteToRead){
        console.log(chalk.inverse(noteToRead.title) + ': ' + noteToRead.body)
    }else{
        console.log(chalk.bgRed('Note Not Found!'))
    }
    
}




const saveNotes = (notes) => { //general - to save the new state of notes to the file

    const dataJSON = JSON.stringify(notes) // transform the js to json
    fs.writeFileSync('notes.json', dataJSON) //write the data to the file
}

const loadNotes = () => { //general - to load the current state of notes from file

    try {
        const dataBuffer = fs.readFileSync('notes.json') //read from the file (buffered data) machine lang
        const dataJSON = dataBuffer.toString() // transform the data to string (JSON data)
        return JSON.parse(dataJSON) //parse the data (transform json to js) to be able to access the keys of obj
    }catch(err){
        return []
    }
}

module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}