import React from "react";
import { useQuery } from "react-query";
import { getExampleRequest } from "@states/server/exampleRequest";
const ExampleRequest = () => {
  const { isLoading, status, data, isSuccess, isError, error } = useQuery(
    "getExampleRequest",
    getExampleRequest,
    {
      useErrorBoundary: true,
    }
  );

  if (isError) {
    throw error;
  }
  if (isLoading) {
    return (
      <div>
        <h1>[show loading ui] ... now is loading ...</h1>
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1>[show success ui] this is response</h1>
      </div>
      {data &&
        data.map((list: any) => {
          return <div key={list.id}>{list.title}</div>;
        })}
    </div>
  );
};

export default ExampleRequest;
