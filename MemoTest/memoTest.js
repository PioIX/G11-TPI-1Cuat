function imagen(){
    NoRepetir =new Set()
    for(i=0;i<8;i++){
        /* Elije un id de todos los que hay y se fija si hay una imagen o no*/
        lista = Math.floor(Math.random()* 15)
        prueba = false
        while(prueba == false){
            if (document.getElementById(lista).value == 1){
                console.log("ID ocupado")
                lista = Math.floor(Math.random()* 16)
            }else {
                console.log("ID libre" + document.getElementById(lista).id)
                numero = lista
                prueba = true
            }
        }
        /* Elije un nro aleatorio y obtiene una imagen*/
        
        imagen = Math.floor(Math.random()*17)
        otro = NoRepetir.has(imagen)
        console.log("FIND() " +  otro )

        while (otro == true){
            imagen = Math.floor(Math.random()*17)
            console.log("Nueva Imagen ")
            otro = NoRepetir.has(imagen)
        }

        switch(imagen){ 
            case 0:
                x = "../Imagenes/ODS17.png"
                NoRepetir.add(0)
                break;
            case 1:
                x= "../Imagenes/ODS1.png"
                NoRepetir.add(1)
                break;
            case 2:
                x="../Imagenes/ODS2.png"
                NoRepetir.add(2)
                break;
            case 3:
                x = "../Imagenes/ODS3.jpg"
                NoRepetir.add(3)
                break;
            case 4:
                x= "../Imagenes/ODS4.png"
                NoRepetir.add(4)
                break;
            case 5:
                x = "../Imagenes/ODS5.png"
                NoRepetir.add(5)
                break;
            case 6:
                x= "../Imagenes/ODS6.png"
                NoRepetir.add(6)
                break;
            case 7:
                x = "../Imagenes/ODS7.jpg"
                NoRepetir.add(7)
                break;
            case 8:
                x= "../Imagenes/ODS8.png"
                NoRepetir.add(8)
                break;
            case 9:
                x="../Imagenes/ODS9.png"
                NoRepetir.add(9)
                break;
            case 10:
                x="../Imagenes/ODS10.png"
                NoRepetir.add(10)
                break;
            case 11:
                x ="../Imagenes/ODS11.png"
                NoRepetir.add(11)
                break;
            case 12:
                x="../Imagenes/ODS12.png"
                NoRepetir.add(12)
                break;
            case 13:
                x="../Imagenes/ODS13.jpg"
                NoRepetir.add(13)
                break;
            case 14:
                x="../Imagenes/ODS14.png"
                NoRepetir.add(14)
                break;
            case 15:
                x="../Imagenes/ODS15.png"
                NoRepetir.add(15)
                break;
            case 16:
                x="../Imagenes/ODS16.jpg"
                NoRepetir.add(16)
                break;
            case 17:
                x="../Imagenes/ODS17.png"
                NoRepetir.add(17)
                break;
        }    
        
        
        console.log(NoRepetir)
        console.log(x)
        
        /* Agrega la imagen al primer id*/
        document.getElementById(numero).value = "1"
        document.getElementById(numero).innerHTML += `
            <img src=${x} width="80" height="80" >`

    
        
        /* Busca otro id para poner el par*/    
        posicion = Math.floor(Math.random()*16)
        console.log("Posicion= " + posicion)

        /* Coloca devuelta la imagen y en nuevo id*/
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
    
}

imagen()






























