/* La funcionalidad de tu proyecto */
/* funcition navbar*/ 
$( document ).ready(function(){
  $(".button-collapse").sideNav();    
})

/* Section fourth*/

window.addEventListener('load', function(){
  var firstInput = document.querySelector('.track-1');
  var secondInput = document.querySelector('.track-2');
  var mediaquery = window.matchMedia("(min-width: 1024px)");
  
  function handleOrientationChange(mediaquery) {
      if (mediaquery.matches) {
        firstInput.setAttribute('placeholder', 'Ingrese su punto de partida');
        secondInput.setAttribute('placeholder', 'Ingrese su destino');
      } else {
        firstInput.setAttribute('placeholder', 'Av.Benavides, 1880, ciudad de Lima');
        secondInput.setAttribute('placeholder', 'La victoria, ruta norte, ciudad de Lima');
      }
    }
    mediaquery.addListener(handleOrientationChange);
});

/* Function Modal */ 
$(document).ready(function(){
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});

$('.modal').modal({
  dismissible: true, // Modal can be dismissed by clicking outside of the modal
  opacity: .5, // Opacity of modal background
  inDuration: 300, // Transition in duration
  outDuration: 200, // Transition out duration
  startingTop: '4%', // Starting top style attribute
  endingTop: '10%', // Ending top style attribute
  ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
    alert("Ready");
    console.log(modal, trigger);
  },
  complete: function() { alert('Closed'); } // Callback for Modal close
}
);