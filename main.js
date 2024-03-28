$(document).ready(function () {
  // Aguarda o documento HTML estar completamente carregado
  $("#form-tarefas").submit(function (e) {
    // Intercepta o evento de envio do formulário
    e.preventDefault(); // Impede o comportamento padrão do formulário

    // Obtém o valor do campo de entrada de texto
    var nomeTarefa = $("#adicionar-tarefas").val();

    // Verifica se o campo está vazio
    if (nomeTarefa.trim() === "") {
      // Se estiver vazio, exibe um alerta
      alert("Por favor, insira o nome da tarefa.");
      return; // Retorna para evitar a execução do código abaixo
    }

    // Adiciona a nova tarefa como um item de lista à lista de tarefas
    $("#lista-tarefas").append("<li>" + nomeTarefa + "</li>");

    // Limpa o campo de entrada de texto
    $("#adicionar-tarefas").val("");
  });

  // Adiciona um evento de clique a todos os itens de lista presentes atualmente e futuramente
  $(document).on("click", "li", function () {
    // Alterna a classe "concluido" no item de lista clicado
    $(this).toggleClass("concluido");
  });
});
