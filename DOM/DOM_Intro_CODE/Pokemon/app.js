let index=1;
for(let i=1;i<=150;i++){
    let pokemon=document.createElement('div');
    let label=document.createElement('span')
    label.innerText=`#${i}`;
    let pokemonimg=document.createElement('img');
    index=i;
    let purl=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`
    pokemonimg.src=purl;
    pokemon.classList.add('pokemon');
    pokemon.appendChild(pokemonimg);
    pokemon.appendChild(label);

    document.getElementById('container').appendChild(pokemon);
}

