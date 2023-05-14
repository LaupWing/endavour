import axios from "axios"

const instance = axios.create({
   baseURL: `www.rijksmuseum.nl/api/nl/`,
   timeout: 4000,
})

export default instance