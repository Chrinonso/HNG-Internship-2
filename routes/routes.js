const express = require('express');
const router = express.Router();
const {
    createPerson,
    getPerson,
    updatePerson,
    deletePerson
} = require ('../controllers/controllers');

router.route('/').post(createPerson);
router.route('/:user_id').get(getPerson);
router.route('/:user_id').patch(updatePerson);
router.route('/:user_id').delete(deletePerson);

module.exports = router;

