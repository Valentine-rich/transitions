let accord = document.querySelector(".sector-content");
let trigger = document.querySelector(".sector-trigger");
let sector = document.querySelector(".sector");


let content = document.createElement('div');
content.className = "sector-content";
content.innerHTML="Sed suscipit viverra nisl, eget fermentum tellus viverra ac.";

//sector.append(content);

/*trigger.addEventListener('click', function acword(){
		accord.toggle();
	});*/

trigger.addEventListener('click', function addremove(){
	if(sector.contains(content)){
		content.remove();
	} else {
		sector.append(content);
	}
})	