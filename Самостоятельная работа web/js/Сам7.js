document.addEventListener( "DOMContentLoaded",  function(event) {

		// задание 2
		
		let h2 = document.getElementById("01_h2"); // выбор элемента по идентификатору 01_h2
		h2.innerHTML += " 80"; // innerHTML - свойство узла, обеспечивает доступ к текстовому узлу, += добавление к имеющемуся
		
		// задание 3
		
		h2.addEventListener('mouseover', function () {
			if(!h2.classList.contains("css")) h2.classList.add("css");
			// else h2.classList.remove("css"); // elem.classList.toggle("class") - > добавить класс, если его нет, иначе удалить
		});
		
		// classList - > elem.classList.add/remove("class") -> добавление|удаление класса
		// elem.classList.contains("class") – проверка наличия класса, возвращает true/false
		
		// задание 4 
		
		let time = document.getElementById('time');
		time.style.textAlign = 'right';
		time.style.fontWeight = 'bold';


		setInterval(function(){ // позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени
			
			let date = new Date();
				
			let d = date.getDate();
			let m = date.getMonth() + 1;
			let y = date.getFullYear();
			
			let h = date.getHours();
			let min = date.getMinutes();
			
			
			if(d < 10) d = "0" + d;
			if(m < 10) m = "0" + m;
			if(min < 10) min = "0" + min;
			
			
			let dayNames = [
			  'Воскресенье',
			  'Понедельник',
			  'Вторник',
			  'Среда',
			  'Четверг',
			  'Пятница',
			  'Суббота'
			];
			let d_n = date.getDay();
			
			time.innerHTML =  dayNames[d_n] + ' ' + d + '-' + m + '-'+ y + " " + h + ':' + min;
			
		}, 500);
		

		// задание 5
		
		const input = document.querySelectorAll('input'); // Получить все DOM-элементы, подходящие под CSS-селектор
		console.log(input.length); // Узнать количество найденных элементов можно с помощью свойства length
	
		// задание 6
		
		var label = document.getElementsByTagName('label');

		for (var i = 0; i < label.length; i++) {
			label[i].style.fontWeight = 'bold';
			label[i].style.color = '#5E981A';
		}
		
		// задание 7
		
		//способ 1 - скрыть содержимое через css - > document.getElementById('curse_of_study').style.display = "none";
		
		//способ 2  - удаление элемента, применяется к родительскому элементу, с указанием элемента, который нужно удалить
		
		let parent = document.querySelector('#curse_of_study');
		let elem = document.querySelector('#curse_of_study_for_delete');

		parent.removeChild(elem);
		
		// задание 8
		
		let x = document.getElementById('mySelect'); // где добавить
		let option = document.createElement('option'); // что добавить 
		option.text = "очно-заочная"; // содержимое элемента
		x.add(option); // вставление новой опции в конец списка, так место явно не указано методом add
		
		// задание 9
		
		//Метод insertAdjacentHTML позволяет вставить строку HTML кода в любое место страницы. Код вставляется относительно опорного элемента. Можно сделать вставку перед опорным элементом (способ вставки beforeBegin), после него (способ вставки afterEnd), а также в начало (способ вставки afterBegin) или в конец (способ вставки beforeEnd) опорного элемента.
		
		let target = document.querySelector('#time');
		
		target.insertAdjacentHTML('afterEnd', '<br> <q> В то время ни один член команды не знал Go, но в течение месяца все писали на Go, и мы создавали конечные точки. Именно гибкость, простота использования и действительно крутая концепция, лежащая в основе Go (как Go обрабатывает собственный параллелизм, сборку мусора и, конечно, безопасность + скорость.) это помогло нам привлечь внимание во время сборки. Кроме того, кто может победить этого милого талисмана!</q><p  align="right"><i> Хайме Энрике Гарсия Лопес, старший менеджер по разработке программного обеспечения в Capital One</i></p>')
		
		// задание 10
		
		let birthday = document.getElementById('bday');						
		
		birthday.addEventListener('blur', function(){	
			let year = birthday.value.substring(0,4);
			
				if(year < 1980){
					alert("введена дата меньше 1980");
					birthday.value = '';
				}
		});		

		// задание 11
		
		// Создани элемента checkbox и метки для него label
		let checkbox = document.createElement('input');
		let label_for_checkbox = document.createElement('label');
		
		// Установка атрибутов
		checkbox.type = 'checkbox';
		checkbox.name = 'new_checkbox';
		checkbox.value = 'value';
		checkbox.id = 'checkbox_11';
		
		label_for_checkbox.htmlFor = 'checkbox_11';
		label_for_checkbox.appendChild(document.createTextNode(' Создать текстовое поле?'));

		// Добавление элементов в документ
		
		let new_checkbox = document.getElementById('new_checkbox');
		new_checkbox.style.border = "2px solid #5E981A";

		new_checkbox.appendChild(checkbox);
		new_checkbox.appendChild(label_for_checkbox);
		
		// Обработка событий чекбокса
		
		let checkbox_11 = document.getElementById('checkbox_11');
		let textarea = document.createElement('textarea');
		label_for_checkbox.innerHTML+= '<br>';

		checkbox_11.addEventListener('change', function() {

			if (this.checked) {
				new_checkbox.appendChild(textarea);
				textarea.placeholder = "Напишите хоть-что-то";
				textarea.rows = "5";
				textarea.cols = "59";
				textarea.textAlign = "center";
			}
			else{
				new_checkbox.removeChild(textarea);
			}
		});
		
		// задание 12
		
		let form = document.getElementById('form');

		form.addEventListener('submit', e=> {
			
			e.preventDefault(); 
			
			const name = form.querySelector('[name="name"]'), 
				surname = form.querySelector('[name="surname"]'),
				gender = form.querySelector('[name="gender"]'),
				bday = form.querySelector('[name="bday"]'),
				question1 = form.querySelector('[name="question1"]'),
				question2 = form.querySelector('[name="question2"]'),
			    question3 = form.querySelector('[name="question3"]'),
				new_checkbox = form.querySelector('[name="new_checkbox"]'),
				feedback = form.querySelector('[name="feedback"]'),
				file = form.querySelector('[name="file"]');
				 
			const data = {
					name: name.value,
					surname: surname.value,
					gender: gender.value,
					bday: bday.value,
					question1: question1.value,
					question2: question2.value,
					question3: question3.value,
					new_checkbox: new_checkbox.checked,
					feedback: feedback.value,
					file:file.checked
			};
			
			console.log(data);
			});
		
		// задание 13
		

		let deletable_elem = document.getElementsByClassName("deletable");
		
		for (let i = 0; i < deletable_elem.length; i++) {
			
			let deleteButton = document.createElement("button");
			deleteButton.textContent = "Delete";
			deletable_elem[i].appendChild(deleteButton);	

			deleteButton.addEventListener('click', function() {	
				deleteButton.parentNode.remove();			   
			});

		}
		
		// задание 14
		
		let question1 = document.getElementById("question1");
		
		question1.onkeypress = function(event){ // Событие onkeypress возникает, когда пользователь нажимает клавишу (на клавиатуре).
			event= event || window.event;
			if (event.charCode && (event.charCode < 48 || event.charCode > 57))// проверка на event.charCode - чтобы пользователь мог нажать backspace, enter, стрелочку назад...
			 return false;
			
		};
	
		question1.addEventListener('blur', function() {	
			let rules = question1.value;
			let i = 0;
			
			while (rules[i] == '0' || 
					rules[i] == '1' ||
					rules[i] == '2' ||
					rules[i] == '3' ||
					rules[i] == '4' ||
					rules[i] == '5' ||
					rules[i] == '6' ||
					rules[i] == '7' ||
					rules[i] == '8' ||
					rules[i] == '9' ){						
				i++;
			}
			
			if (i != rules.length) {
				question1.value = '';
				alert ('Неверный формат даты');
			}
		});
});

