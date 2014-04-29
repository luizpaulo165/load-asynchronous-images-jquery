/*
	Desenvolvido por Luiz Paulo Valença.
	Contatos: Gmail - luizpaulo165@gmail.com | Facebook: http://www.facebook.com/luizpaulo165
	Github: http://www.github.com/luizpaulo165;
	------------------------------------//----------------------------------//------------------
	Developed by Luiz Paulo Valença.
	Contacts: Gmail - luizpaulo165@gmail.com | Facebook: http://www.facebook.com/luizpaulo165
	Github: http://www.github.com/luizpaulo165;

*/
(function($){
$.fn.loadimgLp = function(options){
  //var selector
  var $this = $(this);

  $this.each(function(){
    $this = $(this).find("img");
  });
/*=====================================================
  options
======================================================*/
  var defaults = {
    styles: "normal",  // normal, scroll
    urlLoadingImage: "images/loading.gif",
    classLoadingImage: "loading",
    delayTime:   150,
    fadeInTime: 600
  }
  options = $.extend(defaults, options);
 /*=====================================================
        Functions
      ======================================================*/

function motion(effects){
    switch(effects){
	case 'normal':
        /*=====================================================
          normal
        ======================================================*/
        //vars
        var $content = $this;
        var $contentLength = $content.length;

        $content.hide();

        i = 0;

        $content.each(function(e){
          var $self = $(this),
                $selfSrc = $self.data('src');

            var jqxhr = $.get( $selfSrc, function() {
              $self.after("<img src='"+ options.urlLoadingImage +"' class='"+ options.classLoadingImage  +"' />");
            })
              .done(function() {
                $self.attr({
                  src: $selfSrc
                });
                $self.delay(e*options.delayTime).fadeIn(options.fadeInTime).queue(function(){
                  $self.next("." + options.classLoadingImage).remove();
                });
              })
              .fail(function() {
                $self.next(options.classLoadingImage).remove();
                $self.parent().text('Sem imagem!')
              })

        });
	}
}
motion(options.styles);

}
})(jQuery);
