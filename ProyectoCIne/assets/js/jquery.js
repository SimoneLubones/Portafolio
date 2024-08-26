$("btnEnviar").on("click", () => {
  console.log("hola");
});

$(document).ready(function () {
  $("#formulario").mouseover(function () {
    $("#formulario").css("background-color", "rgb(69, 69, 94)");
  });
  $("#formulario").mouseout(function () {
    $("#formulario").css("background-color", "rgb(101, 162, 226)");
  });

  // $("#btnEnviar").click(function () {
  //   alert("Formulario enviado correctamente");
  // });
});
