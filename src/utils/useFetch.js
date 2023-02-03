import React, { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(url);
      const responseJson = await response.json();
      setData(responseJson);
    };
    fetchApi();
  }, [url]);

  return {
    data,
  };
}
