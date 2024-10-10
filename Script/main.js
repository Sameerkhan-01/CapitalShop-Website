window.onload = function(){
    var slider = tns({
        container: '.tiny-slider',
        items: 4,
        slideBy: 1,
        autoplay: true,
        controls: true,
        nav: false, //remove the dot navigation
        autoplayButtonOutput: false,
        touch: true,             // Enable touch support
        mouseDrag: true,         // Enable mouse drag support
        gutter: 20,              // 20px gap between slides
        loop:true,
        freezable:false,
        responsive: {
            0: {
                items:1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });    
}
