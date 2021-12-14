const express = require('express');
const router = express.Router();

const { getAllOwners, getOwner, createOwner, updateOwner, deleteOwner } = require('../controllers/owners');

router.route('/').post(createOwner).get(getAllOwners);
router.route('/:id').get(getOwner).delete(deleteOwner).patch(updateOwner);

module.exports = router