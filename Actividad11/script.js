const all = (homework,duration,callback) =>{
    setTimeout(()=>{
        callback(homework)
    },duration)
}
all("Levantarse",5000, (homework)=>{
    console.log(`Realizando la tarea ${homework}`)
    all("Tender la cama",3000, (homework)=>{
        console.log(`Realizando la tarea ${homework}`)
        all("Bañarse",3000, (homework)=>{
            console.log(`Realizando la tarea ${homework}`)
            all("Clase de Paradigmas",5000, (homework)=>{
                console.log(`Realizando la tarea ${homework}`)
                all("Desayunar",8000, (homework)=>{
                    console.log(`Realizando la tarea ${homework}`)
                    all("Jugar Videojuegos",10000, (homework)=>{
                        console.log(`Realizando la tarea ${homework}`)
                    })
                })
            })
        })
    })
})