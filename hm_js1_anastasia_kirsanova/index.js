var a = 2;
var b = 4;
var c;

c = b;
b = a;
a = c;
console.log(a);
console.log(b);
console.log(c);

/*alert('Привет я пока не знаю кто ты');
var name= prompt('Как твое имя?');
console.log(name);
var surname = prompt('Как твоя фамилия?');
console.log(surname)
var years = prompt('Больше или меньше 18 лет?');
console.log(years);

alert('Ну привет ' + name + ' ' + surname + ' вижу тебе ' + years + ' 18');*/

var number = +prompt('Напишите число');
var number_2 = +prompt("Напишите число");
var number_3 = +prompt("Напишите число");
var text = prompt("Сложить или умножить их?");
console.log(number);
console.log(number_2);
console.log(number_3);
console.log(text);
 console.log(number)

if(text == ''){
   var text = prompt("Сложить или умножить их?");
} 
if (isNaN('') || isNaN('') || isNaN('')) 
if(isNaN(number) || isNaN(number_2) || isNaN(number_3)){
alert('Ну и ладно...')
}
else if(text == 'сложить'){ 
    alert(number + number_2 + number_3);
} else if(text == 'умножить'){
    alert(number * number_2 * number_3);
} else alert('Неправильный ответ');
