$(document).ready(function(){


    $("header .menu li").click(function(){
        var $menu = $(this).find("a").text();
        console.log($menu);
        $("html, body").stop().animate({scrollTop:$("article." + $menu).offset().top}, 1000);
        return false;
    });

    //어려워서 scrollTop 다시 공부하기






    var $slide = $("#slide_part ul li");

    setInterval(function(){

        var $stop = $("#slide_part").hasClass("stop");

        
        if($stop == true){
            
        }else{
            
            var $index = $("#slide_part ul li.show").index();

            $slide.removeClass("show");
    
            $index = ($index + 1) % $slide.length;  //어려우니까 다시공부하기(예전 내용 참고함)
    
            $slide.eq($index).addClass("show");

            $("#slide_part .pager li").removeClass("active");
            $("#slide_part .pager li").eq($index).addClass("active");
        }


    },4000);

    $("#slide_part .prev").click(function(){
        var $index = $("#slide_part ul li.show").index();
        $slide.removeClass("show");
        $("#slide_part .pager li").removeClass("active");

        if($index == 0){
            $slide.eq($slide.length - 1).addClass("show");
            $("#slide_part .pager li").eq($slide.length - 1).addClass("active");
        }else{
            $slide.eq($index).prev().addClass("show");
            $("#slide_part .pager li").eq($index).prev().addClass("active");
        }



        return false;
    });
    $("#slide_part .next").click(function(){
        var $index = $("#slide_part ul li.show").index();
        $slide.removeClass("show");
        $("#slide_part .pager li").removeClass("active");

        if($index == $slide.length - 1){
            $slide.eq(0).addClass("show");
            $("#slide_part .pager li").eq(0).addClass("active");
        }else{
            $slide.eq($index).next().addClass("show");
            $("#slide_part .pager li").eq($index).next().addClass("active");
        }


        return false;
    });

    $("#slide_part").hover(function(){
        $(this).addClass("stop");
    }, function(){
        $(this).removeClass("stop");
    });



    $("#slide_part .pager li").click(function(){
        var $p_index = $(this).index();
        console.log($p_index);

        $("#slide_part .pager li").removeClass("active");
        $(this).addClass("active");

        $("#slide_part ul li").removeClass("show");
        $("#slide_part ul li").eq($p_index).addClass("show");

    });


    $("#main_cont .categories .tab_btn ul li").click(function(){
        var $index = $(this).index();
        console.log($index);

        $("#main_cont .categories .tab_btn span").css("left", (100 / 3)*$index + "%");
        //animate 써보기

        $("#main_cont .categories .tab_cont .tab_box").removeClass("show");
        $("#main_cont .categories .tab_cont .tab_box").eq($index).addClass("show");
        return false;
    });


    $("#main_cont .categories .bot_bl a").click(function(){
        var $pic = $(this).closest(".box").css("background-image");
        var $txt = $(this).siblings("p").text();

        console.log($pic);
        console.log($txt);

        $(".dark_bg").addClass("show");
        $(".popup").addClass("show");

        $(".popup .img").css("background-image", $pic);
        $(".popup .title h4").text($txt);

        return false;

    });
    

    
    $(".dark_bg, .popup .close").click(function(){
        $(".dark_bg").removeClass("show");
        $(".popup").removeClass("show");
        return false;
    })










});