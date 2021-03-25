const nomepetshop = "PETSHOP"

let pets = [
    {
        vermifugado: false,
        sintomas: ['febre', 'dor'],
        pelo: 'curto',
        agressividade: 'calmo',
        peso: 4,
        categoria: "cachorro",
        nome: "Jose"
        },
    {
        vermifugado: false,
        sintomas: ['febre', 'dor'],
        pelo: 'curto',
        agressividade: 'calmo',
        peso: 4,
        categoria: "cachorro",
        nome: "Rodolfo"
    },
    {
        vermifugado: false,
        sintomas: ['febre', 'dor'],
        pelo: 'curto',
        agressividade: 'calmo',
        peso: 4,
        categoria: "cachorro",
        nome: "Carlinhos"
    },

];
const listarPets = () => {
   /*for( i=0; i < pets.length; i++ ){
        //console.log(pets[i].nome);
        console.log(`O nome do pet é ${pets[i].nome}`);

    }*/
    for (let pet of pets){
        console.log(`Dados do pet ${pet.nome},${pet.peso},${pet.categoria}`);
    }
}

listarPets();