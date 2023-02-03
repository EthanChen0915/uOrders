import React, { useState } from "react";
import Navigation from "../../components/header/Navigation";
import StoreHeader from "../../components/StoreHeader/StoreHeader";
import useFetch from "../../utils/useFetch";
import { useEffect } from "react";

function Header() {
  const url = "http://localhost:3003/store";
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url).then(async (response) => {
      if (response.ok) {
        setData(await response.json());
        console.log(response);
      }
    });
  }, [url]);

  return (
    <div className="header__container">
      <Navigation />
      <StoreHeader data={data} />
    </div>
  );
}

export default Header;
