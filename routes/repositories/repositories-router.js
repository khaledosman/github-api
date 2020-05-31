const router = require('express').Router()
const { getRepositories } = require('../../helpers/github-api-helpers')
// • A list of the most popular repositories, sorted by number of stars.
// • An option to be able to view the top 10, 50, 100 repositories should be available.
// • Given a date, the most popular repositories created from this date onwards should
// be returned.
// • A filter for the programming language would be a great addition to have.

router.get('/', async (req, res) => {
  try {
    const { language, created, limit } = req.query
    // console.log({ language, created })
    const response = await getRepositories({ sort: 'stars', order: 'desc', qualifiers: { language, created: `>=${created}` }, limit })
    res.send(response)
  } catch (error) {
    res.status(500).json({ error })
  }
})
module.exports = router
