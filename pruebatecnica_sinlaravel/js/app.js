//obtener numero random
let getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

//agregar datos de pokemon por consulta al JSON
const info = async () => {
    try{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomInt(1, 151)}`);
        const pokemon = await res.json();
        document.querySelector(".card__body").innerHTML = 
           `<img src="${pokemon.sprites.other.dream_world.front_default}" alt="pokemon photo" class="card__body--img">
           <h2 class="card__body--name">Name: ${pokemon.name}</h2>`;
        console.log(pokemon);
        document.querySelector(".card__overlay--text").innerHTML = 
            `<b>Habilidades:</b><br>
             Ataque: ${pokemon.stats[1].base_stat}<br>
             Defensa: ${pokemon.stats[2].base_stat}<br>`;
    }catch (e) {
        console.log(e);
        alert("Ocurrio un error inesperado");
    }
}

//llamar a metodo para mostrar
info();
setInterval(info, 30000);
const buscar =document.getElementById("search");
buscar.addEventListener("click", info);
