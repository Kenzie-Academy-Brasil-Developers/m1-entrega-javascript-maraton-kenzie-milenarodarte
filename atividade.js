const list = ["Pedro", "Maria", "João", "José", "Marcos", "Marlom", "Jessica", "Jordana",];

function howManyOnThelist () {
    return list.length
}
console.log(howManyOnThelist())

function insertInElementInList (list, newElement){


    if ( typeof(newElement) != "string" || newElement == null ) {
        return "value nots valid"
    } 
    else { 
        list.push(newElement)
        return list
    }

}
console.log(insertInElementInList(list, "milena"))

function returnPositionOfElement (list, element) {
    for (let i = 0; i < list.length ; i++) {

        list[i] = list[i].toLowerCase()
        console.log(list[i])
    }
    element = element.toLowerCase()
    console.log(element)

    for (let j = 0; j < list.length; j++) {

        if (element == list[j]) { return j}

    }
    return "element not found"
}
console.log(returnPositionOfElement(list, "José"))


function findFirstElementWithLetter (list, letter){
    
    letter = letter.toLowerCase()

    for (let k = 0; k < list.length; k++) {

        if ( letter == list[k][0] ) 
        
        { return list[k] }
    }
    return "element not found"
    
}
console.log(findFirstElementWithLetter(list, "m"))


function findeAllElementsWithLtter (list, letra) {
    let output = []
    letra = letra.toLowerCase()

    for (let c = 0; c < list.length; c++) {
        if (letra == list[c][0]) { output.push(list[c])}
    }
   
    if (list[0] != undefined) { return output} 
    else {return "no occourrence"}

}
console.log(findeAllElementsWithLtter(list, "m"))

function invertSpecificElement (list, word) {
    let reverseWord = ""
    word = word.toLowerCase()
    if (returnPositionOfElement(list, word) == undefined){ return "element not found"}
    else { 
        for (let z = (word.length)-1; z >= 0 ; z--) {
            reverseWord += word[z]
        }

    }
    return reverseWord
}
console.log(invertSpecificElement(list, "joão"))