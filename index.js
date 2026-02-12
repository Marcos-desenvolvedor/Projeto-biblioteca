import { fluxoEmprestimo } from "./fluxos/emprestimo.js";
import { fluxoMostrarLivros } from "./fluxos/mostrarDados.js";
import { verificaIdLivro } from "./services/buscarLivroId.js";
import { verificaIdUsuario } from "./services/buscarUserId.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

function menu() {
  console.log(`
        ---- MENU ----
1 - REGISTRAR EMPRESTIMOS
2 - MOSTRAR LIVROS DISPONÍVEIS
3 - SAIR DO PROGAMA
    `);

  while (true) {
    const opcao = prompt("Qual sua opção: ");

    switch (opcao) {
      case "1":
        fluxoEmprestimo();
        break;
      case "2":
        fluxoMostrarLivros();
        break;
      case "3":
        console.log("SAINDO DO PROGAMA");
        return;
      default:
        console.log("OPÇÃO INVÁLIDA");
        break;
    }
  }
}

menu();
