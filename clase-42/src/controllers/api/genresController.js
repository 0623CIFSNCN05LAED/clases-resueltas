const genreService = require("../../services/genre-service");

const pageSize = 5

module.exports = {
  list:async (req, res) => {
    const page = Number(req.query.page) || 1;
    const offset = (page - 1) * pageSize;
    console.log('offset', offset);
    const {count, rows} = await genreService.getAllGenresAndCount({
        pageSize, offset
    })
    res.json({
        meta: {
            status: 200,
            total: count,
            url: req.originalUrl, 
            nextPage: `${req.originalUrl.split('?')[0]}?page=${page+1}`
        }, 
        data: rows
    })
  },
};
