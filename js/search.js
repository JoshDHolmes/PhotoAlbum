// VARIABLES
// Doc Ready
$(document).ready(function(){
    $('#show').click(function(){
        $('#splash').slideUp();
        $('#back').slideDown(50);
        $('#searchBar').slideDown(50);
        $('#thumbnails').slideDown(2000);
    });
    
    $('#back').click(function(){
        $('#thumbnails').slideUp();
        $('#searchBar').slideUp();
        $('#back').slideUp();
        $('#splash').slideDown();
    });
        
    $('#searchBtn').click(function (){
        $.get('data/photoData.json', function(data){
              search(data.data);
              }, "json");
    });
    
//Login
document.getElementById('loginBtn').onclick = loginBtnPressed;

});

// FUNCTIONS
// Search
$(function(){
    $('#searchTxt').keydown(function(event){
        if(event.keyCode == 13)
            $('#searchBtn').click();
    });
});
  
function search(photoData){
    var str = $('#searchTxt').val().trim();
    var found = [];
    for  (var i = 0; i < photoData.length; i++){
        if (photoData[i].description.toLowerCase().indexOf(str.toLowerCase()) != -1)
            found.push(photoData[i]);
    }
    console.log(found);
    displayThumb(found);
}

function displayThumb(found){
    var htmlStr = "";
    for (var i = 0; i < found.length; i++){
            htmlStr += '<figure><a href ="'+found[i].url+'" data-lightbox="image-1" data-title="'+found[i].description+'"><img src="'+found[i].url+'" alt="'+found[i].description+'" height="200" width="200"></a><figcaption>'+found[i].description+'</figcaption></figure>';
    }
    var thumbs = document.getElementById('thumbnails');
    thumbs.innerHTML = htmlStr;
    console.log(thumbs);
}

//Login
function loginBtnPressed(){
	alert("This feature is not available yet :(");
}