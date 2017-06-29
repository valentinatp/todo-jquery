$(document).ready(function(){
	$("#boton").click(function(el){
		el.preventDefault();

		var ingTarea = $("#tarea").val();
		if (ingTarea == ""){
			alert("Ingresa una tarea");
		}else{
			$("#items").append("<a href='#'><input type='checkbox' name='check' value='ok' class='work' id='com'><p id='new' class='work'>" + ingTarea + " " + "</p><i class='fa fa-trash-o elim work' aria-hidden='true'></i></a>" + "<br>");
			$("#tarea").val("");
		}
	})

	$("#com").click(function(el){
		el.preventDefault();
		var ingTarea = $("#tarea").val();
		$("#itemsCom").append("<a href='#'><p id='new' class='work'>" + ingTarea + " " + "</p></a>" + "<br>");
	})

	$("#items").click(function(el){
		el.preventDefault();
		var ingTarea = $("#tarea").val();
		$(this).empty();
		

	})



});
