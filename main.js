$(document).ready(function () {
  $("#form-tarefas").submit(function (e) {
    e.preventDefault();
    var nomeTarefa = $("#adicionar-tarefas").val();
    if (nomeTarefa.trim() === "") {
      alert("Por favor, insira o nome da tarefa.");
      return;
    }
    $("#lista-tarefas").append("<li>" + nomeTarefa + "</li>");
    $("#adicionar-tarefas").val("");
  });

  $(document).on("click", "li", function () {
    $(this).toggleClass("concluido");
  });
});
