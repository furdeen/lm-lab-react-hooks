// make an api call using useEffect

/*
In React, the useEffect hook is a powerful tool for managing side effects
 within functional components. It allows us to perform tasks such as data
  fetching, subscriptions, or DOM manipulation. 
  The useEffect hook takes an optional 
  second argument called the dependency array,
   which controls when the effect should run.
*/

//

import { useState, useEffect } from "react";

const endpoint = "https://jsonplaceholder.typicode.com/todos/1";

export const APICall = () => {
  const [json, setJson] = useState<string>("");

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setJson(JSON.stringify(data)))
      .catch((error) => console.error("Error", error));
  }, []);

  return (
    <>
      <h2>useEffect</h2>
      <p>{json}</p>
    </>
  );
};