import { lerBanco, salvarBanco } from "../data/funcoesBanco.js";

export function buscarEmprestimo(dados) {
  const PATH = "./data/emprestimo.json";
  const PATHlivros = "./data/livros.json";

  const livros = lerBanco(PATHlivros);
  const emprestimo = lerBanco(PATH);

  const emprestimoExite = emprestimo.find(
    (e) => e.livroID === dados.idLivro && e.usuarioID === dados.idUsuario,
  );

  if (emprestimoExite) {
    const livro = livros.find((l) => l.id === emprestimoExite.livroID);

    livro.estoque += 1;

    livros.push(livro);

    emprestimoExite.devolvido = true;
    emprestimo.push(emprestimoExite);

    salvarBanco(PATHlivros, livros);
    salvarBanco(PATH, emprestimo);

    return {
      mensagem: "Livro devolvido",
    };
  }

  return {
    mensagem: "Emprestimo não encontrado",
  };
}
