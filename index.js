document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is so cool. It lets me add text to my page programmatically");

const event = document.createEvent( 'Event' );
event.initEvent( 'DOMContentLoaded', true, true );
window.document.dispatchEvent( event );

document.querySelector("p")
console.log("This is really cool");
})
