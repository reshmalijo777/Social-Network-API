const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  // addFriend,
 
}  = require ('../../controllers/user-Controller');

// /api/user
router
.route('/')
.get(getUser)
.post(createUser);

// /api/user/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// /api/user/:userId/friends/:friendId

  // router
  //       .route('/:userId/friends/:friendId')
  //       .post(addFriend)
       

module.exports = router;
