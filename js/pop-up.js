jQuery(document).ready(function($){
        // When site loaded, load the Popupbox First
         unloadPopupBox();

     $('#purchase').click( function() {            
            loadPopupBox();
        });

    
        $('#popupBoxClose').click( function() {            
            unloadPopupBox();
        });
        
        $('#container').click( function() {
            unloadPopupBox();
        });

        function unloadPopupBox() {    // TO Unload the Popupbox
            $('#popup_box').fadeOut("fast"); 
        }    
        
        function loadPopupBox() {    // To Load the Popupbox
            $('#popup_box').css({
            	"opacity":"1"
            });
            $('#popup_box').fadeIn("slow");
         
        }        
    });