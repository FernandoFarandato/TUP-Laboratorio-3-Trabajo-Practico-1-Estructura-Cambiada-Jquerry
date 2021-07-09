/** @format */

// Todo codigo a ejecutar se declara dentro de esta funcion.
$(document).ready(function () {
  //Selectors -------------------------
  //$("identificador/clase/etc").accion()
  $("*").hide(); // Selecciona todos los elemtnos del docuemtno
  $("p").hide(); // para elemtnos HTML se pone el nombre
  $("#test").hide(); // para id se pone el # seguido del nombre del id
  $(".test").hide(); // para clss se pone el . seguido del nombre de la clase
  $("[href]").hide(); // para elementos con cierta propiedad
  //demas boludeces
  $("tr:odd").hide(); // elementos de tabla impares

  //Eventos -------------------------

  //Evento click
  $("p").click(function () {
    $(this).hide();
  });

  //Cuando el mouse entra al elemento
  $("p").mouseenter(function () {
    $(this).hide();
  });

  // Cuando se presiona una tecla
  $("input").keypress(function () {
    $(this).hide();
  });

  //Hide & Show -------------------------
  //Esconder
  $("#test").hide();
  $("#test").hide("slow"); //con velocidad de duracion del efecto
  //Mostrar
  $("#test").show();
  $("#test").show("slow"); //con velocidad de duracion del efecto
  // Toggle / Intercalar
  $("#test").toggle();
  $("#test").toggle("slow"); //con velocidad de duracion del efecto

  //Animation -------------------------
  $("div").animate({ left: "250px" });
  $("div").animate({ height: "500px" });
  //Setea propiedades CSS class
  $("div").animate({
    opacity: "0.4",
    height: "500px",
    width: "500px",
  });
  //Setea propiedades CSS class + velocidad de cambio
  $("div").animate({ fontSize: "100px" }, "slow");
  //Detiene las animaciones
  $("div").stop();

  //Get -------------------------
  //Obtiene el texto de un componente
  $("div").text();
  //Obtiene el html interno del componente
  $("div").html();
  //Obtiene el valor de algun tipo de input
  $("input").val();
  //Obtiene valor de algun atributo de algun elemento
  $("a").attr("href");

  //Put -------------------------
  //Setea el texto de un componente
  $("div").text("Hello World");
  //Setea el html interno del componente
  $("div").html();
  //Setea el valor de algun tipo de input
  $("input").val("123");
  //Setea valor de algun atributo de algun elemento
  $("img").attr("src", "myimage.jpg");

  //Add -------------------------
  //Agreagar anexar elementos
  $("p").append("YES!"); // Lo agrega al final de un elemento p
  $("p").prepend("YES!"); // Lo agrega al inicio de un elemento p

  //Remove -------------------------

  $("div").remove(); //Borra un elemento
  $("div").empty(); // Borra los hijos del elemento
  $("div").remove(".test, .demo"); // Borra en base a parametros: clase test y dema

  //Clases -------------------------
  $("p").addClass("important test"); //Agrefa una clase llamada important y otra test
  $("p").removeClass("important "); //Elimina una clase llamada important
  //Intercalado de agregar y borrar una clase
  $("p").click(function () {
    $(this).toggleClass("important");
  });

  //CSS -------------------------
  $("p").css("backgorund-color", "pink"); // Setea parametros de css
  $("p").css("border", "5px dotted red"); // Setea parametros de css
  //Sin un segundo paramentro devuelve el valor del mismo
  $("p").css("backgorund-color"); // Devuelve el color de fondo

  //Dimensiones -------------------------
  $("div").height(500).width(500); // Setea dimensiones
  //Sin un segundo paramentro devuelve el valor del mismo
  $("div").height(); // Devuelve la alutra
  $("div").innerHeight(); // Incluye padding pero no border o margin - Normal par tamano del elemento y punto
  $("div").outerHeight(); // Incluye padding y borders
  $("div").outerHeight(true); // Incluye padding , borders y margin - Normal para el tamano mas los margenes

  //AJAX -------------------------
  $("#div1").load("demo_test.txt"); //Carga el contenido de ese archivo dentro de div1
  //Hace un get a un server e imprime los datos que recive y el codigo de status
  $("button").click(function () {
    $.get("demo_test.asp", function (data, status) {
      alert("Data: " + data + "\nStatus: " + status);
    });
  });
});
