import api from "./api.js"

const ui = {
    async rendenizarPets() {
        const listaPets = document.getElementById("lista-pets")
        try{
            const pets = await api.buscarPet()
            pets.forEach(pet => {
                listaPets.innerHTML += `
                <li class="li-pet" data-id="${pet.id}">
                <div class="pet-nome">${pet.nome}</div>
                <div class="pet-especie">${pet.especie}</div>
                <div class="pet-raca">${pet.raca}</div>
                </li>
                    `

            })
        }
        catch{
            alert('Erro ao renderizar pets')
        }
    
    }
}

export default ui