import {useState, useEffect} from "react";

const useApiResult = (request) => {
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [url,method] = request;

  useEffect(() => {
    fetch(url,method)
      .then(async (response) => {
        if (response.ok) {
          setResults(await response.json());
          setError(null);
        } else {
          setError(await response.text());
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [request]);
  
  return [results, error];
};

export default useApiResult;