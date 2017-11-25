
function findMatching(drivers, name){
  let matchingDrivers= drivers.filter(function(driver){
    if (name.toLowerCas() === driver.toLowerCase()){
      return true
    } else {
      return false
    }
  })

      