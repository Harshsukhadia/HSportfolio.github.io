
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Student", "Developer", "Blogger", "Designer" ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
 

   
    var typed = new Typed(".typing-2", {
        strings: ["Student", "Developer", "Blogger", "Designer" ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });



    $('.nav .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });


    $('.menu-btn').click(function(){
        $('.nav .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    }); 