// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

   function findMatching(drivers, name){
    return drivers.filter(driversName => driversName ===name)

   }

   console.log(findMatching(drivers, 'Bobby'))
   console.log(findMatching(drivers, 'Sammy'))


   function findMatching(drivers, name) {
    return drivers.filter(driversName => driversName.toLowerCase() === name.toLowerCase());
  }
  console.log(findMatching(drivers, 'Bobby'))


  function fuzzyMatch (drivers, letters){
  let matches = drivers.filter(driversName=>driversName.slice(0, letters.length)===letters)
return matches
   }


function matchName (drivers, name){
  return drivers.filter(driversName => driversName.name ===name)

}
console.log(matchName(drivers, 'Bobby'))
   