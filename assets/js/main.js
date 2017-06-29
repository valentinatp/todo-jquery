$(document).ready(function(){
	$("#boton").click(function(el){
		el.preventDefault();

		var ingTarea = $("#tarea").val();
		if (ingTarea == ""){
			alert("Ingresa una tarea");
		}else{
			$("#items").append("<a href='#'><input type='checkbox' name='check' value='ok' class='work' id='com'><p id='new' class='work'>" + ingTarea + " " + "</p><i class='fa fa-trash-o remove work' aria-hidden='true'></i></a>" + "<br>");
			$("#tarea").val("");
		}
	})

	$(document).on('click', '.remove', function(){
        var rem = $(this).parent().remove();
        $("#itemsCom").append(rem);
    });
});
		

