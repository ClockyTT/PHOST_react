export const user = {
  userName: {
    type: String,
    require: true,
    unique: true
  },
  userDescription: {
    type: String,
  },
  userAvatar: {
    type: String,
  },
  userPass: {
    type: String,
    require: true
  },
};