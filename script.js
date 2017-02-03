$(document).ready(function(){
   var letterArr = [];
    var newStr = [];
    var callback = 1;
    
    $.getJSON("https://cors.now.sh/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=${callback}", function(data){
        
         //var text = $('.quote__par').html(JSON.stringify(data[0].content).replace(/\"/g, "").replace(/\\n/g, ""));
        var text = JSON.stringify(data[0].content).replace(/\"/g, "").replace(/\\n/g, "");
        
        letterArr = text.split("");
        newStr = letterArr.join("");
        console.log(letterArr.length);
        if (letterArr.length > 90) {
            newStr = newStr.slice(0, 105) + "..."
            $('.quote__par').html(newStr);
        } else {
            $('.quote__par').html(JSON.stringify(data[0].content).replace(/\"/g, "").replace(/\\n/g, ""));
}
        
        console.log(letterArr);
        
         $('.quote__author').html(JSON.stringify(data[0].title).replace(/\"/g, ""));
            
        $('#twitter').attr('href','https://twitter.com/intent/tweet?text=' + data[0].content + ' — ' + data[0].title);
        }, 'jsonp');
    
   
    $('.quote__new').on('click', function() {
         callback++;
         console.log(callback);
         
        $.getJSON("https://cors.now.sh/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=" + callback, function(data){
            
             var text = JSON.stringify(data[0].content).replace(/\"/g, "").replace(/\\n/g, "");
       
        letterArr = text.split("");
        newStr = letterArr.join("");
        console.log(letterArr.length);
        if (letterArr.length >= 90) {
            newStr = newStr.slice(0, 105) + "..."
            $('.quote__par').html(newStr);
        } else {
            $('.quote__par').html(JSON.stringify(data[0].content).replace(/\"/g, "").replace(/\\n/g, ""));
}
        
        console.log(letterArr);
            $('.quote__author').html(JSON.stringify(data[0].title).replace(/\"/g, ""));
              $('#twitter').attr('href','https://twitter.com/intent/tweet?text=' + data[0].content + ' — ' + data[0].title);
        }, 'jsonp')
    });
    
     $('#twitter').on('click', function() {
         console.log($('#twitter').attr('href'));
         
         $.getJSON("https://cors.now.sh/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=" + callback, function(data){
            
             var text = JSON.stringify(data[0].content).replace(/\"/g, "").replace(/\\n/g, "");
        
        letterArr = text.split("");
        newStr = letterArr.join("");
        console.log(letterArr.length);
        if (letterArr.length > 90) {
            newStr = newStr.slice(0, 105) + "..."
            $('.quote__par').html(newStr);
        } else {
            $('.quote__par').html(JSON.stringify(data[0].content).replace(/\"/g, "").replace(/\\n/g, ""));
}
        
        console.log(letterArr);
            $('.quote__author').html(JSON.stringify(data[0].title).replace(/\"/g, ""));
            
        
                  
             $('#twitter').attr('href','https://twitter.com/intent/tweet?text=' + data[0].content + ' — ' + data[0].title);  }    
                  
                  , 'jsonp');
         
         
         
         
         
        
     
     });
    
    
                  

});