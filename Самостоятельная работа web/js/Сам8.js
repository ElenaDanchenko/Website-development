document.addEventListener("DOMContentLoaded", function(event) {
init();
});

function init() {
	
	let request = new XMLHttpRequest(); // Создание экземпляра объекта XMLHttpRequest
	let url = "https://api.ipify.org/?format=json"; // конечная точка - endpoint
	
	// Инициализация запроса с помощью метода open()
	// GET – метод, по которому будем делать запрос
	// url - переменная, содержащая URL для отправки запроса
	request.open("GET", url); 
	
	let text_ip = document.getElementById('ip'); // задание 2.1
	
	// Обработка ответа от сервера
	// Назначение обработчика на событие load объекта request
	request.onload = function() {
		
		// Преобразование полученного текста в JSON-объект
		let obj = JSON.parse(request.responseText);
		// Пример ответа сервера {"ip":"93.81.27.81"}
		// Вывод свойства ip в консоль
		console.log(obj.ip); // 185.24.114.34		
		text_ip.innerHTML+='IP-адрес устройства: ' + obj.ip; // задание 2.1	
	}
	// Отправка запроса на сервер
	request.send();
	
	
	// задание 2.2
	let loginForm = document.getElementById("form");
	let film_names = document.getElementById("film_names");
	let film_length = document.getElementById("film_length");
	let film_country = document.getElementById("film_country");
	let film_ageRating = document.getElementById("film_ageRating");
	let film_description = document.getElementById("film_description");
	let film_rating_kp = document.getElementById("film_rating_kp");
	let film_header = document.getElementById("film_header");
	let poster =  document.getElementById("img");
	
	
	
	loginForm.addEventListener("submit", (e) => {
		e.preventDefault();

		// handle submit
		let request_1 = new XMLHttpRequest();

		let film_genre = document.getElementsByName("film_genre");
		let div_film_genre =  document.getElementById("film_genre");
		
		for(let i = 0; i < film_genre.length; i++){

			if(film_genre[i].checked){
			console.log("Выбран жанр: " + film_genre[i].value);
				let url = "https://api.kinopoisk.dev/v1.4/movie?year=2023&genres.name=" + film_genre[i].value;
				request_1.open("GET", url);
				request_1.setRequestHeader("X-API-KEY","MMH4TNE-4Z04Z7E-QHD409Q-BH96H25");

				request_1.onload = function() {
					let film = JSON.parse(request_1.responseText).docs;

					for (let y = 0; y < film.length; y++) {
						console.log(film[y].name);
					}	
						film_header.innerHTML = "Пример фильма выбранного жанра";
						
						film_names.innerHTML = "";
						if (film[0].name != null)
							film_names.innerHTML = "<b>Название: </b>" + film[0].name + "<br />" ;
						
						film_length.innerHTML = "";
						if (film[0].movieLength != null)
							film_length.innerHTML = "<b>Длительность: </b>" + film[0].movieLength + "<br />" ;
						
						film_country.innerHTML = "";
						if (film[0].countries != null)
							film_country.innerHTML = "<b>Страна: </b>" + film[0].countries[0].name + "<br />" ;
						
						film_ageRating.innerHTML = "";
						if (film[0].ageRating != null)
							film_ageRating.innerHTML = "<b>Возрастной ценз: </b>" + film[0].ageRating + "+<br />" ;
						
						film_description.innerHTML ="";
						if (film[0].description != null)
							film_description.innerHTML = "<b>Описание: </b>" + film[0].description + "<br />" ;	
						
						film_rating_kp.innerHTML = "";
						if (film[0].rating.kp != null)
							film_rating_kp.innerHTML = "<b>Рейтинг КиноПоиск: </b>" + film[0].rating.kp + "<br />" ;	
						
						// задание 2.3
						
						if (film[0].poster.url != null)
							img.src = film[0].poster.url;

				}
				request_1.send();

				break;
			}				

		}
	});

	// задание 2.4
	let random_text = document.getElementById('random_text');

	let request_2 = new XMLHttpRequest();
	let url_2 = "http://numbersapi.com/random/math?json"; 
	
	request_2.open("GET", url_2); 
	
	request_2.onload = function() {
		let obj_1 = JSON.parse(request_2.responseText);
		random_text.innerHTML = "Случайная фраза: " + obj_1.text + "</br>";
	}
	request_2.send();
	
	// задание 2.5
	
	
	let form_2 = document.getElementById('form_2');
	let examples = document.getElementById('adress');
	let geo_name = document.getElementById('geo_name');
	let geo_mail = document.getElementById('geo_mail');
	let geo_map_lon = document.getElementById('geo_map_lon');
	let geo_map_lat = document.getElementById('geo_map_lat');

	
	let lon;
	let lat;
		
	form_2.addEventListener("submit", (e) => {
		e.preventDefault();
		
		let url_3 = "https://geocode-maps.yandex.ru/1.x/?apikey=7b9fb346-cd33-469e-aa8e-746121e5f942&geocode=" + examples.value.split(' ').join('+') + "&format=json";
		
		let request_3 = new XMLHttpRequest();
		request_3.open("GET", url_3); 
		
		request_3.onload = function() {
			
			let obj_2 = JSON.parse(request_3.responseText).response;
			lon = obj_2.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.slice(0, obj_2.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.indexOf(' '));
			lat = obj_2.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.slice(obj_2.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.indexOf(' ') + 1);
			
			geo_name.innerHTML = "Введенный адрес:" + obj_2.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.text + "</br>";	
			geo_map_lon.innerHTML = "Восточная долгота:" + lon + "</br>";	
			geo_map_lat.innerHTML = "Cеверная широта:" + lat + "</br>";	

		}
		request_3.send(); 
		
		
		let button_3 = document.getElementById('button_3');	
		let API= "12df7ce68ef964931fd7a15ad888df2c";	
		let temp = document.getElementById('temp');
		let feels_like = document.getElementById('feels_like');
		let icon = document.getElementById("icon");
		
		button_3.onclick = function(){
				
			let url_4 = "https://api.openweathermap.org/data/2.5/weather?lat="+ lat + "&lon=" + lon + "&appid="+ API;
			
			let request_4 = new XMLHttpRequest();
			request_4.open("GET", url_4); 
			
			request_4.onload = function() {
				
				let obj_3 = JSON.parse(request_4.responseText);
				
				temp.innerHTML = "Температура: " + (parseInt(obj_3.main.temp) - 273) + "°C";
				feels_like.innerHTML = "Ощущается как: "+ (parseInt(obj_3.main.feels_like) - 273) + "°C";

			}
			request_4.send(); 
			
		}
	})
	
	
	
}



