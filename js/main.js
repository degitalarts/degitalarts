
$(document).ready(function(){
    
      
    
      var my_path = $.cookie('my_path');
      

        my_path += "->" + window.location.pathname;
        

      console.log('my_path : ' + $.cookie('my_path'));
      
    
      $("#my_os").text("os:" + my_os);
      $("#my_browser").text("browser:" + my_browser);
      $("#my_res").text("resolution:" + my_res);
      $("#my_ip").text("ip:" + my_ip);
	  $("#my_cookies").text("cookies:" + my_path);
    
      $(".createCookie").click(function() {
        
        appendCookie();
      });
      
      
      $("#getCookie").click(function() {
        var ck = $.cookie("my_path");
        
        console.log(JSON.stringify(ck));
      });
      
      $("#allCookie").click(function() {
        var ck = $.cookie("my_path");
        
        console.log(JSON.stringify(ck));
      });
      
      

      
      $("#list").text(JSON.stringify(my_path));
      
      console.log(JSON.stringify(my_path));

});