import axios from "axios"

const instance = axios.create({
   baseURL: `https://www.rijksmuseum.nl/api/nl/`,
   timeout: 4000,
})

export default instance