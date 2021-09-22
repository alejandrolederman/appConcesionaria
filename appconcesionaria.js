let autos = require ("./listaAutos")
let personas = require ("./personas")

let concesionaria = {
   autos: autos,
 
  buscarAuto: function (unaPatente){
      for ( let i = 0; i < this.autos.length; i++){
if (unaPatente == this.autos[i].patente){
return this.autos[i];
}
}
    return null; 
},

   venderAuto: function  (unaPatente){
      let unAuto = this.buscarAuto (unaPatente);
         return unAuto.vendido = true;
       },

   autosParaLaVenta: function (){
      let paraVender = autos.filter (function (auto){
         return auto.vendido == false;
      });
      return paraVender;
   },
   
autosNuevos: function(){
        let enVenta = this.autosParaLaVenta();
        let ceroKm = enVenta.filter(function(enVenta){
            return enVenta.km < 100;
        });
        return ceroKm;
    },


    listaDeVentas: function (){
        let autosVendidos = this.autos.filter(function(auto){
           return auto.vendido == true;
        })

        let precioAutos = autosVendidos.map (function (unAuto){
           return unAuto.precio;
        })
        
        return precioAutos;
  },

  totalDeVentas: function(){
      let listaVenta = this.listaDeVentas();

        if (listaVenta == 0){
               
         return 0;

        }  else{

            let totalVentas = listaVenta.reduce (function (acum, precio){
                return acum + precio; } )
                return totalVentas;
        }    
    },

    puedeComprar: function(unAuto, unaPersona){
       
 if (unaPersona.capacidadDePagoTotal >= unAuto.precio && unaPersona.capacidadDePagoEnCuotas > (unAuto.precio / unAuto.cuotas)){
           return true;
        } else {
    
           return false;
        }
     },

     autosQuePuedeComprar: function (personas){

      let listaPuedeComprar = this.autosParaLaVenta();
      let comprar = this.puedeComprar();
     
      let listaVender = listaPuedeComprar.filter(function(unAuto){
           if( comprar(unAuto,personas) == true){

            return unAuto;
           }
      })
         return listaVender;
  }
}
let unPersonaMas ={nombre: "Juan", capacidadDePagoTotal:100000, capacidadDePagoEnCuotas:20000};

   console.log (concesionaria.puedeComprar(unPersonaMas));


