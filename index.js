const myCity = {
  city: "New York",
  cityGreeting () {
    console.log("Greet;;");//здесть не можем const  внутри  const   вызвать поэтому тут исползуем только function () но можеи без function
  },
};
myCity.cityGreeting()// вызвать функции 
