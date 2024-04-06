document.addEventListener( "DOMContentLoaded",  function(event) {
	
	let form = document.getElementById("form");
	
	form.addEventListener('submit', (e)=>{
		e.preventDefault();
		
		let score = 0;
		
		let q1_a1 = document.getElementById("q1_a1");
		let q1_a2 = document.getElementById("q1_a2");
		let q1_a3 = document.getElementById("q1_a3");
		let q1_a4 = document.getElementById("q1_a4");
		let q1_a5 = document.getElementById("q1_a5");
		
		if (q1_a1.checked && !q1_a2.checked && !q1_a3.checked && !q1_a4.checked && !q1_a5.checked) {
			score ++;
		}
		
		let q2_a1 = document.getElementById("q2_a1");
		let q2_a2 = document.getElementById("q2_a2");
		let q2_a3 = document.getElementById("q2_a3");
		let q2_a4 = document.getElementById("q2_a4");
		let q2_a5 = document.getElementById("q2_a5");
		
		if (q2_a1.checked && q2_a2.checked && q2_a3.checked && q2_a4.checked && !q2_a5.checked) {
			score ++;
		}
		
		let q3_a1 = document.getElementById("q3_a1");
		let q3_a2 = document.getElementById("q3_a2");
		let q3_a3 = document.getElementById("q3_a3");
		let q3_a4 = document.getElementById("q3_a4");
		let q3_a5 = document.getElementById("q3_a5");
		
		if (!q3_a1.checked && !q3_a2.checked && !q3_a3.checked && !q3_a4.checked && !q3_a5.checked) {
			score ++;
		}
		
		 if (score === 3) {
			alert('Отлично!');
		} else if (score === 2) {
			alert('Хорошо!');
		} else {
			alert('Не справились!');
		}
	})
})