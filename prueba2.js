const { json } = require("stream/consumers");

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


    let uniqueKey = "clave_" + index;

let data = {
    pacchi: total,
    spezzatura: spezzatura,
    texto: result
};

localStorage.setItem(uniqueKey, JSON.stringify(data));
    let popo = localStorage.getItem("clave_0", result)
    console.log(popo)

    // Recuperar el valor del localStorage (solo para verificar)
    let oki = localStorage.getItem(uniqueKey);
    console.log(oki);  // Imprime el resultado guardado en el localStorage

      console.log(result)
     list.querySelector('.bancale').innerText = result;
     

           let popo0 =  JSON.parse(localStorage.getItem("clave_0")) || 0;
              let popo1 = JSON.parse(localStorage.getItem("clave_1")) || 0;
                 let popo2 = JSON.parse(localStorage.getItem("clave_2")) || 0;
                let popo3 = JSON.parse(localStorage.getItem("clave_3")) || 0;
                   let popo4 = JSON.parse(localStorage.getItem("clave_4")) || 0;
                       let popo05 = JSON.parse(localStorage.getItem("clave_5")) || 0;
                            let popo6 =JSON.parse(localStorage.getItem("clave_6")) || 0;
                              
                            var si = popo0.pacchi + popo1.pacchi + popo2.pacchi + popo3.pacchi + popo4.pacchi + popo05.pacchi + popo6.pacchi
                            var no = popo0.spezzatura + popo1.spezzatura + popo2.spezzatura + popo3.spezzatura+ popo4.spezzatura + popo05.spezzatura + popo6.spezzatura
                            console.log(si)
                            var totalCopi = si * 50;
                            var totalCopias= totalCopi + no;
                            document.getElementById("totalGeneral").innerText = "pacchi:" + " " + si +" " + "copie:" + " " +  totalCopias;
                            
   
    });
}