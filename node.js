const chalk=require('chalk')
const fs=require('fs');
const getNotes=function(title){
    const loadedNotes=loadNotes();
    const showOnScreen=loadedNotes.filter((note)=>{
            return note.title===title;
    })
    if(showOnScreen.length===1){
        return showOnScreen;
    }
    else {
        return "no data found with the given title"
    }
}

const addNote=function(title,body){
            const notes=loadNotes()
    const duplicatenotes=notes.filter( (note)=> {
            return note.title===title
    })
    if(duplicatenotes.length===0){
        notes.push({
            title:title,
            body:body
        })
        savenotes(notes)
        console.log(chalk.green('Successfully! Added new note in the array'))
    }else
    {
        console.log(chalk.red("Error!Note title taken"))
    }

    }
const savenotes=function (notes) {
        const dataJSON=JSON.stringify(notes)
        fs.writeFileSync("newfile.json",dataJSON)
}

const loadNotes=function(){
try{
    const dataBuffer=fs.readFileSync("newfile.json",);
    const dataJSON=dataBuffer.toString();
    return JSON.parse(dataJSON)
}
catch (err) {
 return []
}

}
const removeNote=function(title){
        const notes=loadNotes()
        const titleFinder=notes.filter((note)=>{
            return note.title===title;
        })
        if (titleFinder.length===1){
            const dataToFile=notes.filter((note)=>{
                return note.title!==title;
            })
            savenotes(dataToFile);
            console.log(chalk.green("data is deleted Successfully!"))
        }

        else {
            console.log(chalk.red("no note found with the provided title"))
        }
}

module.exports={
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
}