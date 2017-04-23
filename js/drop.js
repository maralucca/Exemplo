$('#selecao').change(function(){
var parametro = $(this).find(':selected').val()

 location.href = 'http://osbons.esy.es/Calendario/' + parametro + '.html';

});
