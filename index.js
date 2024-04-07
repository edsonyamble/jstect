// function a() {
//   console.log('this you')
// }
// a() //this you
// a = 10 //a =10 variable 
// a()// error a don t function because a is variables 

const b = () => {
  console.log('you are ))')
}
//permet de ne pas changer la variable qui est ici la fonction pour eviter les probleme de chamgement de function ou variable 
b()//permet de voir la valeur de la function 
b = 90// b de une variable mais a cause de const dns la function il yaurau erreur que on ne pas chamger la function a cause de const 
