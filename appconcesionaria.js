let autos = require ("./listaAutos")
let personas = require ("./personas")

let concesionaria = {
   autos : autos,
 
  buscarAuto: function(unaPatente){
      for ( let i = 0; i < autos.length; i++){
if (unaPatente == autos[i].patente){
return autos[i];
}}
    return null; 
},

   venderAuto: function(unaPatente){
      let unAuto = this.buscarAuto (unaPatente);
         return unAuto.vendido = true;
       },

   autosParaLaVenta: function (){
      let paraVender = concesionaria.autos.filter (function (auto){
         return auto.vendido == false;
      });
      return paraVender;
   },
   
autosNuevos: function(){
        let enVenta = concesionaria.autosParaLaVenta();
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
      if (unaPersona.capacidadDePagoEnCuotas >= (unAuto.precio/unAuto.cuotas) && unaPersona.capacidadDePagoTotal >= unAuto.precio){
         return true
      } else{
         return false
      }
     },

   //   autosQuePuedeComprar: function (unaPersona){
   //    return this.autosParaLaVenta().filter(auto => this.puedeComprar(auto,unaPersona));
   // },

   autosQuePuedeComprar: function (personas){
     
      let listaVender = concesionaria.autosParaLaVenta().filter(function(unAuto){
           if(  concesionaria.puedeComprar(unAuto,personas) == true){

            return unAuto;
           }
      })
         return listaVender;
  }


}
let unPersonaMas ={nombre: "Juan", capacidadDePagoTotal:100000, capacidadDePagoEnCuotas:20000};

   console.log (concesionaria.autosQuePuedeComprar(unPersonaMas));


