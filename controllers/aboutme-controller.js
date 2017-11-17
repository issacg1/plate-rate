aboutmeController = {};

aboutmeController.index = (req, res) => {
  res.json({
    message: 'ok',
    data: res.locals.data
  })
}

module.exports = aboutmeController;