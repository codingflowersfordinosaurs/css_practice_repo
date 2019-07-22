// /**
//  * modalEffects.js v1.0.0
//  * http://www.codrops.com
//  *
//  * Licensed under the MIT license.
//  * http://www.opensource.org/licenses/mit-license.php
//  * 
//  * Copyright 2013, Codrops
//  * http://www.codrops.com
//  */
// var ModalEffects = (function() {

// 	function init() {

// 		var overlay = document.querySelector( '.md-overlay' );

// 		[].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

// 			var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
// 				close = modal.querySelector( '.md-close' );

// 			function removeModal( hasPerspective ) {
// 				classie.remove( modal, 'md-show' );

// 				if( hasPerspective ) {
// 					classie.remove( document.documentElement, 'md-perspective' );
// 				}
// 			}

// 			function removeModalHandler() {
// 				removeModal( classie.has( el, 'md-setperspective' ) ); 
// 			}

// 			el.addEventListener( 'click', function( ev ) {
// 				classie.add( modal, 'md-show' );
// 				overlay.removeEventListener( 'click', removeModalHandler );
// 				overlay.addEventListener( 'click', removeModalHandler );

// 				if( classie.has( el, 'md-setperspective' ) ) {
// 					setTimeout( function() {
// 						classie.add( document.documentElement, 'md-perspective' );
// 					}, 25 );
// 				}
// 			});

// 			close.addEventListener( 'click', function( ev ) {
// 				ev.stopPropagation();
// 				removeModalHandler();
// 			});

// 		} );

// 	}

// 	init();

// })();


// let modal = document.querySelector(".modal");
// let trigger = document.querySelector(".trigger");
// let closeButton = document.querySelector(".close-button");

// function toggleModal() {
//   modal.classList.toggle("show-modal");
// }

// function windowOnClick(event) {
//   if (event.target === modal) {
//     toggleModal();
//   }
// }

// trigger.addEventListener('click', toggleModal);
// closeButton.addEventListener('click', toggleModal);
// window.addEventListener('click', windowOnClick);

// var modal = document.querySelector(".modal");
// var trigger = document.querySelector(".trigger");
// var closeButton = document.querySelector(".close-button");

// function toggleModal() {
//     modal.classList.toggle("show-modal");
// }

// function windowOnClick(event) {
//     if (event.target === modal) {
//         toggleModal();
//     }
// }


var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


