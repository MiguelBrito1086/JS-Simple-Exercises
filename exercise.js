// map returns array
// filter returns array
// find returns item in array
// reduce returns number string or array

console.log('Starting game with teams:');
const teams = ['liverpool', 'arsenal', 'chelsea', 'rapids', 'roma', 'chivas'];
for (var i = 0; i < teams.length; i++) {
  console.log(teams[i]);
}
console.log('\n\n\n');
// total/ amount of items
console.log('Finding the average of team name length');
const totalLength = teams.reduce((results, team) => {
  return results + team.length;
}, 0)

const average = totalLength / teams.length;
console.log(`${average} characters`);

// Postfix ' team' for each team. ie. 'liverpool' => 'liverpool team'
// Only use map and string interpolation.
const namesWithTeamOnit = teams.map(team => {
  return team + ' team';
})
console.log(`Here is who will be playing, the ${namesWithTeamOnit}`);


// Remove all teams that have the letter 'i' in their team name.
// Only use filter and a for loop.

const teamRemovalOfi = teams.filter(letteri => {
  return !letteri.includes('i')
})

console.log(`Here are the teams without an 'i' -> ${teamRemovalOfi}`);


// Find the team 'chivas team' and update its 'h' letter to be capitalized.
// Only use find twice.

// let chivas = namesWithTeamOnit.find((item) => {
//   return item.includes('chivas team')
// })
// chivas.replace('h', 'H')
// let makeHCapital = chivas.split().find(letter => {
//   return letter.includes('h').toUpperCase('')
// })

const chivasIndex = namesWithTeamOnit.findIndex((item) => {
  return item.includes('chivas team')
})
namesWithTeamOnit[chivasIndex] = namesWithTeamOnit[chivasIndex].replace('h', 'H');
console.log(namesWithTeamOnit);


// Make a large string that says the name of all the teams.
// Only use reduce.

const stringOfTeams = teams.reduce((results, team) => {
  return results + ' ' + team;
})

console.log(stringOfTeams);
