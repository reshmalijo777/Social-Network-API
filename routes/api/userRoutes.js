const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/userController.js');

// /api/user
router.route('/').get(getUser).post(createUser);

// /api/user/:userId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

///api/users/:userId/friends/:friendId

router
        .route('/:userId/friends')
        .post(addFriend)
  router
        .route('/:userId/friends/:friendId')
        .delete(deleteFriend)
module.exports = router;
