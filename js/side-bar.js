
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


    $('#search-side-button').click(function(e){
        e.stopPropagation();
        var $this = $(this);
        var top = $this.offset().top;
        var buttonWidth = $(this).parent().width();

        top = top - $(document).scrollTop() + ($this.height() * 0.5);

        $('#search-bar-dialog').toggleClass("visible");
        $('#search-bar-dialog').css({"top": top, "left": buttonWidth});

        if($('#notification-dialog').hasClass('visible')){
            $('#notification-dialog').removeClass('visible');
        }
    });

    $('#notification-side-button').click(function(e){
        e.stopPropagation();
        var $this = $(this);
        var top = $this.offset().top;
        var buttonWidth = $(this).parent().width();

        top = top - $(document).scrollTop() - 
            ($('#notification-dialog').height() * 0.5) + $this.parent().height() * 0.5;

        $('#notification-dialog').toggleClass("visible");
        $('#notification-dialog').css({"top": top, "left": buttonWidth});

        if($('#search-bar-dialog').hasClass('visible')){
            $('#search-bar-dialog').removeClass('visible');
        }

    });

    $(document).click(function (e)
    {
        $(".dialog").each(function(){
            var $this = $(this);
            if(!$this.is(e.target) && $this.has(e.target).length === 0){
                if($this.hasClass("visible")){
                    $this.toggleClass("visible");
                }
            }
        });
    });
});
