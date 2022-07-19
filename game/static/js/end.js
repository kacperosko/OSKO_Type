window.onload = function(e){
    let correct = parseInt(sessionStorage.getItem("correct_letters"));
    let wrong = parseInt(sessionStorage.getItem("wrong_letters"));
    let sum = correct + wrong;
    if(correct !== correct || wrong !== wrong || (correct == 0 && correct == 0)){
        let block = document.getElementById("end-block");
        let button = document.getElementById("end-button");
        block.innerHTML = "<h2>Nice try :)<br>You have to play first to get some score</h2>"
        button.innerHTML = "PLAY FIRST"

    }
    
    document.getElementById("wpm").innerHTML = sessionStorage.getItem("correct_words");
    document.getElementById("correct").innerHTML = correct;
    document.getElementById("wrong").innerHTML = wrong;
    document.getElementById("accuracy").innerHTML = Math.floor((100 * correct) / sum);
    console.log(correct)
    sessionStorage.clear();
}