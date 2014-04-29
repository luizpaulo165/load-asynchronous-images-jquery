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
    styles: "scroll",  // normal, scroll
    urlLoadingImage: "http://localhost/projects/prototipos/load_imgs/images/loading.gif",
    classLoadingImage: "loading",
    delayTime:   0,
    fadeInTime: 600,
    errorText: "Não foi possível carregar a imagem!"
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

        $content.each(function(e){
          var $self = $(this),
                $selfSrc = $self.data('src');

            $self.after("<img src='"+ options.urlLoadingImage +"' class='"+ options.classLoadingImage  +"' />");
            var jqxhr = $.get( $selfSrc, function() {
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
                $self.parent().text(options.errorText)
              })

        });
        break;

      case 'scroll':
           /*=====================================================
             scroll
           ======================================================*/
           //vars
           var $content = $this;
           var $contentLength = $content.length;

           $content.css({
             opacity: "0"
           });

           $content.each(function(e){
             var $self = $(this),
                   $selfSrc = $self.data('src');

               $self.after("<img src='"+ options.urlLoadingImage +"' class='"+ options.classLoadingImage  +"' />");
               var jqxhr = $.get( $selfSrc, function() {
               })
                 .done(function() {
                  
                    $(window).scroll(function(){

                      var $selfTop = $self.offset().top;


                       if($(window).scrollTop() > $selfTop ){
                         $self.attr({
                           src: $selfSrc
                         });
                         $self.delay(e*options.delayTime).animate({
                           opacity:"1"
                         },options.fadeInTime).queue(function(){
                           $self.next("." + options.classLoadingImage).remove();
                         });
                       }
                    });
                 })
                 .fail(function() {
                   $self.next(options.classLoadingImage).remove();
                   $self.parent().text(options.errorText)
                 })

           });
           break;

	}
}
motion(options.styles);

}
})(jQuery);
