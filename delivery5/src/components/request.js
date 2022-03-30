export const url_base = "https://my-json-server.typicode.com/Lukiam23/Pokelist-App"

const creat_url = (url_base,endpoint) =>`${url_base}${endpoint}`

export const getPokemons = () => ([
    creat_url(url_base,'/pokemons'),
    {
        method: "GET",
    }
])