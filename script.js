let count = 1;

function fill(control){
    if(count<=9){
        if(count%2 == 0)
        {
            document.getElementById(control.id).innerHTML = "X";

            document.getElementById("second").style.color="#06caf2";
            document.getElementById("first").style.color="white";
           
        }else{
            document.getElementById(control.id).innerHTML = "O";
            

            document.getElementById("first").style.color="#06caf2";
            document.getElementById("second").style.color="white";

        }
        count++;
    }
    else{
        alert("MATCH DRAW");
        reset();
    }
    result('X');
    result('O');

}

function reset(){
    for(let i=1; i<=9 ; i++){
        document.getElementById("box-"+i).innerHTML = "";
    }
}

function result(ch){
    if(document.getElementById("box-1").innerHTML == ch && document.getElementById("box-2").innerHTML == ch && document.getElementById("box-3").innerHTML == ch ){
       if(ch=="X"){
        alert("Second Player is Winner ");
       }
       else{
        alert("First Player Are Winner ");
       }

        // chage the color
        document.getElementById("box-1").style.color=("green");
        document.getElementById("box-2").style.color=("green");
        document.getElementById("box-3").style.color=("green");
    }
   else if(document.getElementById("box-4").innerHTML == ch && document.getElementById("box-5").innerHTML == ch && document.getElementById("box-6").innerHTML == ch ){
         if(ch=="X"){
        alert("Second Player is Winner ");
       }
       else{
        alert("First Player Are Winner ");
       }
        document.getElementById("box-4").style.color=("green");
        document.getElementById("box-5").style.color=("green");
        document.getElementById("box-6").style.color=("green");
    }
    else if(document.getElementById("box-7").innerHTML == ch && document.getElementById("box-8").innerHTML == ch && document.getElementById("box-9").innerHTML == ch ){
         if(ch=="X"){
        alert("Second Player is Winner ");
       }
       else{
        alert("First Player Are Winner ");
       }
        document.getElementById("box-7").style.color=("green");
        document.getElementById("box-8").style.color=("green");
        document.getElementById("box-9").style.color=("green");
    }
    else if(document.getElementById("box-1").innerHTML == ch && document.getElementById("box-4").innerHTML == ch && document.getElementById("box-7").innerHTML == ch ){
         if(ch=="X"){
        alert("Second Player is Winner ");
       }
       else{
        alert("First Player Are Winner ");
       }
        document.getElementById("box-1").style.color=("green");
        document.getElementById("box-4").style.color=("green");
        document.getElementById("box-7").style.color=("green");
    }
    else if(document.getElementById("box-2").innerHTML == ch && document.getElementById("box-5").innerHTML == ch && document.getElementById("box-8").innerHTML == ch ){
         if(ch=="X"){
        alert("Second Player is Winner ");
       }
       else{
        alert("First Player Are Winner ");
       }
        document.getElementById("box-2").style.color=("green");
        document.getElementById("box-5").style.color=("green");
        document.getElementById("box-8").style.color=("green");
    }
    else if(document.getElementById("box-3").innerHTML == ch && document.getElementById("box-6").innerHTML == ch && document.getElementById("box-9").innerHTML == ch ){
         if(ch=="X"){
        alert("Second Player is Winner ");
       }
       else{
        alert("First Player Are Winner ");
       }
        document.getElementById("box-3").style.color=("green");
        document.getElementById("box-6").style.color=("green");
        document.getElementById("box-9").style.color=("green");
    }
    else if(document.getElementById("box-1").innerHTML == ch && document.getElementById("box-5").innerHTML == ch && document.getElementById("box-9").innerHTML == ch ){
         if(ch=="X"){
        alert("Second Player is Winner ");
       }
       else{
        alert("First Player Are Winner ");
       }
        document.getElementById("box-1").style.color=("green");
        document.getElementById("box-5").style.color=("green");
        document.getElementById("box-9").style.color=("green");
    }
    else if(document.getElementById("box-3").innerHTML == ch && document.getElementById("box-5").innerHTML == ch && document.getElementById("box-7").innerHTML == ch ){
         if(ch=="X"){
        alert("Second Player is Winner ");
       }
       else{
        alert("First Player Are Winner ");
       }
        document.getElementById("box-3").style.color=("green");
        document.getElementById("box-5").style.color=("green");
        document.getElementById("box-7").style.color=("green");
    }

}

function reload(){
    location.reload();
}
