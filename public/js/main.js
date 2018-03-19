var nua = navigator.userAgent;
var selectValue;
var selectPlano = $("#selectPlano");

var is_android = ((nua.indexOf("Mozilla/5.0") > -1 && nua.indexOf("Android ") > -1 && nua.indexOf("AppleWebKit") > -1) && !(nua.indexOf("Chrome") > -1));
if(is_android) {
		selectPlano.removeClass("form-control").css("width", "100%");
}

selectPlano.on("change", function(){
    selectValue = parseInt($(this).val(), 10);
});

var tdPlano = $("#tdPlano");
var tdStdValue = $("#tdStdValue");
var tdNewValue = $("#tdNewValue");
var chamadaOrigem = $("#chamadaOrigem");
var chamadaDestino = $("#chamadaDestino");
var tempoChamada = $("#tempoChamada");
var urlAction = document.URL+'prices';
var data;
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
		plano:{
			required: true
		}
	},
	messages: {
	 origem: "Digite o DDD de origem",
	 destino: "Digite o DDD de destino",
	 tempo: "Digite os minutos",
	 plano: "Escola um plano"
 	},
	submitHandler: function(form)
	{
		data = {origem: parseInt(chamadaOrigem.val(), 10), destino: parseInt(chamadaDestino.val(), 10), tempo: parseInt(tempoChamada.val(), 10), plano: parseInt(selectValue, 10)};
		$.ajax({
			type: "POST",
			contentType: "application/json",
            url: urlAction,
			data: JSON.stringify(data),
            success: function(data) {
				tdPlano.text(selectPlano.find(":selected").text());
				tdStdValue.text(data.stdValue ? "R$ " + data.stdValue.toFixed(2) : "Valor incorreto!");
				tdNewValue.text(data.stdValue ? "R$ " + data.newValue.toFixed(2) : "Valor incorreto!");
            },
			error: function(data){
				tdStdValue.text("Valor incorreto!");
				tdNewValue.text("Valor incorreto!");
			}
        });
    }
});
