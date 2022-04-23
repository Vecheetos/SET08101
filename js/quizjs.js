// Inspired by the tutorial followed by Code Actually, tweaked and adjusted to fit the sections of my questions
                //codeactually.com/interactivequiz.html 

document.getElementById("form1").onsubmit=function() {
       book = parseInt(document.querySelector('input[name = "book"]:checked').value);
	   time = parseInt(document.querySelector('input[name = "time"]:checked').value);
	   pet = parseInt(document.querySelector('input[name = "pet"]:checked').value);
	   acid = parseInt(document.querySelector('input[name = "acid"]:checked').value);
       lowest = parseInt(document.querySelector('input[name = "lowest"]:checked').value);
	   funny = parseInt(document.querySelector('input[name = "funny"]:checked').value);
	   flower = parseInt(document.querySelector('input[name = "flower"]:checked').value);
	   country = parseInt(document.querySelector('input[name = "country"]:checked').value);
       photo = parseInt(document.querySelector('input[name = "photo"]:checked').value);
	   kedgeree = parseInt(document.querySelector('input[name = "kedgeree"]:checked').value);
	   chilli = parseInt(document.querySelector('input[name = "chilli"]:checked').value);
	   carrot = parseInt(document.querySelector('input[name = "carrot"]:checked').value);
       war = parseInt(document.querySelector('input[name = "war"]:checked').value);
       tsar = parseInt(document.querySelector('input[name = "tsar"]:checked').value);
	   knot = parseInt(document.querySelector('input[name = "knot"]:checked').value);
    
    //Adds up the questions 
    result = book + time + pet + acid + lowest + funny + flower + country + photo + kedgeree + chilli + carrot + war + tsar + knot;
	document.getElementById("grade").innerHTML = result;

    
    //Silly messages depending on your percentage including an easter egg for when you score below four
if (result <= 3) {laugh1 = new Audio('laugh.mp3'); result2 = "Gahahaha! You do not have what it takes to answer my questions!"
                 laugh1.play();};
if (result >= 4) {result2 = "Did you even try!?"};
if (result >= 7) {result2 = "You need to spend more time exploring!"};
if (result >= 11) {result2 = "Keep up that work and you might be worthy of putting in my beard oil!"};
if (result >= 15) {result2 = "What!? You got them all!? You must be casting a spell yourself!"};
document.getElementById("grade2").innerHTML = result2;


return false; // Stops the page refreshing
} 