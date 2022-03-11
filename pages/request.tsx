import React from "react";

import { ErrorBoundary } from "@components/commons/ErrorBoundary/ErrorBoundary.component";

import Lists from "@components/request/Lists/Lists.component";
// const Lists = dynamic(
//   () => import("@components/request/Lists/Lists.component"),
//   { suspense: true }
// );

const Request = () => {
  // const [startTransition, isPending] = useTransition({
  //   timeoutMs: 3000,
  // });
  return (
    <div>
      <div>This is exampleRequest-state by react-query</div>
      {/* <Suspense fallback={"loading"}> */}
      <ErrorBoundary
        fallback={
          <div>
            <h1>[show error fallback ui] sorry</h1>
          </div>
        }
      >
        <Lists />
      </ErrorBoundary>
      {/* </Suspense> */}
    </div>
  );
};

export default Request;
