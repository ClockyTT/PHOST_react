import { useContext } from "react";
import { PostSearchContext } from "./PostSearchContext";

export const usePostSearch = () => useContext(PostSearchContext);
