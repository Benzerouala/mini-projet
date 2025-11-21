import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [users, setusers] = useState([]);
  useEffect(() => {
    const handlerecuperer = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setusers(data);
      } catch (err) {
        console.log('erreur', err);
        setError(err.message)
      } finally {
        setLoading(false);
      }
    };

    handlerecuperer();
  }, []);
 

  return { users, loading, error };
};


