import { useState, useEffect } from "react";
import { fetchTasks } from "../api";

export function useTasks(query, status, page, pageSize) {
  const [tasks, setTasks] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTasks = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchTasks({ query, status, page, pageSize });
        setTasks(data.items);
        setTotal(data.total);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadTasks();
  }, [query, status, page, pageSize]);

  return { tasks, total, loading, error };
}
