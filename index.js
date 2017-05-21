

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

$(document).ready(function(){
  $('.profession').html(`front-end.`)
})

let wordArray = ['learning.','basketball.','hiking.','space.','pixels.','technology.','Seattle.'];


let position = 1;
let randomWord = wordArray[position];
let interval = setInterval(() => {
  let randomWord = wordArray[position];


  setTimeout(() => {
    $('.profession').html(`${randomWord}`);
  }, 2000);

  if(position === wordArray.length-1){
    position = 0;
  }else{
    position++;
  }
},2000);