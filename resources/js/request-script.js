/** @format */

const section = window.location.href.split("/");
console.log(`You are in  ${section[section.length - 1]}`);

$(document).ready(function(){
  clearInputs();

  $("#formRequest").submit(function(e){
    e.preventDefault()
    submitForm();
  });

  $("#formRequest").keydown(function(e){
    buttonAvailable();
  });

  // ! BUG-FIX Close Modal
  // El modal no se cierra con su boton por defecto por lo que lo hago manualmente
  $("#closeModal").click(function(e){
    $("#submitModal").hide();
  });
});

const validateData = function () {
  return $("#inputEmail").val().trim() && $("#inputMessagge").val().trim() ? true : false;
};

const buttonAvailable = function () {
  validateData()
    ? $("#buttonSubmitForm").removeClass( "disabled" ) 
    : $("#buttonSubmitForm").addClass( "disabled" ) 
};

const submitForm = function (e) {
  if (validateData()) {
    $("#submitModal").show();
    $("#buttonSubmitForm").addClass( "disabled" ) 
    clearInputs();
  }
};

const clearInputs = function () {
  $("#inputEmail").val( "" ) 
  $("#inputMessagge").val( "" ) 
};