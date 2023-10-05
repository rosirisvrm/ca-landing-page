const getCharacters = (render) =>{

    const results = fetch("https://rickandmortyapi.com/api/character");

    results
        .then(response => response.json())
        .then(data => {
            render(data)
        })
}

getCharacters(data => {

    const { results: characters } = data;

    if(characters.length > 0){

        characters.forEach((character, index) => {

            let characterItem = null;

            if(index === 0){
                characterItem = document.createRange().createContextualFragment(`
                    <div class="carousel-item active">
                        <img src=${character.image} class="d-block w-100" height="400" alt="...">

                        <div class="carousel-caption d-none d-md-block bg-light p-1 carousel-caption-cont">
                            <h5 class="fs-3 text-dark m-0">${character.name}</h5>
                            <p class="text-secondary m-0">${character.species}</p>
                        </div>
                    </div>
                `)

            }else{
                characterItem = document.createRange().createContextualFragment(`
                    <div class="carousel-item">
                        <img src=${character.image} class="d-block w-100" height="400" alt="...">

                        <div class="carousel-caption d-none d-md-block bg-light p-1 carousel-caption-cont">
                            <h5 class="fs-3 text-dark m-0">${character.name}</h5>
                            <p class="text-secondary m-0">${character.species}</p>
                        </div>
                    </div>
                `)
            }

            if(characterItem){
                const charactersContainer = document.querySelector(".carousel-inner");

                charactersContainer.append(characterItem);
            }        
        });
    }
})
