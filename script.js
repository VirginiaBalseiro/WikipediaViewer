$(document).ready(function() {
  $("#search").click(function(){
    var searchTerm = $("#searchTerm").val();
    var wikiLink = "https://en.wikipedia.org//w/api.php?action=opensearch&format=json&search=" + searchTerm + "&origin=*";
   $.ajax(wikiLink, {
      dataType: "json",
      type: "GET",
      success: function(data) {
        $("#output").html("");
        for (var i=0; i<data[1].length; i++){
          
         $("#output").append("<li><li> <a href=" +(data[3][i])+ ">"  + data[1][i] + "</a></li>");
         $("#output").append("<li>" + data[2][i] + "</li></li></br>");
        };
       },
     error: function (errorMessage){
       alert("There was a problem. Try again soon!");
     }
   })
  })
  
  $("#social-button").on("click", function() { 
    $("#social").toggle();
    $("#ellipsis").toggle();
  })
  
    
  
})//end of document ready
