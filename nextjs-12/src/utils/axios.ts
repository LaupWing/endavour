import axios from "axios"

const instance = axios.create({
   baseURL: `https://www.rijksmuseum.nl/api/nl/collection?key=${process.env.RIJKS_MUSEUM_APIKEY}`,
   timeout: 4000,
})

export default instance