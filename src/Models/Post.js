export const schema = {
  postDate: {
    type: Date,
  },
  postId: {
    type: String,
    require: true,
  },
  postDescription: {
    type: String,
  },
  postImage: {
    type: String,
    require: true,
  },
  postCreator: {
    type: String,
    require: true,
  },
  postTags: {
    type:[String],
  },
  postLikes: {
    type:[String],
    default: [],
    require: false
  }
};