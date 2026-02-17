import { lerBanco } from "../data/funcoesBanco.js";

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
