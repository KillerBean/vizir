var nua = navigator.userAgent;
var selectValue;
var selectPlano = $("#selectPlano");

var is_android = ((nua.indexOf("Mozilla/5.0") > -1 && nua.indexOf("Android ") > -1 && nua.indexOf("AppleWebKit") > -1) && !(nua.indexOf("Chrome") > -1));
if(is_android) {
		selectPlano.removeClass("form-control").css("width", "100%");
}

selectPlano.on("change", function(){
    selectValue = parseInt($(this).val());
});

var tdPlano = $("#tdPlano");
var tdStdValue = $("#tdStdValue");
var tdNewValue = $("#tdNewValue");
var chamadaOrigem = $("#chamadaOrigem").val();
var chamadaDestino = $("#chamadaDestino").val();
var tempoChamada = $("#tempoChamada").val();
$("form").validate({
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
	submitHandler: function()
	{
		var data = {origem: parseInt(chamadaOrigem), destino: parseInt(chamadaDestino), tempo: parseInt(tempoChamada), plano: parseInt(selectValue)};
		$.ajax({
			type: "POST",
			contentType: "application/json",
            url: "http://localhost:3000/prices",
			data: JSON.stringify(data),
            success: function(data) {
				tdPlano.text(selectPlano.find(":selected").text());
				tdStdValue.text("R$ "+data.stdValue.toFixed(2) || "-");
				tdNewValue.text("R$ "+data.newValue.toFixed(2) || "-");
            }
        });
    }
});
