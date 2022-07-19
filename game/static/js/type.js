
let count = document.getElementById("words_count").innerHTML;
let content = document.getElementById(1).getElementsByTagName('span')[0].innerHTML;
const audio = new Audio("static/sounds/wrong-short.mp3")
let parent = 1;
let child = 0;
addLine(parent, child);
// [Log] 32 (type.js, line 9) " "
// [Log] 190 (type.js, line 9) "."
// [Log] 188 (type.js, line 9) ","
document.addEventListener('keydown', (e) => {
    if(e.keyCode !=16){
        c = String.fromCharCode(e.keyCode);
        switch(e.keyCode){
            case 32:
                c = "&nbsp;";
                break;
            case 188:
                c = ",";
                break;
            case 190:
                c = ".";
                break;
        }
        if(!e.shiftKey){
            c = c.toLowerCase(c);
        }
        if(c == content){
            if(iteration()){
                location.href = 'index.html';
            }
            getChildContent(parent, child)
        }else{
            wrong(parent, child);
        }
  }
});

function iteration(){
    removeLine(parent,child);
    correct(parent, child);
        if(child+1 == document.getElementById(parent).children.length){
            if(parent < count){
                parent++
            }else{
                return true;
            }
            child = 0;
        }else{
            child++;
        }

    addLine(parent,child);
    return false;
}

function addLine(id, child){
    document.getElementById(id).getElementsByTagName('span')[child].style.borderBottom = "3px solid #B302F1";
}
function removeLine(id, child){
    document.getElementById(id).getElementsByTagName('span')[child].style.borderBottom = "none";
}
function wrong(id, child){
    audio.play();
    document.getElementById(id).getElementsByTagName('span')[child].style.color = "#F24B59";
    document.getElementById(id).getElementsByTagName('span')[child].style.fontWeight = "bolder";
    sleep(200).then(() => document.getElementById(id).getElementsByTagName('span')[child].style.fontWeight = "normal");
}
function correct(id, child){
    document.getElementById(id).getElementsByTagName('span')[child].style.color = "#109857";
    document.getElementById(id).getElementsByTagName('span')[child].style.textDecoration = "underline";
}
function getChildContent(id, child){
    content = document.getElementById(id).getElementsByTagName('span')[child].innerHTML;
}
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
let time = 60;
function zfill(val, size) {
    val = val.toString();
    while (val.length < size) val = "0" + val;
    return val;
}

var CountDownTimer = setInterval(function(){
    if(time <= 0){
      clearInterval(CountDownTimer);
    }
    minutes = Math.floor(time / 60)
    minutes = zfill(minutes, 2)
    seconds = time % 60
    seconds = zfill(seconds, 2)
    document.getElementById("timer").innerHTML = minutes+":"+seconds;
    time -= 1;
  }, 1000);