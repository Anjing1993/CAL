
function check_name(){
	
	var b = /^[0-9]*$/;
	var oDiv=document.getElementById("fm");
	var spans =oDiv.getElementsByTagName("span");
	var name = document.getElementById("name");
	if(name.value==""){
	spans[0].innerHTML="<font color='red' >*姓名不能为空!</font>";

	}else if(b.test(name.value)==true){
	spans[0].innerHTML="<font color='red'>*姓名不能含数字</font>";

	}else{
	spans[0].innerHTML="";
	}
};
function check_stud_id(){
	var oDiv=document.getElementById("fm");
	var spans =oDiv.getElementsByTagName("span");
	var name = document.getElementById("studentId");
	if(name.value==""){
	spans[1].innerHTML="<font color='red' >*学号不能为空!</font>";

	}else{
	
 		
 			var xhr = createXmlHttpRequest();
 			xhr.onreadystatechange=function(){
 				if(xhr.readyState==4){
 					//alert(xhr.status);
 					if(xhr.status==200||xhr.status==304){
 						var data = xhr.responseText;
 						if(data=="ok"){
 						spans[1].innerHTML="<font color='green' >学号可以使用!</font>";
 						}else{
 							spans[1].innerHTML="<font color='red' >*该学号已经报名!</font>";
 						}
 					}
 				}
 			}
 			xhr.open("POST","deliver/checkStudentId.do");
 			
 			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
 			
 			var studentId = document.getElementById("studentId").value;
 			
 			xhr.send("studentId="+studentId);
 		
 	
 	function createXmlHttpRequest(){
		   var xmlHttp;
		   try{    //Firefox, Opera 8.0+, Safari
				   xmlHttp=new XMLHttpRequest();
			}catch (e){
				   try{    //Internet Explorer
						  xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
					}catch (e){
						  try{
								  xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
						  }catch (e){}  
				   }
			}
		   return xmlHttp;
		 }
	}
	
};
function check_zhuanye(){
	
	
	var oDiv=document.getElementById("fm");
	var spans =oDiv.getElementsByTagName("span");
	var zhuanye = document.getElementById("major");
	if(zhuanye.value==""){
	
	spans[4].innerHTML="<font color='red' >*专业班级不能为空!</font>";
	
	}else{
	spans[4].innerHTML="";
	}
};
function check_tel(){
	
	var b=/^1[3|4|5|8][0-9]\d{4,8}$/;
	var oDiv=document.getElementById("fm");
	var spans =oDiv.getElementsByTagName("span");
	var tel = document.getElementById("tel");
	if(tel.value==""){
	
	spans[5].innerHTML="<font color='red' >*电话号码不能为空!</font>";
	
	}else if((b.test(tel.value)==false)){
		
		spans[5].innerHTML="<font color='red'>*电话号码格式错误</font>";	
		
	}else{
	spans[5].innerHTML="";
	}
}
function check_qq(){
	var b=/^[0-9]*$/;
	var oDiv=document.getElementById("fm");
	var spans =oDiv.getElementsByTagName("span");
	var qq = document.getElementById("qq");
	if(qq.value==""){
	
	spans[6].innerHTML="<font color='red' >*QQ号码不能为空!</font>";
	
	}else if((b.test(qq.value)==false)){
		
		spans[6].innerHTML="<font color='red'>*输入非数字</font>";	
		
	}else{
	spans[6].innerHTML="";
	}
	
	}
function check_email(){
	var b = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
	var oDiv=document.getElementById("fm");
	var spans =oDiv.getElementsByTagName("span");
	var email = document.getElementById("email");
	if(email.value==""){
	
	spans[7].innerHTML="<font color='red' >*邮箱不能为空!</font>";
	
	}else if((b.test(email.value)==false)){
		
		spans[7].innerHTML="<font color='red'>*邮箱格式错误!</font>";	
		
	}else{
	spans[7].innerHTML="";
	}
	
	}
function check_select(){
	var oDiv=document.getElementById("fm");
	var spans =oDiv.getElementsByTagName("span");
	var obj = document.getElementById("department1");
	var txt = obj.options[obj.selectedIndex].text;
	if(txt=="---请选择方向---"){
    	spans[8].innerHTML="<font color='red'>*方向不可为空!</font>";	
     return false;  
  }else{
	  spans[8].innerHTML="";
     return true;  
  }	
    	
	
}
function check_texta(){
	var oDiv=document.getElementById("fm");
	var spans =oDiv.getElementsByTagName("span");
	var texta = document.getElementById("description");
	if(texta.value==""){
	
	spans[10].innerHTML="<font color='red' >*理由不可为空!</font>";
	
		
	}else{
	spans[10].innerHTML="";
	}
	
	
	}
function formchk(){
	var addform=document.getElementById("form");
	if(addform.name.value==""||addform.major.value==""||addform.tel.value==""||addform.qq.value==""||addform.email.value==""||addform.department1.value==""||addform.description.value=="")
	
	{
        alert("存在输入为空！");
		return false;
    }else{
        
    	alert("报名成功！");
        
    	}
	}















