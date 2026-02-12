import PromptSync from "prompt-sync";
const prompt = PromptSync();

export function lerID(valor) {
  while (true) {
    const id = prompt(valor);

    if (id === "" || isNaN(id)) {
      console.log("ID inválido, tente novamente.");
      continue; // perguntar pq do continue
    }

    if (id <= 0) {
      console.log("ID inválido, tente novamente.");
      continue; // perguntar pq do continue
    }

    return Number(id);
  }
}
