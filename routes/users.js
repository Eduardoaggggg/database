const {Router} = require('express'); 
const {listUsers, listUserByID, addUser, updateUser, deleteUser, singInUser} = require('../controllers/users')

const router = Router();

// http://localhost:3000/api/v1/users/
router.get('/', listUsers);
router.get('/:id', listUserByID);
router.post('/', singInUser);
router.put('/', addUser);
router.patch('/:id', updateUser); 
//router.patch('/', listUsers);
router.delete('/:id', deleteUser);

module.exports = router;