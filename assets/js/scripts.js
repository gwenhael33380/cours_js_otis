'use strict'; // oblige la déclaration de variable par let ou var

let varGlobal = 'test variable';
console.log(varGlobal);

// exemple de déclaration de variable avec let et var
var variable = 'Création de variable';
console.log(variable);
var variable = 'modification de variable';
console.log(variable);

let variable2 = 'Création de variable2';
console.log(variable2);

// avec let, je ne peux plus redéclarer ma variable comme ceci
// let variable2 = 'modification de variable';
// console.log(variable);

// pour modifier sa valeur
// je dois la modifier directement sans la redéclarer

variable2 = 'modification de variable2';
console.log(variable2);

// différence entre == et ===

let zero = 0; // Number
let bolFalse = false; // Boolean

console.log(zero == bolFalse); // zero est bien égal à bolFalse
console.log(zero === bolFalse); // ne sont strictement égal car n'ont pas le même type

console.log(zero != bolFalse); // false
console.log(zero !== bolFalse); // true
let un = 1, // Number
	bolTrue = true; // Boolean

console.log(un == bolTrue); // un est bien égal à bolTrue
console.log(un === bolTrue); // ne sont strictement égal car n'ont pas le même type

// exemple de concaténation

let fiveString = '5';
let fiveNumber = 5;

console.log(fiveString + fiveNumber);

let fiveNumberResult = 10;

console.log('Le résultat est : ' + fiveNumberResult);

console.log(document.getElementsByTagName('h2'));
console.log(document.getElementById('navbar')); // ici je ne mets pas le # car on lui indique que c'est un id
console.log(document.getElementsByClassName('item'));
console.log(document.querySelector('.item:last-child')); // va sélectionner un seul élément, on pourra utiliser les sélecteurs css 
console.log(document.querySelectorAll('.item')); // va sélectionner tous les éléments trouvés dans le DOM

const navBar = document.getElementById('list_items');

console.log(navBar);

// déclaration de la fonction
function addClassRed(divTarget) {
	divTarget.classList.add('color_red');
}
navBar.addEventListener('click', function() { // on exécute les instructions de la fonction quand il y a un click sur l'élément
	addClassRed(navBar); // on exécute la fonction
});

const clickAdd = document.getElementById('click_add');
// console.log(clickAdd);
const contentAdd = document.getElementById('inner_html_add');
// console.log(contentAdd);

function addContent() {
	let content = '<div>'; // initialisation de la variable 'content'
		content += '<div>Je suis le contenu rajouté</div>'; // je concatène donc cette chaine est rajouté à la variable content
		content += '<div>Après avoir cliqué sur \'ICI\'</div>'; // idem
		content += '</div>'; // idem

	// https://developer.mozilla.org/fr/docs/Web/API/Element/innerHTML
	contentAdd.innerHTML = content;
	// let content = '<div><div>Je suis le contenu rajouté</div><div>Après avoir cliqué sur \'ICI\'</div></div>';
}

clickAdd.addEventListener('click', ()=> {
	addContent();
});

const clickAddImg = document.getElementById('click_add_img');
// console.log(clickAdd);
const contentAddImg = document.getElementById('inner_html_add_img');
// console.log(contentAdd);

function addContentImg(imgLink = 'assets/img/default.jpg') {
	let content = '<img src="' + imgLink + '" alt="">'; // idem'

	contentAddImg.innerHTML = content;
	// let content = '<div><div>Je suis le contenu rajouté</div><div>Après avoir cliqué sur \'ICI\'</div></div>';
}

clickAddImg.addEventListener('click', function() { 
	addContentImg('assets/img/star_daft.jpg');
});
clickAddImg.addEventListener('mouseenter', function() { 
	addClassRed(clickAddImg);
});

///////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// LES CONDITIONS ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////


