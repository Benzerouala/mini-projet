import { useState, useEffect, useMemo } from "react";
import "./App.css";
import { Users } from "./Components/Users";
import { useFetch } from "./hooks/useFetch";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const apiurl = "https://jsonplaceholder.typicode.com/users";
  const { users, loading, error } = useFetch(apiurl);

  const [search, setSearch] = useState("");
  const filteredUsers = useMemo(() => {
    if (!users) return [];
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  const [theme, setTheme] = useLocalStorage("theme", "bg-light");
  const changeBG = () =>
    setTheme((prev) => (prev === "bg-light" ? "bg-dark" : "bg-light"));

  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((c) => {
        if (c <= 1) {
          fetchUsers(); 
          return 10; 
        }
        return c - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-vh-100 w-100 container-fluid p-3 ${theme}`}>
      <h1>Liste des utilisateurs</h1>

      <div className="d-flex gap-2 mb-3">
        <button className="btn btn-secondary" onClick={changeBG}>
          Passer en {theme === "bg-light" ? "Dark" : "Light"}
        </button>
        <span>Auto-refresh dans : {counter} secondes</span>
      </div>

      <input
        type="text"
        placeholder="Recherche..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="form-control mb-3"
      />

      <Users users={filteredUsers} loading={loading} error={error} />
    </div>
  );
}

export default App;
