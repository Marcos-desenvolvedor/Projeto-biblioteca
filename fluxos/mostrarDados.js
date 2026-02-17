import { lerBanco } from "../data/funcoesBanco.js";
import { buscarEmprestimo } from "../services/buscarEmprestimo.js";
import { lerID } from "../prompts/lerDados.js";

export function fluxoMostrarLivros() {
  const PATH = "./data/livros.json";
  const livros = lerBanco(PATH);

  console.log("--- LIVROS DISPONÍVEIS ---");
  console.log(livros);
}

export function fluxoMostarEmprestimos() {
  const PATH = "./data/emprestimo.json";

  const emprestimos = lerBanco(PATH);

  console.log("--- EMPRESTIMOS REALIZADOS ---");
  console.log(emprestimos);
}

export function fluxoDevolverLivro() {
  const idLivro = lerID("ID livro: ");
  const idUser = lerID("ID usuario: ");

  const resultado = buscarEmprestimo({
    idUsuario: idUser,
    idLivro: idLivro,
  });

  console.log(resultado.mensagem);
}
