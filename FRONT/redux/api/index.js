import instance from "./../instance"
const API_URL = process.env.NEXT_PUBLIC_API_URL;  // Reading .env:   'http://localhost:5000/api/v1/' or 'https://backend.huellitas.ar/'

export const getPage = (endPoint, limit, offset) => {
  const params = {
    limit,
    offset
  }

  return instance()
    .get(endPoint, {
      params
    })
    .then((res) => {
      return res.data
    })
    .catch((err) => console.log(err))
}