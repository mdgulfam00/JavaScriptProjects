const form = document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const height =  parseInt(document.querySelector('#height').value);
    const weight =  parseInt(document.querySelector('#weight').value);
    const result =  document.querySelector('#result');

    if (height==='' || height<0 || isNaN(height)) {
        result.innerHTML = "Please enter valid height";
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML = "Please enter valid weight";
    }
    else{
        const bmi = (weight/((height*height)/10000)).toPrecision(4);
        if (bmi<18.6) {
            result.innerHTML = `<h2>${bmi.concat(" Underweight")}</h2>`;
        }
        else if(bmi>18.6 && bmi<24.9){
            result.innerHTML = `<h2>${bmi.concat(" Normalweight")}</h2>`;
        }
        else{
            result.innerHTML = `<h2>${bmi.concat(" Overweight")}</h2>`;
        }
    }
})