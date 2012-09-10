/*
	Desenvolvido por Luiz Paulo Valença.
	Contatos: Gmail - luizpaulo165@gmail.com | Facebook: http://www.facebook.com/luizpaulo165
	Github: http://www.github.com/luizpaulo165;
	------------------------------------//----------------------------------//------------------
	Developed by Luiz Paulo Valença.
	Contacts: Gmail - luizpaulo165@gmail.com | Facebook: http://www.facebook.com/luizpaulo165
	Github: http://www.github.com/luizpaulo165;

*/

$(function() {
	var $content = $("img");
	var $contentLength = $content.length;

	$("img").hide();

	i = 0;

	$content.each(function(e){
		var $self = $(this);

		$self.after("<img src='images/loading.gif' class='loading' />");

		$self.delay(e*1000).fadeIn(1000).queue(function(){
			i++;

			$self.next(".loading").remove();
		});
	});
});