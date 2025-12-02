import classes from "./Content.module.css";
import Card from "./Card/Card";
import { usePostSearch } from "../../Context/PostSearch/usePostSearch";

const Content = (props) => {
  const { posts, loading } = usePostSearch();

  if (loading) return <div>Loading...</div>;

  return (
    <div className={classes.Content}>
      <div className={classes.Cards}>
        {posts.length ? (
          posts.map((post) => (
            <Card key={post.id} post={post} isAuth={props.isAuth} />
          ))
        ) : (
          <div>No cards yet</div>
        )}
        {console.log(posts)}
      </div>
    </div>
  );
};

export default Content;
