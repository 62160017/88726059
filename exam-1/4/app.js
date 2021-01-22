
let round = prompt("Round")
for(var i = 0;i < round ; i++){
    var answer = prompt("หัวหรือก้อย")
    var random_answer = ""
    if(Math.floor(Math.random()* 10) <=4){
        random_answer = "หัว"
    }
    else{
        random_answer = "ก้อย"
    }
    if(answer == random_answer){
        alert("ตอบถูก")
    }
    else{
        alert("ตอบผิด")
    }
    console.log(random_answer + " : "+answer)
}
function refreshPage(){
    window.location.reload();
} 
