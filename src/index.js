const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey"
];
// print out, in a sentence, how many pokemons I have.
// like: "I have x pokemons!"

const countThem = () => {
  let pocemon = pokemons.length;
  console.log(`I have ${pocemon} pokemons`)
};
countThem();

// order the pokemons alphabetically

const orderThem = () => {
  pokemons.sort()
  console.log(pokemons);

};
orderThem();

// reverse the order of the pokemons

const flipThem = () => {
  pokemons.reverse()
  console.log(pokemons);
};
flipThem();

// print the pokemons in UPPERCASE letters

const makeThemBig = () => {
  pokemons.forEach(element => {
    console.log(element.toUpperCase());
  });

};
makeThemBig();

// only print the pokemons that starts with B

const onlyTheBs = () => {
  const startsWithB = pokemons.filter(item => item.startsWith("B"));
  console.log(startsWithB);
}
onlyTheBs();

// remove all pokemons that starts with C
const notTheCs = () => {
  const withoutTheCs = pokemons.filter(item => !item.startsWith("C"));
  console.log(withoutTheCs)

};
notTheCs();

const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
};

const catchPokemon = name => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
};

const didICatchIt = name => {
  // check the pokemons to see if a specific pokemon is in the array
};

const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.
};

// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
};
