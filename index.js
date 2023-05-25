// creamos el contenedor div
const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);


// obtenemos la información de la API
function fetchData(){
    return new Promise((resolve, reject) =>{
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(data => {
            resolve(data.results)
        })
        .catch(error => {
            reject(error);
        });
    });
}

//mostramos los personajes en el DOM
function characters(){
    fetchData()
    .then(data => {
        //iteramos sobre los resultados
        data.forEach((result) => { 

            const card = document.createElement('div');
            card.classList = 'card';
            
            const imgElement = document.createElement ('img');
            imgElement.id = 'imgcharacters';
            imgElement.src =result.image;

            const nameElement = document.createElement('h2');
            nameElement.id = 'namecharacters'
            nameElement.textContent = result.name;

            const statusElement = document.createElement('p');
            statusElement.id = 'statuscharacters'
            statusElement.textContent = result.status;

            const originElement = document.createElement('p');
            originElement.id = 'origincharacters'
            originElement.textContent = result.origin.name;

            // Agregar la imagen,nombre,status,origen a la card

            card.appendChild(imgElement);
            card.appendChild(nameElement);
            card.appendChild(statusElement);
            card.appendChild(originElement);

            //agregar card al contenedor
            container.appendChild(card);

        })
    })
}

characters();
