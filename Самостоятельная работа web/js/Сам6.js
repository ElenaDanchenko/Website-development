// задание 1
let variable_1 = 80;
let variable_2 = 6;
let falsyValue = false; // задание 12

// задание 2
if (variable_1 > variable_2) {
	console.log(variable_1 + ' > '+ variable_2 + '-'+ (variable_1 > variable_2));
} else {
	console.log(variable_1 + ' > '+ variable_2 + '-'+ "false");
}

if (variable_1 < variable_2) {
	console.log(variable_1 + ' < '+ variable_2 + '-'+ (variable_1 < variable_2));
} else {
	console.log(variable_1 + ' < '+ variable_2 + '-'+ "false");
}
	
if (variable_1 == variable_2) {
	console.log(variable_1 + ' == '+ variable_2 + '-'+ (variable_1 == variable_2));
} else {
	console.log(variable_1 + ' == '+ variable_2 + '-'+ "false");
}

if (variable_1 != variable_2) {
	console.log(variable_1 + ' != ' + variable_2 + '-'+ (variable_1 != variable_2));
} else {
	console.log(variable_1 + ' != '+ variable_2 + '-'+ "false");
}

if (variable_1 > 0 && variable_2 > 0) {
	console.log(variable_1 + " && " + variable_2 + ' > 0 -'+ (variable_1 > 0 && variable_2 > 0));
} else {
	console.log(variable_1 + " && " +  variable_2 + ' > 0 -' + "false");
}

if (variable_1 > 6) {
	console.log(variable_1+ ' > 6 -'+ (variable_1 > 6));
} else {
	console.log(variable_1 +' > 6 -'+ "false");
}

if (variable_2 > 6) {
	console.log(variable_1 +' > 6 -'+ (variable_2 > 6));
} else {
	console.log(variable_1 + ' > 6 -' + "false");
}

if (variable_1 <= variable_2) {
	console.log(variable_1 + ' <= '+ variable_2 + '-'+ (variable_1 <= variable_2));
} else {
	console.log(variable_1 + ' <= '+ variable_2 + '-'+ "false");
}

// задание 3
console.log(variable_1 >= variable_2 ? 'var1 >= var2' : 'var1 <= var2');

// задание 4
let sum = variable_1 + variable_2;
console.log(sum);

// задание 5
console.log(sum + 1);

// задание 6

let array_str = ["Go"," - ","компилируемый, ","многопоточный,"," язык"," программирования."];

// задание 7
let result = "";

for (var i = 0; i < array_str.length ; i++){
	result += array_str[i];
}
	console.log(result);

//задание 8
let results = " "
let substr = "ябл";
let index;

for (let i = 0; i < array_str.length ; i++){
	results += array_str[i];
	index = array_str[i].indexOf(substr);
}
	if (index != -1) {
        console.log("Подстрока найдена!");
    } else {
        console.log("Подстрока не найдена");
    }

// задание 9
array_str.splice(1, 1);
array_str.splice(3, 1);
console.log(array_str);

// задание 10,11

function language_Go(){
	alert("Язык программирования Go");
};

// задание 13
function confirm_ans(){
	
	let ans = confirm( "Изменить значение переменной?");
	
	if(ans){
		
		falsyValue = !falsyValue;
		console.log("falsyValue = " + falsyValue);
	}
	
	else 
		console.log("falsyValue = " + falsyValue);

}

// задание 14
var num = Number("56");

console.log( num + " " + typeof(num));

// задание 15

	const language_Golang = {
		first_property : "Предложение с переносом строки /n",
		second_property: 80,
		third_property: ["Программистов", "Go", "часто", "называют", "сусликами"],
		fourth_property: [1,2,3,4,5,6,7,8],
		others_lang: {			
			name: "Python",
			level_difficulty:"simple",
			creator:"Guido van Rossum",
			site:"python.org"			
		}
	};
	
	console.log(language_Golang);
	language_Golang.third_property[0] = "язык программирования go";
	console.log(language_Golang.third_property);
	
	let maxValue = 0;
	let y = 0;
	
	while(y < language_Golang.fourth_property.length)
	{
		if (language_Golang.fourth_property[y] > maxValue)
		{
			maxValue = language_Golang.fourth_property[y];
		}
		y++; 
	}
	console.log(maxValue);
	
// задание 16
	let str = "hello world!";	
// задание 17
	console.log(str.toUpperCase());
// задание 18
	language_Golang.data = "28.02.2024";
// задание 19
	console.log(language_Golang.data);
