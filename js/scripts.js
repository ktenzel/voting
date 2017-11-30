$(document).ready(function() {
  var age = parseInt(prompt("How old are you????"));

  if (age >= 18) {
    $("#CANDIDATES").show();
  } else {
    $("#under-18").show();
  }
});
//
// $(document).ready(function() {
//   var age = parseInt(prompt("How old are you?"));
//
//   if (age < 18) {
//     $("#CANDIDATES").show();
//   }
// })
