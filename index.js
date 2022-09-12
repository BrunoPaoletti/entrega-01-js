
Pizzas = [
    {
        id: 1,
        nombre: "jamon y morrones",
        ingredientes: ["salsa de tomate","queso","jamón","morrones"],
        precio: 550
    },
    {
        id: 2,
        nombre: "Jamón y ananá",
        ingredientes: ["salsa de tomate","queso","jamon","ananá"],
        precio: 1000
    },
    {
        id: 3,
        nombre: "Palmitos",
        ingredientes: ["salsa de tomate","queso","jamón","palmitos"],
        precio: 1200
    },
    {
        id: 4,
        nombre: "Fugazza",
        ingredientes: ["queso","cebolla","aceitunas"],
        precio: 1350
    },
    {
        id: 5,
        nombre: "americana",
        ingredientes: ["salsa de tomate","queso","bacon","huevo frito","aceitunas"],
        precio: 1400
    },
    {
        id: 6,
        nombre: "Rúcula",
        ingredientes: ["salsa de tomate","queso","rúcula"],
        precio: 1550
    },
    {
        id: 7,
        nombre: "Champiñon",
        ingredientes: ["queso","jamon","champiñones","morron", "salsa blanca"],
        precio: 1690
    }
]


// a) Las pizzas que tengan un id impar.
const pizzasIdImpar = Pizzas.filter((p)=>{
    return p.id % 2!==0;
});

pizzasIdImpar.forEach((e) => {console.log(`La pizza ${e.nombre}, tiene id impar`)});

// b) ¿Hay alguna pizza que valga menos de $600?
Pizzas.some((p)=>{return p.precio < 600})?console.log("Si, hay al menos una pizza con precio menor a $600"):console.log("No, no hay pizza con precio menor a $600")

//c) El nombre de cada pizza con su respectivo precio.
Pizzas.forEach((p)=>{
    console.log(`La pizza ${p.nombre} tiene un valor de $${p.precio}.`)
})


//d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.
Pizzas.forEach((p)=>{
    console.log(`Los ingredientes de la pizza ${p.nombre} son:`);
    p.ingredientes.forEach((i)=>{
        console.log("- "+i);
    })
})

