var fn = {
	init: function(){
		$.ajax({
			data: {nombre:'Carlos'},
			method: 'POST',
			url: 'http://servidoriis.laitaliana.com.mx/OV/webservices/reparto.asmx/hola',
			success: function(msg){
				alert(msg);
			},
			error: function(msg){
				alert('http://servidoriis.laitaliana.com.mx/OV/webservices/reparto.asmx/hola');
				alert('Error');
			}
		});
	}
};
$(fn.init);