var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteBtn = document.getElementsByClassName("delete");
var itemLi = document.querySelectorAll("li");


function inputLength(){
	return input.value.length;
}

function createListElement(){
	  var li = document.createElement("li");
	  var newBtn = document.createElement('BUTTON');
	  newBtn.innerHTML = "Delete Me";
	  newBtn.setAttribute("class", "delete");
      li.appendChild(document.createTextNode(input.value));
      li.appendChild(newBtn);
      ul.appendChild(li);
      input.value = "";
}

function addClassToList(){

    var i = 0;
    while( i < itemLi.length){
	
		console.log(itemLi[i]);
			itemLi[i].addEventListener('click', function(){
			console.log('Li clicked');
			this.classList.toggle("done");
		})
		i++;
	}
}
addClassToList();

function addListAfterClick(){
	if(inputLength() > 0){
      createListElement();
    } 
}

function addListAfterKeypress(event){
	//console.log(event.which);
	if(inputLength() > 0  && event.keyCode === 13){
      createListElement();
    }  
}

function deleteListItem(){

	  for(var i = 0; i < itemLi.length; i++ ){
	  	 
	  	 console.log(deleteBtn);
	  	 deleteBtn[i].addEventListener('click', function(){
	  	 	console.log('Delete clicked');
	  	 	this.parentNode.remove();

	  	 }, false);
	  }
}

deleteListItem();

button.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKeypress);
//deleteBtn.addEventListener('click', deleteListElement);
//li.addEventListener('click',addClassToList);