// condition avec if
let yearOld = 5;
// ici la condition n'est pas respéctée, l'instruction n'est donc pas exécutée et il n'y pas le else, donc il ne se passe rien
if(yearOld >= 18) { // ici la condition n'est pas respéctée, l'instruction n'est donc pas exécutée et il n'y pas le else
	console.log('Je suis majeur'); 
}

// autre écriture sans les accolades, attention ne fonctionne que s'il n'y a qu'une seule instruction à exécuter

// condition 		// instruction
if(yearOld >= 18) console.log('Je suis majeur'); 

// s'execute car n'appartient pas à la condition
console.log('Je suis mineur');

// condition avec if ... else
if(yearOld >= 18) {
	console.log('Je suis majeur');
}
else {
	console.log('Je suis mineur');
}

// on peut enlever les accolades mais une seule instruction sera executée
if(yearOld >= 18) console.log('Je suis majeur');
else console.log('Je suis mineur');

// condition avec if ... else if ... else
let yearOld2 = 'test';
if(yearOld2 >= 18 && yearOld2 <= 77) {
	console.log('Je suis majeur');
}
else if(yearOld2 > 77) {
	console.log('Je suis un vieux croûton');
}
else if(yearOld2 < 18) {
	console.log('Je suis mineur');
}
else {
	console.log('Error');
}

///////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// Exercice pair/impair //////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

const oddEvenSubmit = document.getElementById('odd_even_submit'); // bouton tester
const oddEvenInput = document.getElementById('odd_even'); // input où je vais renseigner la data
const oddEvenMsg = document.getElementById('odd_even_msg'); // endroit où je vais envoyer le message

function oddOrEven(numberValue) {
	let msg;
	if(!isNaN(numberValue) && numberValue >= 1 && numberValue <= 100) {
		if(numberValue % 2 == 1) {
			msg = `${numberValue} est un nombre impair`;
		}
		else {
			msg = numberValue + ' est un nombre pair';
		}
		////////////////////////////////////////////
		/////////// opérateur ternaire /////////////
		////////////////////////////////////////////

		//variable = condition ? si true (if) : si false (else);
		// msg = numberValue % 2 == 1 ? `${numberValue} est un nombre impair` : numberValue + ' est un nombre pair';
	}
	else {
		msg = 'Le chiffre doit être un nombre compris entre 1 et 100';
	}
	oddEvenMsg.innerHTML = msg;
	// alert(msg);
}
// btn submit // attache event click
oddEvenSubmit.addEventListener('click', ()=> {
	// quand on clique, je récupère la valeur de l'input et je la stocke dans la variable inputValue
	let inputValue = oddEvenInput.value;
	// tu executes la fonction avec la valeur attendue
	oddOrEven(inputValue);
});

///////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// Les boucles ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////

// la boucle FOR
for(var i = 1; i <= 10; i++) { //++ = +1; += 3
	console.log('Tour de boucle n° ' + i);
}

const resultLoop = document.getElementById('count_loop');
for(var i = 1; i <= 10; i++) { //++ = +1; += 3
	let div = document.createElement('div');
	let divInner = resultLoop.appendChild(div);
	divInner.append('Tour de boucle n° ' + i);
}

///////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// Exercice pair/impair LOOP /////////////////////////
///////////////////////////////////////////////////////////////////////////////////

// je crée les constantes pour chaque élément
const oddEvenSubmitLoop = document.querySelectorAll('.odd_even_submit_loop');
console.log(oddEvenSubmitLoop);
const oddEvenInputLoop = document.getElementById('odd_even_loop');
const oddEvenMsgLoop = document.getElementById('odd_even_msg_loop');

// la boucle forEach sert à parcourir les éléments quand il y en a plusieurs
oddEvenSubmitLoop.forEach(function(elt) { 
	elt.addEventListener('click', ()=> {
		console.log(elt);
		let inputValue = oddEvenInputLoop.value; // je récupère la valeur de l'input au click (ligne 135 html)
		let dataChoice = elt.dataset.choice; // je récupère la valeur du data-choice au click (ligne 136 (even)  ou 137 (odd))
		// console.log(dataChoice);
		oddOrEvenLoop(inputValue,dataChoice);
	});
});

