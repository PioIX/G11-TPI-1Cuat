function imagen(id){
    numero = document.getElementById(id).id
    console.log( "ID= " + numero)

    imagen = Math.floor(Math.random()*17)
    switch(imagen){ 
        case 0:
            x = "img/ODS17.png"
            break;
        case 1:
            x= "img/ODS1.png"
            break;
        case 2:
            x="img/ODS2.png"
            break;
        case 3:
            x = "img/ODS3.jpg"
            break;
        case 4:
            x= "img/ODS4.png"
            break;
        case 5:
            x = "img/ODS5.png"
            break;
        case 6:
            x= "img/ODS6.png"
            break;
        case 7:
            x = "img/ODS7.jpg"
            break;
        case 8:
            x= "img/ODS8.png"
            break;
        case 9:
            x="img/ODS9.png"
            break;
        case 10:
            x="img/ODS10.png"
            break;
        case 11:
            x ="img/ODS11.png"
            break;
        case 12:
            x="img/ODS12.png"
            break;
        case 13:
            x="img/ODS13.jpg"
            break;
        case 14:
            x="img/ODS14.png"
            break;
        case 15:
            x="img/ODS15.png"
            break;
        case 16:
            x="img/ODS16.jpg"
        case 17:
            x="img/ODS17.png"
    }

    console.log(x)
    

    document.getElementById(numero).value = "1"
    document.getElementById(numero).innerHTML += `
        <img src=${x} width="80" height="80" >`

   
    posicion = Math.floor(Math.random()*16)
    console.log("Posicion= " + posicion)

    valor = false
    while(valor == false){
       if(document.getElementById(posicion).value == 0){
        document.getElementById(posicion).value = "1"
        document.getElementById(posicion).innerHTML += `
            <img src=${x} width="80" height="80" >`
        valor = true
        }else{
            console.log("ocupado")
            posicion = Math.floor(Math.random()*16)
            console.log(posicion)
            
            
        } 
    }

    
    
        


}


function destapar(numero){
    
    document.getElementById(numero)

}





























