const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const results = document.querySelector('#results');

  if(height < 0 || isNaN(height)){
results.innerHTML =`please give a valid height ${height}`;


  }

  else if(weight < 0 || isNaN(weight)){
    results.innerHTML =`please give a valid weight ${weight}`;
    
    
      }
         else {
        const Bmi = ( weight/((height*height)/10000).toFixed(2))
      
      results.innerHTML = `<span>${Bmi}</span>`;
      
      // runnning loop for showing in which people bmi lies according to their bmi resuts
     
                     if(Bmi < 18.6 ){
                            results.innerHTML =`<span> Your BMI is ${Bmi}:Under  Weight</span>`;
    
    
                                         }
                                      else if (Bmi > 18.6 && Bmi < 24.9 ){
                                                results.innerHTML =`<span> Your BMI is ${Bmi}:Normal Range</span>`;
    
    
                                                        }
                                                           else  {
                                                                     results.innerHTML =`<span> Your BMI is ${Bmi}:overweight</span>`;
    
                                                                             }}
    
});