function oddOrEvenLoop(numberValue, oddEven) {
	// initialisation de la variable msg
	let msg = '';
	// stockage du résultat du modulo selon la valeur de OddEven
	// si oddEven == odd, je veux les chiffres impairs donc le résultat modulo == 1
	// si oddEven == even, je veux les chiffres pairs donc le résultat modulo == 0

	// opérateur ternaire
	// var resultOperateurTernaire = condition ? (if)resultTrue : (else)resultFalse;
	let result = oddEven == 'odd' ? 1 : 0;
	// stockage du chiffre max pour stopper la boucle
	let max = numberValue;

	// je vérifie que max est bien un chiffre et compris entre 1 et 100
	if(!isNaN(max) && max >= 1 && max <= 100) {
		// si ok, je lance ma boucle
		for(let i = 1; i <= max; i++) {
			// je commence à 1 et fini à max
			// pour chaque valeur de i je verifie s'il correspond à ce que j'ai demandé (odd || even)
			// on peut concaténer avec ${var} si la chaine de caractères commence et finit par des côtes inversées (AltGr 7)
			if(i % 2 == result) msg += `<div class="${oddEven}">${i}</div>`;
			// sinon on peut faire de la concaténation classique
			if(i % 2 == result) msg += '<div class="' + oddEven + '">' + i + '</div>';
		}
	}
	// si false message erreur
	else {
		msg += 'Le chiffre doit être un nombre compris entre 1 et 100';
	}
	oddEvenMsgLoop.innerHTML = msg;
}


let numberValue = 50; // le max qui va arrêter ma boucle
let oddEven = 'odd'; // odd (impair) || even (pair)

// variable      // condition       // true//false
let resultModulo = oddEven == 'odd' ? 1 : 0; // opérateur ternaire

if(!isNaN(numberValue) && numberValue >= 1 && numberValue <= 100) {
	for(var i = 1; i <= numberValue; i++) {
		if(i % 2 == resultModulo) // resultModulo sera égal à 0 si oddEven == even, et 1 si oddEven == odd
			console.log(i);
	}
}
else {
	console.log('Oops ! relit les consignes !');
}

const inputAC = document.getElementById('autocomplete');
const valueAC = document.getElementById('value_display');

inputAC.addEventListener('input', function() {
	let inputValue = inputAC.value;
	if(inputValue.length > 4) {
		valueAC.innerHTML = inputValue;
	}
	else {
		valueAC.innerHTML = '';
	}
})

const selectImg = document.getElementById('select_img');
const displayImg = document.getElementById('img_display');

selectImg.addEventListener('change', function() {
	let selectValue = selectImg.value;
	if(selectValue == 1) {
		displayImg.innerHTML = '<img src="assets/img/star_wars.png" alt="">';
	}
	else if(selectValue == 2) {
		displayImg.innerHTML = '<img src="assets/img/bttf.png" alt="">';
	}
	else {
		displayImg.innerHTML = '';
	}
});

////////////////////////
////// boucle WHILE ////
////////////////////////

let elt = 0;
let tab = ['bleu','blanc','rouge'];
console.log(tab[0]);
console.log(tab[1]);
console.log(tab[2]);
console.log(tab.length);
const contentWhile = document.getElementById('content_while');
let contentDivWhile = "";
console.log(tab.length);
while(elt < tab.length ){
	contentDivWhile += '<div>' + tab[elt] + '</div>';
	elt++;
}
contentWhile.innerHTML = contentDivWhile;

// La boucle for ... of est conçue spécialement pour parcourir les tableaux
for(var eltTab of tab) {
	console.log(eltTab);
}

///////////////////////////////
////// boucle DO ... WHILE ////
///////////////////////////////

let max = 11;
do {
	console.log(max);
	max++
}
while(max <= 10);