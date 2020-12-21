window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
    
}

const txtElement = ['Student', 'FilmMaker', 'Graphic Designer'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik(){

	if(count == txtElement.length){
		count = 0;
	}

	currentTxt = txtElement[count];

	words = currentTxt.slice(0, ++txtIndex);
	document.querySelector('.efek-ngetik').textContent = words;

	if(words.length == currentTxt.length){
		count++;
		txtIndex = 0;
	}

	setTimeout(ngetik, 400);

})();

const sr = ScrollReveal ({
	origin: 'top',
	distance: '100px',
	duration: 1000,
	reset: true
});  
// home
sr.reveal('.textbox',{delay: 300});
sr.reveal('.efek-ngetik',{delay: 400});
sr.reveal('.btn',{delay: 500});
// about
sr.reveal('.about .heading',{delay: 300});
sr.reveal('.contentbox h3',{delay: 400});
sr.reveal('.contentbox p',{delay: 500});
sr.reveal('.contentbox img',{delay: 600});
// service
sr.reveal('.services .heading h2',{delay: 300});
sr.reveal('.services .heading p',{delay: 400});
sr.reveal('.servicebox',{delay: 500});
// work
sr.reveal('.work .heading h2',{delay: 300});
sr.reveal('.work .heading p',{delay: 400});
sr.reveal('.workbox',{delay: 500});
// testimoni
sr.reveal('.testimonial .heading h2',{delay: 300});
sr.reveal('.testimonial .heading p',{delay: 400});
sr.reveal('.testimonialbox',{delay: 500});
// contact
sr.reveal('.contact .heading h2',{delay: 300});
sr.reveal('.contact .heading p',{delay: 400});
sr.reveal('.contactinfo h3',{delay: 500});
sr.reveal('.contactinfobox',{delay: 600});
// formbox
sr.reveal('.formbox',{delay: 500});