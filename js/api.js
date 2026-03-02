const api = {
  async buscarPet() {
    try {
      const response = await fetch("http://localhost:3000/pets");
      return await response.json();
    } catch {
      alert("Erro ao buscar pets");
      throw error;
    }
  },

  async salvarPet(pet) {
    try {
      const response = await fetch("http://localhost:3000/pets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pet),
      });
      return await response.json();
    } catch {
      alert(`Erro ao salvar pet`);
      throw error;
    }
  },

  async buscarPetporId(id) {
    try {
      const response = await fetch(`http://localhost:3000/pets/${id}`);
      return await response.json();
    } catch {
      alert('Erro ao buscar pet')
      throw error
    }
  },

  async editarPet(pet){
    try{
      const response = await fetch(`http://localhost:3000/pets/${pet.id}`, {
        method: "PUT", 
        headers: {
          "content-type": "application/json"
        }, 
        body: JSON.stringify(pet)})
        return await response.json()
    }
    catch{
      alert('Erro ao editar pet')
      throw error
    }
  },

  async excluirPet(id){
    try{
      const response = await fetch(`http://localhost:3000/pets/${id}`, {
        method: "DELETE"
        })
        return await response.json()
    }
    catch{
      alert('Erro ao deletar pet')
      throw error
    }
  }

};

export default api;
