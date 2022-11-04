let userChoice = ""
let playerScore = 0;
let cpuScore = 0;

function comChoice(){
let i = Math.floor(Math.random() * 3)
if(i === 1){
    cpuChoice = "Rock"
    return cpuChoice
}else if(i ===2 ){
    cpuChoice = "Paper"
    return cpuChoice
}else{
    cpuChoice ="Scissors"
    return cpuChoice
}
}

function UserChoice(userChoice){
    userChoice = `${userChoice}`
let cpuChoice = comChoice()
if(userChoice === cpuChoice){
    //alert("That is a tie!")
    document.getElementById("winLose").innerHTML = `<br>${userChoice} and ${cpuChoice} are the same`
    document.getElementById("wonLost").innerHTML = "TIE"

}else if( userChoice === "Rock" && cpuChoice === "Scissors"){
        
        document.getElementById("winLose").innerHTML = `<br>${userChoice} beats ${cpuChoice}`
        document.getElementById("wonLost").innerHTML = "YOU WON!"
        playerScore += 1
        document.getElementById("playerScore").innerHTML = `Your score is ${playerScore}`
        
}else if( userChoice === "Paper" && cpuChoice === "Rock"){
    
    document.getElementById("winLose").innerHTML = `<br>${userChoice} beats ${cpuChoice}`
    document.getElementById("wonLost").innerHTML = "YOU WON!"
    playerScore += 1
    document.getElementById("playerScore").innerHTML = `Your score is ${playerScore}`
}else if (userChoice === "Scissors" && cpuChoice === "Paper"){
    
    document.getElementById("winLose").innerHTML = `<br>${userChoice} beats ${cpuChoice}`
    document.getElementById("wonLost").innerHTML = "YOU WON"
    playerScore +=1
    document.getElementById("playerScore").innerHTML = `Your score is ${playerScore}`
}else{
    
    document.getElementById("winLose").innerHTML = `<br>Sorry ${cpuChoice} beats ${userChoice}`
    document.getElementById("wonLost").innerHTML = "YOU LOST! Try again!"
    cpuScore+=1
    document.getElementById("cpuScore").innerHTML = `Computer score is ${cpuScore}`
    

}
}
// let score = document.getElementById("playerScore")
// let newText = document.createTextNode(score[0].playerScore)
// score[0].parentNode.replaceChild(newText,score[0])
//