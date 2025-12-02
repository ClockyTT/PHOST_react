import { useState, useEffect } from "react";
import { PostSearchContext } from "./PostSearchContext";
import { useDebounce } from "../../Hooks/useDebounce";
import { getPosts } from "../../Services/postService";

export const PostSearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async (payload = "") => {
    try {
      setLoading(true);
      const data = await getPosts(payload);
      setPosts(data);
    } catch (e) {
      console.error("Error loading posts:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(debouncedQuery);
  }, [debouncedQuery]);

  const findAll = () => {
    setQuery("");
    fetchPosts("");
  };

  const findByAuthor = (authorName) => {
    setQuery("");
    fetchPosts(authorName);
  };

  return (
    <PostSearchContext.Provider
      value={{
        query,
        setQuery,
        posts,
        loading,
        findAll,
        findByAuthor,
      }}
    >
      {children}
    </PostSearchContext.Provider>
  );
};
