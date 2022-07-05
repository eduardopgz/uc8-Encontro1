let listaPecas = ["Bateria", "Volante", "Freio", "Pneu" ];
let pesoPeca = 80
let nomePeca = listaPecas[0]


if(pesoPeca <= 100){
    console.log("Pode cadastrar");
}
else{
    console.log("Peca muito pesada")
}


if(listaPecas.length <=10){
    console.log("Pode cadastrar")    
}
else{
    console.log("Lista cheia.")    
}

if(nomePeca.length < 3){
    console.log("Nome inválido!");
}