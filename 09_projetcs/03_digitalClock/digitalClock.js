const clock = document.querySelector("#clock")



setInterval(() => {
  const newTime = new Date()
  console.log(newTime.toLocaleString());
  clock.textContent = newTime.toLocaleString()
}, 1000 );

