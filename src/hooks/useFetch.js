import { useState, useEffect } from "react";
import { baseUrl } from "../api/api.js";


export default function useFetch(id = "") {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchData() {
      try {
        setLoading(true);
        const url = id ? `${baseUrl}/online-shop/${id}` : `${baseUrl}/online-shop`;
        const res = await fetch(url, { signal });
        if (!res.ok) {
          throw new Error(`Failed to fetch data: ${res.status}`);
        }
        const result = await res.json();
        setData(result.data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [id]);

  return { data, loading, error };
}

