interface Veiculo {
  nome: string;
  placa: string;
  entrada: Date | string;
}

(function () {
  const $ = (query: string): HTMLInputElement | null =>
    document.querySelector(query);

  function calcTempo(mil: number) {
    const min = Math.floor(mil / 60000);
    const sec = Math.floor((mil % 60000) / 1000);

    return `${min}m e ${sec}s`;
  }

  function patio() {
    function ler(): Veiculo[] {
      return localStorage.patio ? JSON.parse(localStorage.patio) : [];
    }

    function adicionar(veiculo: Veiculo, salva?: boolean) {
      const row = document.createElement("tr");

      row.innerHTML = `
            <td>${veiculo.nome}</td>
            <td>${veiculo.placa}</td>
            <td>${veiculo.entrada}</td>
            <td>
            <button class="delete" data-placa"${veiculo.placa}"></button>
            </td>
            `;

      row.querySelector(".delete")?.addEventListener("click", function () {
        remover(this.dataset.placa);
      });
      $("#patio")?.appendChild(row);

      if (salva) salvar([...ler(), veiculo]);
      console.log(veiculo.nome, veiculo.placa)
    }
    function remover(placa: string) {
      const {entrada, nome } = ler().find(
        (veiculo) => veiculo.placa === placa
      );

      const tempo = calcTempo(
        new Date().getTime() - new Date(entrada).getTime()
      );

      if (
        confirm(`O veiculo ${nome} permaneceu por ${tempo}.Desaeja confirmar?`)
      )
        return;

      salvar(ler().filter((veiculo) => veiculo.placa !== placa));
      render();
    }
    function salvar(veiculos: Veiculo[]) {
      localStorage.setItem("patio", JSON.stringify(veiculos));
    }
    function render() {
      $("#patio")!.innerHTML = "";
      const patio = ler();

      if (patio.length) {
        patio.forEach((veiculo) => adicionar(veiculo));
      }
    }

    return { ler, adicionar, remover, salvar, render };
  }
  patio().render();
  $("#cadastrar")?.addEventListener("click", () => {
    const nome = $("#nome")?.value;
    const placa = $("#placa")?.value;

    if (!nome || !placa) {
      alert("Os campos de nome e placa são obrigatorios");
      return;
    }

    patio().adicionar({ nome, placa, entrada: new Date().toISOString() }, true);
     
  });
})();
