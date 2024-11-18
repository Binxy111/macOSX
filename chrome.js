/*
 * @ademilter
*/

// empty link
$("a[href^='#']").on("click", function(e){
  e.preventDefault();
  //return false;
});

// tab New
$(".add").on("click", function(e){ 
  if($(".tabs li").size() < 4){ 
    $(".tabs li.active").removeClass("active");
    $(".tabs").append('<li class="active"><span>New Tab</span><a class="close" href="#">×</a></li>');
    $(".page iframe").attr("src", " ");
  }
});
  

// tab Click.active
$(".tabs li").on("click", function(e){
  
  //önce active olan class'ı silelim
  $(".tabs li.active").removeClass("active");
  $(this).addClass("active");
  
  //tab'ın sayfasını yükleyelim -ok
  $(".page iframe").attr("src", $(this).find("a").attr("href"));
  
  e.preventDefault();
});
  

// tab Close
$(".tabs li a.close").on("click", function(e){
  $(this).closest("li").remove();
  
  // eğer son tab kapatılıyorsa, yeni boş bir tab açalım
  if($(".tabs li").size() == 0){
    $(".tabs").append('<li><span>New Tab</span><a class="close" href="#">×</a></li>');
  }
  
  //bir önceki tab'a geçelim
  $(".tabs li:last-child").addClass("active");
  
  e.preventDefault();
});


// bookmark link
$(".bookmark ul li a").on("click", function(e){
  $(".page iframe").attr("src", $(this).attr("href"));
  e.preventDefault();
});
