# Mini Sistema de Biblioteca (Empréstimos)

## Descrição

Este projeto simula um sistema simples de empréstimos de livros utilizando arquivos JSON como base de dados. O objetivo é praticar lógica de programação back-end, manipulação de dados persistidos em arquivos e aplicação de regras de negócio comuns em sistemas reais.

O sistema permite cadastrar usuários, gerenciar livros disponíveis e registrar empréstimos, garantindo que as regras definidas sejam respeitadas.

---

## Objetivo do Projeto

* Praticar lógica de back-end com JavaScript.
* Trabalhar com leitura e escrita de arquivos JSON.
* Simular persistência de dados sem utilizar banco de dados.
* Aplicar regras de negócio como validação de estoque e controle de empréstimos.

---

## Estrutura do Projeto

```
/biblioteca
 ├── livros.json
 ├── usuarios.json
 ├── emprestimos.json
 ├── index.js
```

### Arquivos

* **livros.json**
  Armazena os livros disponíveis e suas quantidades em estoque.

* **usuarios.json**
  Contém os usuários cadastrados.

* **emprestimos.json**
  Registra os empréstimos realizados.

* **index.js**
  Contém a lógica do sistema.

---

## Regras de Negócio

1. Um livro só pode ser emprestado se houver quantidade disponível em estoque.
2. Ao realizar um empréstimo:

   * O estoque do livro é reduzido em 1.
   * Um registro é criado em `emprestimos.json`.
3. Um usuário não pode pegar o mesmo livro duas vezes ao mesmo tempo.
4. O sistema deve validar se:

   * O usuário existe.
   * O livro existe.
   * O estoque é maior que zero.

---

## Funcionalidades Principais

* Listar livros disponíveis.
* Verificar estoque.
* Realizar empréstimo.
* Registrar empréstimos.
* Impedir empréstimo duplicado.
* Atualizar estoque automaticamente.

---

## Possíveis Melhorias Futuras

* Implementar devolução de livros.
* Adicionar autenticação de usuário.
* Criar interface via terminal ou API REST.
* Migrar dados para um banco de dados real (PostgreSQL).

---