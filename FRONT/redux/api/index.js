import instance from "./../instance"

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

export const postPet = (endPoint, body) => {
  console.log(body)
  return instance()
    .post(endPoint, body)
    .then((res) =>{
     return res.data})
    .catch((err) => console.log(err))
}
