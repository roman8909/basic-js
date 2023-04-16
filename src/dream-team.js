const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  let teamName = '';
  
  if(Array.isArray(members) !== true) {
    return false;
  } else {
    let membersNoSpace = members.map((string) => {
      if(typeof(string) == 'string') {
        while(string[0] == ' ') {
      string = string.slice(1, string.length);
    }
    if(string[0].toUpperCase() !== string[0]) {
      console.log(string[0])
      string = string[0].toUpperCase() + string.slice(1, string.length);
    }
    return string; 
      }
      
    });
    membersNoSpace.sort();
    membersNoSpace.forEach((el) => {
      if(typeof(el) == 'string') {
          teamName += el[0].toUpperCase();
      }
    })
  }
  return teamName;
}

module.exports = {
  createDreamTeam
};
