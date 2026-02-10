import { lerBanco } from "../data/funcoesBanco.js";

export function fluxoMostrarLivros() {
  const PATH = "./data/livros.json";
  const livros = lerBanco(PATH);

  console.log("--- LIVROS DISPONÍVEIS ---");
  console.log(livros);
}
