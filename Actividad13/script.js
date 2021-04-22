const comprarCasco = new Promise((resolve, reject)=>{
    setTimeout(()=>{
                resolve(
                    {
                        actividad: "Comprar casco",
                        idCompra: 2568,
                        idCliente: 2698,
                        total: 350 
                    }
        )
    }, 1000)
})
const comprarGuantes = new Promise((resolve, reject)=>{
    setTimeout(()=>{
                resolve(
                    {
                        actividad: "Comprar guantes",
                        idCompra: 2568,
                        idCliente: 2698,
                        total: 200 
                    }
        )
    }, 2000)
})
const paseoBici = new Promise((resolve, reject)=>{
    setTimeout(()=>{
                resolve(
                    {
                        actividad: "Paseo en bicicleta",
                        totalKm: 25,
                        caloriasConsumidas: 2698 
                    }
        )
    }, 8000)
})

const pasearBicicleta = () =>{
    comprarCasco
        .then(infoCasco=>{
            console.log(infoCasco)
            return comprarGuantes
        })
        .then(infoGuantes => {
            console.log(infoGuantes)
            return paseoBici
        })
        .then(infoPaseo => {
            console.log(infoPaseo)
        })
        .catch(error =>{
            console.log(error)
        })
        .finally(()=> console.log("Proceso finalizado"))
}
pasearBicicleta();