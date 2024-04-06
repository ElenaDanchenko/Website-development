$(document).ready(function(){
	//весь код, пишем здесь, он будет выполняться только когда зарузится html страница
	

	$('main').append('<div id="list">Тут маркированный список:<br><ol><li>Первый пункт</li><li>Второй пункт</li><li>Третий пункт</li></ol></div><br>');

	$('main').prepend('<fieldset id ="select_smt">Внести изменения в<br><label><input id = "select_start" type="radio" name="my_select" value="start">Начало списка</label> <label><input id = "select_end" type="radio" name="my_select" value="end">Конец списка</label></fieldset><br><br>');
	
	$('#select_smt').append('<br><br><button id = "add">Добавить поле</button><button id = "delete">Убрать поле</button><br><br>');
	$('#add').css({"margin-right": "20px"});
	
	$('#select_smt').append('<br><label><input type = "text" id = "inputText" placeholder = "Новое поле"></label>');
	$('#inputText').css({"width": "250px", 'height': '27px', 'font-size': '16px' , 'font-weight': 'bold', 'padding': '0 6px 0','border': '1px solid rgba(0, 0, 0, 0.1)'});

	$('#select_start').css({'margin-top':'20px'});

	$('#add').on('click', function() {
		if ($('#select_start').is(':checked'))
		{	
	
			if($('#inputText').val().length == 0)
			{
				alert('введите текст в поле');
			}
			else 
				$('ol').prepend('<li>' + $('#inputText').val() + '</li>');
				
		}
		
		if ($('#select_end').is(':checked'))
		{	
	
			if($('#inputText').val().length == 0)
			{
				alert('введите текст в поле');
			}
			else 
				$('ol').append('<li>' + $('#inputText').val() + '</li>');
				
		}
	});
	
	$('#delete').on('click', function() {
		if ($('#select_start').is(':checked'))
		{	
			$('ol li:first').remove();			
		}
		if ($('#select_end').is(':checked'))
		{	
			$('ol li:last-child').remove();
		}
	});
	
	$('main').append('<div id = "text_button"><p id = "some_paragraph">Язык программирования Go, созданный инженерами из Google, стал настоящим прорывом в мире разработки программного обеспечения. Его уникальная комбинация высокой производительности, эффективности и простоты синтаксиса делает Go идеальным выбором для создания масштабируемых и надежных приложений. Благодаря встроенной поддержке параллельных вычислений и многопоточности, Go отлично подходит для разработки высоконагруженных веб-сервисов и распределенных систем. Кроме того, активное сообщество разработчиков и постоянное развитие языка делают Go одним из самых перспективных инструментов для современной разработки программного обеспечения.</p><br><button id = "copy">Копировать параграф</button></div>');
			
	$("#copy").click(function () {
		$('#some_paragraph').clone().typeIt({'speed': '1'}).appendTo('#text_button');
	});
	
	$('main').append('<br><br><img id = "img_go" src = "./img/scale_1200.png">');
	$('main').append('<br><br><button id = "img_increase">Уменьшить изображение</button><button id = "img_delete">Удалить изображение</button><br><br>');
	$('#img_increase').css({"margin-right": "20px"});
	
	let currentSize = 100;

	$("#img_increase").click(function () {
		currentSize -= 10;
		$('#img_go').css('width', currentSize + '%');		
	});
	
	$("#img_delete").click(function () {
		$('#img_go').remove();
	});
	
	$('button').css({'display': 'inline-block', 'text-decoration': 'none', 'background-color': '#865cbc', 'color': '#bfe73b', 'border': '3px solid #f4fcfe', 'border-radius': '10px', 'font-size': '14px ', 'padding': '15px 50px', 'transition': 'all 0.8s ease'});
	
	$("button").hover(function(){
		$(this).css({ 'text-decoration': 'none', 'background-color': '#c883ff', 'color': '#bfe73b', 'border-color': '#bfe73b'});
	}, function(){
		$(this).css({'display': 'inline-block', 'text-decoration': 'none', 'background-color': '#865cbc', 'color': '#bfe73b', 'border': '3px solid #f4fcfe', 'border-radius': '10px', 'font-size': '14px ', 'padding': '15px 50px', 'transition': 'all 0.8s ease'});
		} 
    );
	
	$('main').append('<input name=filter id = "company-filter" type="text" placeholder="Поиск компании или проекта...">');
	$('#company-filter').css({"width": "250px", 'height': '27px', 'font-size': '16px' , 'font-weight': 'bold', 'padding': '0 6px 0','border': '1px solid rgba(0, 0, 0, 0.1)'});	
	
	var tableMarkup = '<table> <thead><tr><th>Компания</th><th>Использование</th></tr></thead> <tbody><tr class = "company"><td>Google</td><td>Язык Go был разработан инженерами Google, и компания активно использует его в различных проектах, включая некоторые внутренние инструменты и сервисы.</td></tr>   <tr class = "company"><td>Uber</td><td>Компания Uber использует Go для разработки своих бэкенд-систем, включая сервисы, отвечающие за обработку транзакций, мониторинг и управление данными.</td></tr> <tr class = "company"><td>Dropbox</td><td>Dropbox также использует Go в своих проектах, включая разработку микросервисов и инфраструктуры облачного хранилища.</td></tr> <tr class = "company"><td>Docker</td><td>Язык Go является одним из основных языков программирования, используемых для разработки Docker, популярной платформы контейнеризации.</td></tr> <tr class = "company"><td>SoundCloud</td><td>Компания SoundCloud использует Go для написания высокопроизводительных и масштабируемых сервисов, связанных с обработкой и потоковой передачей аудиофайлов.</td></tr> <tr class = "company"><td>Kubernetes</td><td>Kubernetes - это популярная открытая платформа для автоматизации развертывания, масштабирования и управления контейнеризированными приложениями. Он написан на языке Go и активно поддерживается сообществом разработчиков.</td></tr>  <tr class = "company"><td>Prometheus</td><td>Prometheus - это система мониторинга и предупреждения, которая также написана на Go. Он предоставляет возможности сбора метрик с различных источников и анализа данных для мониторинга производительности и доступности приложений.</td></tr> <tr class = "company"><td>etcd</td><td>etcd - это распределенное хранилище ключ-значение, которое используется для хранения конфигураций и других данных в распределенных системах. Он написан на Go и широко используется в проектах с открытым исходным кодом.</td></tr>  <tr class = "company"><td>CockroachDB</td><td>CockroachDB - это распределенная база данных, которая предоставляет горизонтальное масштабирование и высокую доступность данных. Он также написан на Go и позволяет создавать надежные и масштабируемые приложения.</td></tr> </tbody></table><br>';
	$('main').append(tableMarkup);

	$('table').css({'border-collapse': 'collapse', 'border':'1px solid black'});
	$('th').css({'background-color':'#865CBC', 'color': '#BFE73B','border':'1px solid black'});
	$('td').css({'border':'1px solid black'});
	
	 $('#company-filter').on('keyup', function(){ // отпускание клавишы после нажатия
        var value = $(this).val().toLowerCase(); // нижний регистр
        $('.company').filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1) // отфильтровать по классу company скрыть текст
        });
    });
	// Функция toggle() позволяет переключать видимость элемента, то есть если элемент скрыт, функция покажет его, и наоборот. 
	// Выражение $(this) означает текущий элемент, к которому был применен метод. 
	// Метод indexOf(value) используется для определения позиции первого вхождения заданного значения value в строке. Если значение не найдено, возвращается -1.
	
	// Данный код отвечает за фильтрацию элементов на странице на основе значения, введенного в поле с id "company-filter". 
	// При каждом отпускании клавиши после нажатия, событие 'keyup' срабатывает и запускает функцию обработчик.
	// Внутри функции определяется переменная "value", которая получает значение поля ввода, приведенное к нижнему регистру с помощью метода ".toLowerCase()".
	// Затем с помощью метода ".filter()" происходит фильтрация элементов с классом "company". 
	
	// Представленное выражение проверяет, содержит ли текст текущего элемента (заданного $(this)) искомую подстроку value. Если искомая подстрока присутствует в тексте элемента, метод indexOf(value) возвращает значение больше -1, и условие $(this).text().toLowerCase().indexOf(value) > -1 становится истинным. Следовательно, функция toggle() будет применена к текущему элементу, изменяя его видимость на противоположную.

})
