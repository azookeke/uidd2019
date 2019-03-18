$(document).ready(function() {

  $("#mockup").animate({
    top:"-=100px",
    opacity:1
  },1500);
  $(".mockup-description").animate({
    left:"+=100px",
    opacity:1
    },1500,function() {
      $("button").css({visibility:"visible"});
      $(".ball, button").animate({
        top:"-=50px",
        opacity:1,
      },1000);
  }).queue(function() {
    window.setInterval(function() {
      floating($("#core-relation-3"));
    },0);
    window.setTimeout(function() {
      window.setInterval(function() {
        floating2($("#core-relation-4"));
      },0);
    }, 300);
    window.setTimeout(function() {
      window.setInterval(function() {
        floating3($("#core-relation-5"));
      },0);
    }, 700);
  });
});

function floating(name) {
  name.animate({
    top:"+=30px",
    left:"+=20px"
  },2000).animate({
    top:"-=30px",
    left:"-=20px"
  },2000);
}
function floating2(name) {
  name.animate({
    top:"-=30px",
    left:"+=20px"
  },2000).animate({
    top:"+=30px",
    left:"-=20px"
  },2000);
}
function floating3(name) {
  name.animate({
    top:"+=50px",
    left:"-=30px"
  },2000).animate({
    top:"-=50px",
    left:"+=30px"
  },2000);
}
