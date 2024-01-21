import { useQuery } from "react-query";
import Modal from "../../../packages/ui/assignment-ui/Modal";

import "./App.css";

const fetchRandomUserData = async () => {
  return new Promise((resolve) => {
    // Simulate a delay of 1.5 seconds before fetching data
    setTimeout(async () => {
      const response = await fetch("https://randomuser.me/api/?results=10");
      if (!response.ok) {
        throw new Error("Failed to fetch data from the API");
      }
      const data = await response.json();
      resolve(data.results);
    }, 1500);
  });
};

const App = () => {
  const {
    data: people,
    isLoading,
    isError,
  } = useQuery("randomUserData", fetchRandomUserData);

  if (isLoading) {
    return (
      <div>
        {/* <!-- Skeleton Loader --> */}
        <div className="skeleton-loader">
          <div className="skeleton-header">text</div>
          <div className="skeleton-header">text</div>
          <div className="skeleton-header">text</div>
          <div className="skeleton-header">text</div>
          <div className="skeleton-header">text</div>
          <div className="skeleton-header">text</div>
        </div>
      </div>
    );
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  // Check if people is defined before mapping
  if (!people) {
    return null;
  }

  return (
    <div>
      <Modal people={people} />
    </div>
  );
};

export default App;
