$('document').ready(function(){
    //изменение меню при пролистывании хедера и параллакс
    $(window).scroll(function() {
        var blockHeight=document.querySelector(".homepage");
        // координата top от начала окна для секции works 
        var wt=$("#works").offset().top;
        // высота секции works
        var wh=$("#works").outerHeight(false);
        // позиция скролла
        var st=$(this).scrollTop();
        //меняем меню при пролистывании хедера
        if ($(this).scrollTop()>blockHeight.offsetHeight) {
            $(".navbar").addClass("nav_scrolled");
        }
        else {
            $(".navbar").removeClass("nav_scrolled");
        };
        //параллакс после секции works
        if ($(this).scrollTop()>wt+wh-400) {
            $(".parallax img").css({
                "transform": "translate(0%, " + (st-wt-wh)+ "px"
            });
        }
    });
    
    //вызов плагина mixItUp для фильтрации картинок
    var containerEl = document.querySelector('.img_mixer');
    var mixer = mixitup(containerEl);
});