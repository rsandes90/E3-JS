const pizzas = [{
        id: 1,
        nombre: "Muzzarella",
        ingredientes: ["tomate", "muzzarella"],
        precio: 100,
        img: "./img/pizza1.png",
    },
    {
        id: 2,
        nombre: "Jamon y Queso",
        ingredientes: ["tomate", "muzzarella", "Jamon y Queso"],
        precio: 150,
        img: "./img/pizza2.png",
    },
    {
        id: 3,
        nombre: "Fugazzeta",
        ingredientes: ["tomate", "muzzarella", "Cebolla"],
        precio: 200,
        img: "./img/pizza3.png",
    },
    {
        id: 4,
        nombre: "Humita",
        ingredientes: ["tomate", "muzzarella", "choclo", "salsa blanca"],
        precio: 250,
        img: "./img/pizza4.png",
    },
    {
        id: 5,
        nombre: "Especial",
        ingredientes: ["tomate", "muzzarella", "Jamon", "Morron"],
        precio: 300,
        img: "./img/pizza5.png",
    },
    {
        id: 6,
        nombre: "Anchoas",
        ingredientes: ["tomate", "anchoas"],
        precio: 350,
        img: "./img/pizza6.png",
    },
];

// Guardo el Array creado arriba en el LocalStorage
const saveLocalStorage = () => {
    localStorage.setItem("pizzas", JSON.stringify(pizzas));
};

// Nos traemos todos los elementos necesarios
const idPizza = document.getElementById("input");
const nombrePizza = document.getElementById("nombre");
const imgPizza = document.getElementById("img");
const ingredientesPizza = document.getElementById("ingredientes");
const precioPizza = document.getElementById("precio");
const boton = document.getElementById("button");

const mostrarPizza = (nombre, img, ingredientes, precio) => {
    nombrePizza.textContent = nombre;
    ingredientes.forEach((ingrediente) => {
        const li = document.createElement("li");
        li.textContent = ingrediente;
        ingredientesPizza.appendChild(li);
    });
    imgPizza.src = img;
    precioPizza.textContent = "$" + precio;
};

const mostrarError = () => {
    if (!idPizza.value) {
        nombrePizza.textContent = "Debe ingresar un valor";
        imgPizza.src = "";
        precioPizza.textContent = "";
    } else {
        nombrePizza.textContent = "No existe la pizza";
        imgPizza.src = "";
        precioPizza.textContent = "";
    }
};

const filtroDePizzas = (e) => {
    e.preventDefault();
    ingredientesPizza.innerHTML = "";
    let valorInput = parseInt(idPizza.value);
    const resultado = pizzas.filter((pizza) => pizza.id == valorInput);
    const miPizza = {...resultado[0] };

    if (resultado.length) {
        mostrarPizza(
            miPizza.nombre,
            miPizza.img,
            miPizza.ingredientes,
            miPizza.precio
        );
        return;
    } else {
        mostrarError();
        return;
    }
};

saveLocalStorage();
form.addEventListener("submit", filtroDePizzas);