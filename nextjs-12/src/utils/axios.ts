import axios from "axios"

const instance = axios.create({
   baseURL: `https://www.rijksmuseum.nl/api/nl/collection?key=FZJhvrzH`,
   timeout: 4000,
})

export default instance