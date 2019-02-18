$(function(){
    $('#demo-wrapper ul li').on('click', function(){
        var path = $(this).data('path');
        $('#color-switcher').attr('href', path);
   });
});