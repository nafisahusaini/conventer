// food=prompt('enter your name')
// console.log(food)
//  /*
//  floor
//  ceil
//  randon
//  */
// console.log(Math.ceil(Math.random()
// * 3))
// temp=prompt('enter timp you want change')
// number=Number(prompt('enter number '))
// temp1=prompt('enret the other tipm')
// if(temp=='f'&&temp1=='t'){
//     console.log(number)
// }

//  console.log(timp,num)
function Convert() {
   const timp=document.getElementById('first').value;
   const num=parseFloat(document.getElementById('num').value)
   // var celsius=0
   var fahrenheit=0
   // var kelvin=0
   // var result=document.getElementById('')
   const TO_timp=document.getElementById('second').value;
       if(timp=="Celsius" && TO_timp=="Fahrenheit"){
          fahrenheit= (num*9/5) + 32;
       //    console.log(fahrenheit);
          document.getElementById('id').innerHTML=Math.ceil(fahrenheit);
       }
       else  if(timp=="Fahrenheit" && TO_timp=="Celsius"){
           fahrenheit= (num - 32) *5/9;
        //    console.log(fahrenheit);
           document.getElementById('id').innerHTML=Math.ceil(fahrenheit);
        } 
        else  if(timp=="Celsius" && TO_timp=="Kelvin"){
           fahrenheit= num + 273.15;
        //    console.log(fahrenheit);
           document.getElementById('id').innerHTML=Math.ceil(fahrenheit);
        }
        else  if(timp=="Kelvin" && TO_timp=="Celsius"){
           fahrenheit= num - 273.15;
        //    console.log(fahrenheit);
           document.getElementById('id').innerHTML=Math.ceil(fahrenheit);
        }
        else  if(timp=="Fahrenheit" && TO_timp=="Kelvin"){
           fahrenheit= ((num -32)*5)/9 + 273.15;
        //    console.log(fahrenheit);
           document.getElementById('id').innerHTML=Math.ceil(fahrenheit);
        }
        else  if(timp=="Kelvin" && TO_timp=="Fahrenheit"){
           fahrenheit= ((num - 273.15)*9)/5 + 32;
         
        //    console.log(fahrenheit);
           document.getElementById('id').innerHTML=Math.ceil(fahrenheit);
        }
   }
   // document.getElementById('show').addEventListener('click', Convert());
   //Conver