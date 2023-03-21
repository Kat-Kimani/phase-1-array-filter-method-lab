// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

   function findMatching(drivers, name){
    return drivers.filter(driver => driver ===name)

   }

   console.log(findMatching(drivers, 'Bobby'))
   console.log(findMatching(drivers, 'Sammy'))


   function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  console.log(findMatching(drivers, 'Bobby'))


  function fuzzyMatch (drivers, letters){
    return drivers.filter(driver => driver ===letters)

   }

   console.log(fuzzyMatch(drivers, 'Sa'))  


   function matchName (){

    
   }