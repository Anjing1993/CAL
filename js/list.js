window.onload=function(){
	var oDiv=document.getElementById('news_type');
	var oLi=oDiv.getElementsByTagName('li');
	var oDiv1=document.getElementById('news_list');
	var oDiv3=oDiv1.getElementsByTagName('div');
	var i=0;
	for(i=0;i<oLi.length;i++){
		oLi[i].index=i;
		oLi[i].onclick=function(){
			for(i=0;i<oLi.length;i++){
				oLi[i].className="active";
				oDiv3[i].style.display="none";
				}
				this.className="active1";
				oDiv3[this.index].style.display="block";
	}	
		
	}
	
	
};