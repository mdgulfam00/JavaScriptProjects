const randomColor = function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  let fun;
  const startChangingColor = function () {

    fun = setInterval(() => {
        document.body.style.backgroundColor = randomColor();
    }, 100);

    
 }

 const stopChangingColor = function () {
    clearTimeout(fun)
 }

 document.querySelector('#start').addEventListener('click',startChangingColor);
 document.querySelector('#stop').addEventListener('click',stopChangingColor);

