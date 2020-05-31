const axios = require('axios')
// const qs = require('qs')
function getRepositories ({ sort = 'stars', order = 'desc', qualifiers, per_page = 10 } = { sort: 'starts', order: 'desc', per_page: 10, qualifiers: {} }) {
  console.log({ qualifiers })
  const q = Object.keys(qualifiers)
    .reduce((accum, qualifier, currIndex, array) => {
      const qualifierQuery = `${qualifier}:${qualifiers[qualifier]}`
      let result = accum.concat(qualifierQuery)
      if (currIndex < array.length - 1) {
        result += '+'
      }
      return result
    }, '')
  // const query = qs.stringify({
  //   q,
  //   sort,
  //   order
  // })

  // const query = `${q}&sort=${sort}&order=${order}&per_page=${limit}`
  let query = { q, sort, order, per_page }
  query = Object.keys(query)
    .reduce((accum, key, currIndex, array) => {
      let result = accum.concat(`${key}=${query[key]}`)
      if (currIndex < array.length - 1) {
        result += '&'
      }
      return result
    }, '')

  console.log({ query })
  return axios.get(`https://api.github.com/search/repositories?${query}`)
    .then(res => res.data)
}

module.exports = { getRepositories }
