const getHouses = (req, res, next) => {
  const db = req.app.get('db');

  db.getHouses()
  .then(houses => res.status(200).send(houses))
  .catch(err => res.status(500).send({getHousesError: err}))
};
const createHouse = (req, res, next) => {
  const { name, adress, city, state, zip } = req.body;
  const db = req.app.get('db');

  db.createHouse([name, adress, city, state, zip])
    .then(house => res.status(200).send(house))
    .catch(err => res.status(500).send({ createHouseError: 'Bad Request' }));
};


module.exports = {
  getHouses,
  createHouse
}