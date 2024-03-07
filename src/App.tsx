import { useCallback, useState } from "react";
import { SearchForm } from "./components/SearchFrom/SearchForm";
import { SearchContext } from "./components/SearchResults/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";
import { NewApi } from "./Api/Api";

export default function App() {

  interface User {
    id: number,
    first_name: string;
    last_name: string;
    avatar: string;
    email: string,
  }

  const [users, setUsers] = useState<User[]>([]);

  const handleSearchUsers = useCallback((users: User[], search: string): User[] => {
    const toLowerCaseSearch = search.toLowerCase().trim();
    const data = users.data.filter((user: User) => {
      const commonFirstName = user.first_name.toLowerCase().trim();
      const commonLastName = user.last_name.toLowerCase().trim();
      return ( commonFirstName.includes(toLowerCaseSearch) || commonLastName.includes(toLowerCaseSearch))
    })
    return data;
  },[]);

  const handleGetAllUsers = useCallback((search: string): Promise<void> => {
    return (async () => {
      try {
        const usersData: User[] | undefined = await NewApi.getUsers();
  
        if (usersData) {
          const filteredUsersList = handleSearchUsers(usersData, search);
          setUsers(filteredUsersList);
          return Promise.resolve();
        }
  
        return Promise.resolve();
      } catch (err) {
        console.log(`Ошибка получения пользователей: ${err}`);
        return Promise.reject(err);
      }
    })();
  }, [handleSearchUsers]);

  return (
    <SearchContext.Provider value={{ users }}>
      <SearchForm onSearch={handleGetAllUsers}/>
      <SearchResults/>
    </SearchContext.Provider>
  );
}
