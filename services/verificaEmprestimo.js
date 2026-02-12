import { lerBanco, salvarBanco } from "../data/funcoesBanco.js";

export function verificaEmprestimo(dados) {
  const PATH = "./data/emprestimo.json";
  const PATHlivros = "./data/livros.json";

  const idLivro = dados.idLivro;
  const idUser = dados.idUsuario;

  const emprestimos = lerBanco(PATH);
  const estoqueLivros = lerBanco(PATHlivros);

  const LivroExiste = estoqueLivros.find((l) => l.id === idLivro);

  const jaTemEmprestimoAtivo = emprestimos.some((e) => {
    return (
      e.usuarioID === idUser && e.livroID === idLivro && e.devolvido === false
    );
  });

  if (jaTemEmprestimoAtivo) {
    return {
      ok: false,
      mensagem: "Você já pegou esse livro e ainda não devolveu",
    };
  }

  if (!LivroExiste) {
    return {
      ok: false,
      mesagem: "Livro não existe",
    };
  }

  if (LivroExiste.estoque <= 0) {
    return {
      ok: false,
      mesagem: "Estoque insuficiente",
    };
  } else {
    LivroExiste.estoque -= 1;
  }

  const emprestimoRealizado = {
    idEmprestimo: emprestimos.length + 1,
    livroID: idLivro,
    usuarioID: idUser,
    dataEmprestimo: new Date(),
    devolvido: false,
  };

  emprestimos.push(emprestimoRealizado);

  salvarBanco(PATHlivros, estoqueLivros);
  salvarBanco(PATH, emprestimos);

  return {
    ok: true,
    mesagem: "Emprestimo realizado",
  };
}
