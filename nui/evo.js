$(document).ready(function(){
	let actionContainer = $("#actionmenu");

	window.addEventListener("message",function(event){
		let item = event.data;
		switch(item.action){
			case "showMenu":
				actionContainer.fadeIn(1000);
			break;

			case "hideMenu":
				actionContainer.fadeOut(1000);
			break;
		}
    });

    document.onkeyup = function(data){
		if (data.which == 27){
            $.post("http://vrp_barbershop/barberClose",JSON.stringify({}),function(datab){});
            $('.hair').slideUp();
            $('.moustache').slideUp();
            $('.make').slideUp();
            $('.face').slideUp();
            $('.eyebrow').slideUp();
            setTimeout(() => {
                $('.introduction').slideDown();
            }, 400);
		}
	};
    $('.primeira').click(() => {
        $('.moustache').slideUp();
        $('.make').slideUp();
        $('.face').slideUp();
        $('.eyebrow').slideUp();
        $('.introduction').slideUp();
        setTimeout(() => {
            $('.hair').slideDown();
        }, 400);
        $.post("http://vrp_barbershop/chair",JSON.stringify({
            chair: "primeira"
        }));
    }); 

    $('.segunda').click(() => {
        $('.moustache').slideUp();
        $('.make').slideUp();
        $('.face').slideUp();
        $('.eyebrow').slideUp();
        $('.introduction').slideUp();
        setTimeout(() => {
            $('.hair').slideDown();
        }, 400);
        $.post("http://vrp_barbershop/chair",JSON.stringify({
            chair: "segunda"
        }));
    });  
        
    $('.terceira').click(() => {
        $('.moustache').slideUp();
        $('.make').slideUp();
        $('.face').slideUp();
        $('.eyebrow').slideUp();
        $('.introduction').slideUp();
        setTimeout(() => {
            $('.hair').slideDown();
        }, 400);
        $.post("http://vrp_barbershop/chair",JSON.stringify({
            chair: "terceira"
        }));
    }); 

    $('.left').click(() => {
        $.post("http://vrp_barbershop/handing",JSON.stringify({
            state: "left"
        }));
    });  

    $('.right').click(() => {
        $.post("http://vrp_barbershop/handing",JSON.stringify({
            state: "right"
        }));
    });  

    $('.faceCam').click(() => {
        $.post("http://vrp_barbershop/handing",JSON.stringify({
            state: "face"
        }));
    });  

    $('.hair-item').click(() => {
        $('.moustache').slideUp();
        $('.make').slideUp();
        $('.face').slideUp();
        $('.eyebrow').slideUp();
        $('.introduction').slideUp();
        setTimeout(() => {
            $('.hair').slideDown();
        }, 400);
    });

    $('.moustache-item').click(() => {
        $('.hair').slideUp();
        $('.make').slideUp();
        $('.face').slideUp();
        $('.introduction').slideUp();
        $('.eyebrow').slideUp();
        setTimeout(() => {
            $('.moustache').slideDown();
        }, 400);
    });

    $('.make-item').click(() => {
        $('.hair').slideUp();
        $('.moustache').slideUp();
        $('.face').slideUp();
        $('.eyebrow').slideUp();
        $('.introduction').slideUp();
        setTimeout(() => {
            $('.make').slideDown();
        }, 400);
    });

    $('.head-item').click(() => {
        $('.hair').slideUp();
        $('.moustache').slideUp();
        $('.make').slideUp();
        $('.eyebrow').slideUp();
        $('.introduction').slideUp();
        setTimeout(() => {
            $('.face').slideDown();
        }, 400);
    });

    $('.eyebrow-item').click(() => {
        $('.hair').slideUp();
        $('.moustache').slideUp();
        $('.make').slideUp();
        $('.introduction').slideUp();
        $('.face').slideUp();
        setTimeout(() => {
            $('.eyebrow').slideDown();
        }, 400);
    });

  
});

