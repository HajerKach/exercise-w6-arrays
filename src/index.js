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

// print out name and index of all pokemons
// like: number x - Squirtle

const nameAndIdThanks = () => {
  pokemons.forEach((item, index) => {
    console.log(`Number ${index + 1} is on the followint pokemon ${item}`);
  })

};
nameAndIdThanks();

// add a pokemon with a name of your choice to the list,
// print the list so you see its there.

const catchPokemon = name => {
  pokemons.push(name)
  console.log(pokemons);

};
catchPokemon("Bambu");

// check the pokemons to see if a specific pokemon is in the array

const didICatchIt = name => {
  console.log(pokemons.includes(name));

};
didICatchIt("Weedle");

// add the pokemon "Clefairy" in the third place of the array
// print the list so you see its there.

const addInThirdPlace = () => {
  pokemons.splice(2, 0, "Clefairy",);
  console.log(pokemons);
};
addInThirdPlace();

// ***BONUS***
// // find the pokemon with the longest name

const theLongestName = () => {
  let longstName = [];
  let maxLength = 0;
  for (let pokemon of pokemons) {
    if (pokemon.length > maxLength) {
      maxLength = pokemon.length;
      longstName = [pokemon];
    } else if (pokemon.length === maxLength) {
      longstName.push(pokemon);
    }
  }
  console.log(`De med längst namn finns i följande lista:`, longstName);
};
theLongestName();
