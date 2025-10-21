function sumarCantidadesPorLista() {
    // Obtener todas las listas de ciudades
    const cityLists = document.querySelectorAll('.city-list');

    // Recorrer cada lista de ciudades
    cityLists.forEach((list, index) => {
        // Inicializar el total para la lista actual en 0
        let total = 0;
        let spezzatura = 0;

        // Obtener todos los inputs dentro de la lista actual
        const amounts = list.querySelectorAll('.amount');
        const spezz = list.querySelectorAll(".spezzatura")

        // Sumar los valores de los inputs dentro de esta lista
        amounts.forEach(input => {
            total += parseFloat(input.value) || 0;
        });

        spezz.forEach(input => {
            spezzatura += parseFloat(input.value)  || 0;
        });



        // Mostrar el total en el elemento con la clase 'total' dentro de esta lista
        list.querySelector('.tot').innerText = total;
          list.querySelector('.spezzTotal').innerText = spezzatura;


    var pacchi = total
    var select = list.querySelector('.miSelect').value;

    var fija = 1
    

    var pacchiX = pacchi / select
    var numeroEntero = Math.floor(pacchiX);
    var decimales = pacchiX - numeroEntero;
    var pacoRestante = fija / select
     var pacchiDaAdd = decimales / pacoRestante
     var result = numeroEntero + " Mani da " + select + " pacchi  " 
     
    
    
     if (numeroEntero < 1) {
        result = ""
    }
     
    
     if (pacchiDaAdd > 0 && numeroEntero > 0 ) {
        result += " + "  + pacchiDaAdd.toFixed(0) + " pachi "
     }
    if (pacchiDaAdd > 0 && numeroEntero < 1 ) {
        result += pacchiDaAdd.toFixed(0) + " pachi "
    }
     
     
     if (spezzatura > 0) {
        result += " e " + spezzatura + " spezzature";
    }
    let uniqueKey = "clave_" + index; // Usamos el índice del bucle para crear una clave única
    localStorage.setItem(uniqueKey, pacchi,result);
    let popo = localStorage.getItem("clave_0", result)
    console.log(popo)

    // Recuperar el valor del localStorage (solo para verificar)
    let oki = localStorage.getItem(uniqueKey);
    console.log(oki);  // Imprime el resultado guardado en el localStorage

      console.log(result)
     list.querySelector('.bancale').innerText = result;
     

            let popo0 = localStorage.getItem("clave_0", result)
                let popo1 = localStorage.getItem("clave_1", result)
                    let popo2 = localStorage.getItem("clave_2", result)
                let popo3 = localStorage.getItem("clave_3", result)
                    let popo4 = localStorage.getItem("clave_4", result)
                        let popo5 = localStorage.getItem("clave_5", result)
                            let popo6 = localStorage.getItem("clave_6", result)
                             

                               

    });
}
