function addEvent(obj, evt, fn){
	if(obj,addEventListener){
		obj.addEventListener(evt, fn, false);
	}else if(obj.attachEvent){
		obj.attachEvent('on'+evt, fn);
	}
}

function preDef(evt){
	var e = evt || window.event;
	if(e.preventDefault)
		e.preventDefault();
	else
		e.returnValue = false;		
}
		

function getCharCode(evt){
	var e = evt || window.event;
	if(window.event){
		return window.event.keyCode;	
	}else if(typeof e.charCode == 'number'){
		return e.charCode;	
	}
}
