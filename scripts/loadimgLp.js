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
    delay:   1000,
    fadeInTime: 1000
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
        var $content = $("img");
        var $contentLength = $content.length;

        $("img").hide();

        i = 0;

        $content.each(function(e){
          var $self = $(this);

          $self.after("<img src='"+ options.urlLoadingImage +"' class='"+ options.classLoadingImage  +"' />");

          $self.delay(e*options.delay).fadeIn(options.fadeInTime).queue(function(){
            i++;

            $self.next(".loading").remove();
          });
        });
	}
}
motion(options.styles);

}
})(jQuery);
