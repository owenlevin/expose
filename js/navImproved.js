var toggle = true;
$("nav ul").css("right", "100vw");
$("nav ul").css("top", "0vh");

function animateLeft(){
  $("nav ul").animate({
    right: "+=40vw"
  });
  $("body").animate({
    margin:"0"
  });
  console.log("why");
}

function animateRight(){
  $("nav ul").animate({
    right: "-=40vw"
  });
  $("body").animate({
    margin:"0 0 0 40vw"
  });


}

function nav(){
  if(!toggle){
    animateLeft();
    toggle = true;
    console.log(toggle);
  }else if(toggle){
    animateRight();
    toggle = false;
    console.log(toggle);
  }
}
function bodyClick(){
  if(!toggle){
    animateLeft();
    toggle = true;
  }
}
var toggleHam = false;
function animation(){
  if(!toggleHam){
    $(".line").addClass("clicked");
    toggleHam = true;
  }else if(toggleHam){
    $(".line").removeClass("clicked");
    toggleHam = false;
  }
}


$("#hamburger").on("click", animation);
$("#hamburger").on("click", nav);

$("body>*").not("nav").on("click", bodyClick);
