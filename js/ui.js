import api from "./api.js"

const ui = {

  async preencherFormulario(petId) {
    const pensamento = await api.buscarPetporId(petId)
    document.getElementById("pet-id").value = pensamento.id
    document.getElementById("pet-nome").value = pensamento.nome
    document.getElementById("pet-especie").value = pensamento.especie
    document.getElementById("pet-raca").value = pensamento.raca
  },
  
  limparFormulario() {
    document.getElementById("pet-form").reset();
  },
  

  async renderizarPets() {
    const listaPets = document.getElementById("lista-pets");
    

    try {
      const pets = await api.buscarPet();
        pets.forEach(ui.adicionarPetNaLista);
    } catch {
      
      alert("Erro ao obter pets. Tente novamente mais tarde.");
    }
  },

  adicionarPetNaLista(pet) {
    const listaPets = document.getElementById("lista-pets");
    const li = document.createElement("li");
    li.setAttribute("data-id", pet.id);
    li.classList.add("li-pet");

    const nomePet = document.createElement("div");
    nomePet.textContent = `Nome: ${pet.nome}`;
    nomePet.classList.add("pet-nome");

    const especiePet = document.createElement("div");
    especiePet.textContent = `Especie: ${pet.especie}`;
    especiePet.classList.add("pet-especie");

    const racaPet = document.createElement("div");
    racaPet.textContent = `Raça: ${pet.raca}`;
    racaPet.classList.add("pet-raca");



    const botaoEditar = document.createElement("button")
    botaoEditar.classList.add("botao-editar")
    botaoEditar.onclick = () => ui.preencherFormulario(pet.id)

    const iconeEditar = document.createElement("img")
    iconeEditar.src = "assets/imagens/icone-editar.png"
    iconeEditar.alt = "Editar"
    botaoEditar.appendChild(iconeEditar)

    const icones = document.createElement("div")
    icones.classList.add("icones")
    icones.appendChild(botaoEditar)


    li.appendChild(nomePet);
    li.appendChild(especiePet);
    li.appendChild(racaPet);
    li.appendChild(icones);
    listaPets.appendChild(li);
  },
};

export default ui;
