function getScore(){
    var getScore = localStorage.getItem("score");
    document.getElementById("answer").innerHTML = "<h1>Score: "+getScore+"</h1>";
}
function back(){
    window.location = "index.html";
}