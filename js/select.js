


function getObject(objectId){
	if(document.getElementById && document.getElementById(objectId)){
		return document.getElementById(objectId);
	}else if(document.all && document.all(objectId)){
		return document.all(objectId);
	}else if(document.layers && document.layers[objectId]){
		return document.layers[objectId];
	}else{
		return false;
	}
}

function showHide(e,objname){
	var obj = getObject(objname);
	if(obj.style.display == "none"){
		obj.style.display = "block";
		e.className="minus";
	}else{
		obj.style.display = "none";
		e.className="plus";
	}
}



function showchange(o){
			o.className="one";
			var j;
			var e;
			var id;
			for(var i=1;i<=2;i++){
				id='v'+i;
				j=document.getElementById(id);
				e=document.getElementById('e'+i);
				if(id!=o.id){
					j.className="two";
					e.style.display="none";
				}else{
					j.className="one";
					e.style.display="block";	
				}
			}
			
		}
