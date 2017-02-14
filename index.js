// index.js

function getPokemonInfo(id) {
  $.ajax({
    url: "http://pokeapi.co/api/v2/pokemon/" + id,
    method: "GET",
    success: function (response) {
      console.log(response);
      getPokemonName(response);
      getPokemonGeneralInfo(response);
    },
    error: function (err) {
      console.log(err);
    },
  });
}

function getPokemonName(objeto){
  const pokemon= objeto;
  console.log(pokemon.name);
  $("#pokeInfo").text("Pokemon Name "+pokemon.name);
}

function getPokemonGeneralInfo(objeto){
  const pokemon= objeto;
  $("#pokemonImage").attr("src",pokemon.sprites.front_default);
  $("#type1").text("Pokemon Type1 : "+pokemon.types[0].type.name);
  $("#type2").text("Pokemon Type2 : "+pokemon.types[1].type.name);
  $("#weight").text("Pokemon Weight  "+pokemon.weight);
  $("#height").text("Pokemon Heigh "+pokemon.height);

  // $("#pokemonGeneralInfo").append(pokemon.moves[1]);
}

$("#pokeButton").on('click', function(){
  value = $("#pokemonNumber").val();
  getPokemonInfo(value);
});


