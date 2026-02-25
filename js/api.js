
const api = {
  async buscarPet() {
    try {
      const response = await fetch('http://localhost:3000/pets')
      return await response.json()
    }
    catch {
      alert('Erro ao buscar pets')
      throw error
    }
  }
}

export default api
