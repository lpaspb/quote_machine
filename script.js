$(document).ready(function(){
   
    var callback = 1;
    
    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=${callback}", function(data){
            
           $('.quote__par').html(JSON.stringify(data[0].content).replace(/\"/g, "").replace(/\\n/g, ""));
            $('.quote__author').html(JSON.stringify(data[0].title).replace(/\"/g, ""));
            
        $('#twitter').attr('href','https://twitter.com/intent/tweet?text=' + data[0].content + ' — ' + data[0].title);
        }, 'jsonp');
    
   
    $('.quote__new').on('click', function() {
         callback++;
         console.log(callback);
        $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=" + callback, function(data){
            
            $('.quote__par').html(JSON.stringify(data[0].content).replace(/\"/g, "").replace(/\\n/g, ""));
            $('.quote__author').html(JSON.stringify(data[0].title).replace(/\"/g, ""));
              $('#twitter').attr('href','https://twitter.com/intent/tweet?text=' + data[0].content + ' — ' + data[0].title);
        }, 'jsonp');
    });
    
     $('#twitter').on('click', function() {
         console.log($('#twitter').attr('href'));
         
         $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=" + callback, function(data){
            
            $('.quote__par').html(JSON.stringify(data[0].content).replace(/\"/g, "").replace(/\\n/g, ""));
            $('.quote__author').html(JSON.stringify(data[0].title).replace(/\"/g, ""));
            
        
                  
             $('#twitter').attr('href','https://twitter.com/intent/tweet?text=' + data[0].content + ' — ' + data[0].title);  }    
                  
                  , 'jsonp');
         
         
         
         
         
        
     
     });
    
    
                  

});