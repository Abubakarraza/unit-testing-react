import React from "react";
import { useQuery } from "react-query";
import CardWithImage from "./CardWithImage";

const Users = () => {
  const { isLoading, isError, data, error, refetch } = useQuery(["repo"], () =>
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => data)
  );
  return (
    <div>
      <h1>All Users</h1>
      <div>
        {isLoading ? (
          <div data-testId="loadingUserText">Loading</div>
        ) : (
          data
            .slice(0, 20)
            .map((item) => <CardWithImage item={item} key={item.id} />)
        )}
      </div>
    </div>
  );
};

export default Users;
