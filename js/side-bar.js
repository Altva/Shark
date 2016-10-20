
$(document).ready( function(){
    var isMenuOpen = false;
    
    function openNav(){
        isMenuOpen = true;
        $("#sideBar").css("width", "100px");
    }

    function closeNav(){
        isMenuOpen = false;
        $("#sideBar").css("width", "0px");
    }

    $(".menu").click(function (){
        $(".menu").toggleClass("change");
        if(isMenuOpen){
            closeNav();
        }
        else{
            openNav();
        }
    });

    $('#search-side-button').click(function(){
        
        var $this = $(this);
        var top = $this.offset().top;
        var buttonWidth = $(this).parent().width();

        top = top - $(document).scrollTop() + ($this.height() * 0.5);

        $('#search-bar-dialog').toggleClass("visible");
        $('#search-bar-dialog').css({"top": top, "left": buttonWidth});
    });

    $('#notification-dialog');

});
