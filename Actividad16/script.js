const app = Vue.createApp({
   data(){
       return { 
            materia: "Paradigmas de programacion",
            semestre: "Sexto",
            carrera: "Ingenieria en Ciencias de la Computacion",
            productos: [
                {nombre: "cerveza", cantidad: 100},
                {nombre: "agua", cantidad: 50},
                {nombre: "vino", cantidad: 10}
            ],
            producto: ""
        }
   },

   methods: {
        agregarProducto(){
           this.productos.push(
               {nombre: this.producto, cantidad: 0}
           )
           this.producto= ""
       }
   },

   computed:{
       total(){
           let total = 0
           for(producto of this.productos){
               total = total + producto.cantidad
           }
           return total;
           return this.productos.reduce((contador, product )=> contador+producto.cantidad,0)
       }
   }
})

const vm = app.mount('#app');
