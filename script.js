const nombreInput = document.getElementById("nombreInput");
const agregarBtn = document.getElementById("agregarBtn");
const listaNombres = document.getElementById("listaNombres");
const dividirBtn = document.getElementById("dividirBtn");
const listaAleatoria1 = document.getElementById("listaAleatoria1");
const listaAleatoria2 = document.getElementById("listaAleatoria2");

const nombres = [];

agregarBtn.addEventListener("click", () => {
    agregarNombre();
});

nombreInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        agregarNombre();
    }
});

dividirBtn.addEventListener("click", () => {
    dividirNombresAleatoriamente();
});

function agregarNombre() {
    const nombre = nombreInput.value.trim();
    if (nombre !== "") {
        nombres.push(nombre);
        actualizarListaNombres();
        nombreInput.value = "";
    }
}

function actualizarListaNombres() {
    listaNombres.innerHTML = "";
    nombres.forEach((nombre) => {
        const listItem = document.createElement("li");
        listItem.textContent = nombre;
        listaNombres.appendChild(listItem);
    });
}

function dividirNombresAleatoriamente() {
    const nombresAleatorios = shuffleArray(nombres.slice());

    const mitad = Math.ceil(nombresAleatorios.length / 2);
    const lista1 = nombresAleatorios.slice(0, mitad);
    const lista2 = nombresAleatorios.slice(mitad);

    mostrarListaAleatoria(listaAleatoria1, lista1);
    mostrarListaAleatoria(listaAleatoria2, lista2);
}

function mostrarListaAleatoria(listaElement, nombres) {
    listaElement.innerHTML = "";
    nombres.forEach((nombre) => {
        const listItem = document.createElement("li");
        listItem.textContent = nombre;
        listaElement.appendChild(listItem);
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}