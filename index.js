const myCity = {city : 'california',
info : {
  isPopular:true,
  country:'USA'
}}
//console.log(myCity.info.isPopular)
//console.table(myCity['info'])
console.table(myCity)
delete myCity.info['country']
console.table(myCity)