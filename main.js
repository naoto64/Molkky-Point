function molkkyClick(e){
    if(e.dataset.toggle == "0"){
        if(Number(document.getElementById("point").textContent) != 0){
            for(var i = 0; i < 12; i++){
                document.getElementsByClassName("molkky").item(i).dataset.toggle = "0";
            }
        }
        e.dataset.toggle = "1";
        document.getElementById("point").textContent = Number(e.innerText);
    }
    else if(e.dataset.toggle == "1"){
        e.dataset.toggle = "0";
        document.getElementById("point").textContent = 0;
    }
}

function sumButtonClick(){
    document.getElementById("sum").textContent = Number(document.getElementById("sum").textContent) + Number(document.getElementById("point").textContent);
    for(var i = 0; i < 12; i++){
        document.getElementsByClassName("molkky").item(i).dataset.toggle = "0";
    }
    document.getElementById("point").textContent = "0";
}

function resetButtonClick(){
    if(confirm("得点と合計得点をリセットしますか？") == true){
        document.getElementById("sum").textContent = 0;
        for(var i = 0; i < 12; i++){
            document.getElementsByClassName("molkky").item(i).dataset.toggle = "0";
        }
        document.getElementById("point").textContent = "0";
    }
}
