// food=prompt('enter your name')
// console.log(food)
//  /*

function Convert() {
   const timp=document.getElementById('first').value;
   const num=parseFloat(document.getElementById('num').value)
   
   var fahrenheit=0
  
   const TO_timp=document.getElementById('second').value;
       if(timp=="Celsius" && TO_timp=="Fahrenheit"){
          fahrenheit= (num*9/5) + 32;

       //    console.log(fahrenheit);
          document.getElementById('id').textContent=fahrenheit + '°F';
       }
       else  if(timp=="Fahrenheit" && TO_timp=="Celsius"){
           fahrenheit= (num - 32) *5/9;
        //    console.log(fahrenheit);
           document.getElementById('id').textContent=fahrenheit + '°C';
        } 
        else  if(timp=="Celsius" && TO_timp=="Kelvin"){
           fahrenheit= num + 273.15;
        //    console.log(fahrenheit);
           document.getElementById('id').textContent=Math.round(fahrenheit) + '°K';
        }
        else  if(timp=="Kelvin" && TO_timp=="Celsius"){
           fahrenheit= num - 273.15;
        //    console.log(fahrenheit);
           document.getElementById('id').textContent=Math.round(fahrenheit) + '°C';
        }
        else  if(timp=="Fahrenheit" && TO_timp=="Kelvin"){
           fahrenheit= ((num -32)*5)/9 + 273.15;
        //    console.log(fahrenheit);
           document.getElementById('id').textContent=Math.ceil(fahrenheit) + '°K';
        }
        else  if(timp=="Kelvin" && TO_timp=="Fahrenheit"){
           fahrenheit= ((num - 273.15)*9)/5 + 32;
         
       
           document.getElementById('id').textContent=fahrenheit + '°F';
        }
   }
  r