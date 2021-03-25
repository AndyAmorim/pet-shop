const nomepetshop = "PETSHOP"

let pets = [
    {
        vacinado: false,
        sintomas: ['febre', 'dor'],
        pelo: 'curto',
        agressividade: 'calmo',
        servicos:[],
        idade:2,
        peso: 4,
        categoria: "cachorro",
        nome: "Jose"
        },
    {
        vacinado: false,
        sintomas: ['febre', 'dor'],
        pelo: 'curto',
        idade:2,
        agressividade: 'calmo',
        servicos:[],
        peso: 4,
        categoria: "cachorro",
        nome: "Rodolfo"
    },
    {
        vacinado: false,
        sintomas: ['febre', 'dor'],
        pelo: 'curto',
        agressividade: 'calmo',
        servicos:[],
        idade:2,
        peso: 4,
        categoria: "cachorro",
        nome: "Carlinhos"
    },

];
/* const listarPets = () => {
   for( i=0; i < pets.length; i++ ){
        //console.log(pets[i].nome);
        console.log(`O nome do pet é ${pets[i].nome}`);

    }
    for (let pet of pets){
        console.log(`Dados do pet ${pet.nome},${pet.peso},${pet.categoria}`);
        }
    }
}
*/
//listarPets();
const vacinarPets = (pet) => {
    if (pet.vacinado == false)
    {
        pet.vacinado = true;
        console.log(`Foi vacinado: ${pet.nome}`);
        var totalVacinados = totalVacinados + 1;
        console.log(`Total de vac: ${totalVacinados}`);
    }
    else
        console.log ("já foi vacinado");
}

vacinarPets(pets[2]);

const campanhaVacina = () => {

    let i=0;
    for(let pet of pets) {
        if(pet.vacinado == false){
            pet.vacinado = true;
            i++;
        }
    }
    console.log(`${i} pets vacinados`);
}

let adicionarPet = () => {
    let pet = {
                nome : "pet1",
                tipo: "rato",
                idade: 2,
                peso: 1,
                tutor: "Eduardo",
                vacinado: true,
                servicos: ['banho', 'tosa']


    };
    pets.push(pet);
}
adicionarPet();

const banho = (pet) => {
    pet.servicos.push('banho');
    console.log(`${pet.nome} tá cheirosinho`);
}

banho (pets[2]);

for (let pet of pets) {
    console.log (`${pet.nome} tomou banho`);
}

const tosar = (pet) =>{
    pet.servicos.push('tosar');
    console.log(`${pet.nome} ta de unha tosada :D`);
}
tosar(pets[2]);
/*const vacinar = ()=>{
    for(i=0; i<pets.length; i++){
        if (pets[i].vacinado == false){
            pets[i].vacinado=true;
            console.log(`Pet vacinado: ${pets[i].nome}`);
        }
    }
}
vacinar();*/


// for (var i=0; i< pets.length; i++){
//     var animalzinho = this.vacinado;
//     var vacinado = animalzinho.vacinado;
//      if(vacinado){
//          var numeroDeVac=numeroDeVac+1
//      }else{}
//      console.log(`numeros de pets vacinados: ${numeroDeVac}`)
// }
