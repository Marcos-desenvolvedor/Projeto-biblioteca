import { lerBanco } from "../data/funcoesBanco.js";

export function verificaIdLivro(id) {
  const PATH = "./data/livros.json";
  const livros = lerBanco(PATH);

  const livroExiste = livros.find((l) => l.id == id);

  if (!livroExiste) {
    console.log(livros);
    return {
      ok: false,
      mesagem: "Livro não existe.",
    };
  }

  return {
    ok: true,
    mesagem: "Sucesso ao buscar livro",
    livro: livroExiste,
  };
}
