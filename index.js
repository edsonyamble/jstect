const myCity = {
  city: "New York",
  cityGreeting: function () {
    console.log("Greet;;"); //здесть не можем const  внутри  const   вызвать поэтому тут исползуем только function ()
  },
};
myCity.cityGreeting(); // вызвать функции
edson = () => {
  return console.log(10);
};
edson();//вызов функции 
