import instance from "./../instance"

export const getPage = (endPoint, limit, offset) => {
  const params = {}
  if (limit && offset) {
    params.limit = limit;
    params.offset = offset;
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