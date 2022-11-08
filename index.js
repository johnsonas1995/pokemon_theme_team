let pokemon_types = [];
let pokemon_list = [];
let first = [];
let pictures = [];
const getPok = async () => {
  id = Math.floor(Math.random() * (900 - 1) + 1);
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  pokemon_name = response.data.name;
  pokemon_type = response.data.types[0].type.name;
  pokemon_id = response.data.id
  if (pokemon_types.length < 1) {
    pokemon_types.push(response.data.types[0].type.name);
    first.push(pokemon_name);
  }
  // creates a document fragment to allow us to insert new elements
  let add = document.createDocumentFragment();
  if (response.data.types[0].type.name === pokemon_types[0] && response.data.name !== pokemon_list[0]) {
    pokemon_list.push(pokemon_name);
    console.log("NAME: " + pokemon_name + " TYPE: " + pokemon_type)
    // creating a div element container for the image and text
    let poke_div = document.createElement('div')
    poke_div.setAttribute('id', 'div' + pokemon_list.length)
    poke_div.setAttribute('class', pokemon_type)
    add.appendChild(poke_div)
    document.getElementById('container').append(add)
    // creating a div element for the images
    let poke_pic = document.createElement('img');
    poke_pic.setAttribute('class', 'images')
    poke_pic.src = response.data.sprites.other["official-artwork"].front_default;
    add.appendChild(poke_pic)
    document.getElementById('div' + pokemon_list.length).append(add)
    // creating a div element for text
    let text_div = document.createElement('div')
    text_div.setAttribute('class', 'text_div')
    add.appendChild(text_div)
    document.getElementById('div' + pokemon_list.length).append(add)
    text_div.innerHTML = "NAME: " + pokemon_name +  "\ ID: " + pokemon_id + "\ TYPE: " + pokemon_type
    pictures.push(response.data.sprites.other["official-artwork"].front_default);
  }
  if (pokemon_list.length < 6) {
    getPok();
  }
  if (pictures.length === 6){
    console.log(pictures);
//     for (let i = 0; i < pictures.length; i++) {
//         const img = document.createElement("img");
//         img.src = pictures[i];
//   }
  }
}