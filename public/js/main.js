'use strict'
var selectValue;
var nua = navigator.userAgent;
var is_android = ((nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1) && !(nua.indexOf('Chrome') > -1));
if(is_android) {
		$('select.form-control').removeClass('form-control').css('width', '100%');
}

$('#selectPlano').on('change', function(){
    selectValue = parseInt($(this).val());
});
/*$('input[type=submit].form-control').on('click', function(e){
    e.preventDefault();
    if(typeof(selectValue) == "number"){

    }
});*/

$('form').validate({
	rules:{
		origem:{
			required: true
		},
		destino:{
			required: true
		},
		tempo:{
			required: true
		},
		selectPlano:{
			required: true
		}
	},
	messages: {
	 origem: "Digite o DDD de origem",
	 destino: "Digite o DDD de destino",
	 tempo: "Digite os minutos",
	 selectPlano: "Escola um plano"
 	},
	submitHandler: function(form)
	{
		var chamadaOrigem = parseInt($("#chamadaOrigem").val());
		var chamadaDestino = parseInt($("#chamadaDestino").val());
		var tempoChamada = parseInt($("#tempoChamada").val());
		var selectPlano = parseInt($("#selectPlano").val());
		var data = {origem: chamadaOrigem, destino: chamadaDestino, tempo: tempoChamada, plano: selectPlano};
		$.ajax({
			type: 'POST',
			contentType: 'application/json',
            url: 'http://localhost:3000/prices',
			data: JSON.stringify(data),
            success: function(data) {
				$('#tdOrigem').text(data.origin);
				$('#tdDestino').text(data.destiny);
				$('#tdStdValue').text(data.stdValue);
				$('#tdNewValue').text(data.newValue);
            }
        });
    }
});
