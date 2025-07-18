const form = document.querySelector("#formTarefa");
const tabela = document.querySelector("#tabelaTarefas");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const tarefa = document.querySelector("#tarefa").value.trim();
  const prioridade = document.querySelector("#prioridade").value;

  if (!tarefa || !prioridade) return;

  let badgeClass = "bg-secondary";
  if (prioridade === "Alta") badgeClass = "bg-danger";
  else if (prioridade === "Média") badgeClass = "bg-warning text-dark";
  else if (prioridade === "Baixa") badgeClass = "bg-success";

  const novaLinha = document.createElement("tr");
  novaLinha.innerHTML = `
    <td>${tarefa}</td>
    <td><span class="badge ${badgeClass}">${prioridade}</span></td>
    <td><button class="btn btn-success btn-sm concluir">Concluir</button></td>
  `;

  tabela.appendChild(novaLinha);

  const botaoConcluir = novaLinha.querySelector(".concluir");
  botaoConcluir.addEventListener("click", function () {
    botaoConcluir.disabled = true;
    botaoConcluir.textContent = "✅";
  });

  form.reset();
});
