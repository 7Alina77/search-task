import { createContext } from "react";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
}

interface SearchContextProps {
  users: User[];
}

export const SearchContext = createContext<SearchContextProps>({ users: [] });
