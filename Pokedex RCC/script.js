const button = document.createElement("button");
const input = document.createElement("input");
const label = document.createElement("label");

input.name = "pokeName";
input.id = "pName";
input.placeholder = "Nombre";
button.innerText = "Buscar";
label.innerText = "Escribe el nombre para obtener la información";

button.addEventListener("click", pokeBusca);

document.body.append(document.createElement("hr"));
document.body.append(input);
document.body.append(button);

async function pokeBusca(){
const pokeName = input.value;
const response = await fetch("https://storage.googleapis.com/campus-cvs/00000000000-images-lectures/pokemons.json" + pokeName
)
const pokemon = await response.json ();

document.getElementById("name").innerText = pokeName;
document.getElementById("clave").innerText = pokemon.id;
document.getElementById("imagen").src = pokemon.sprites.front_default;
document.getElementById("altura").innerText = "height:" + pokemon.height;
document.getElementById("peso").innerText = "weight:" + pokemon.weight / 10;

const types = pokemon.types;
if (types.length >1){
    document.getElementById("type1").innerText = "type 1: " + types[0].type.name;
    document.getElementById("type2").innerText = "type 2:" + types[1].type.name;
} else {
    document.getElementById("type1").innerText = "type: " + types[0].type.name;
    document.getElementById("type2").innerText = "";
}

}
 