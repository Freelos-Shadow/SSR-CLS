import React from "react";

interface SearchParams {
  numberOfNodes: string;
  numberOfHiddenNodes: string;
}

interface PageParams {
  searchParams: SearchParams;
}

const NewPage = ({ searchParams }: PageParams) => {
  console.log("%c searchParams :", searchParams);
  const numberNodes = Number(searchParams.numberOfNodes);
  const numberHiddenNodes = Number(searchParams.numberOfHiddenNodes);

  return (
    <div>
      {Array
        .from({ length: numberNodes })
        .map((_, index) => {
            return (
              <div key={index}>
                  <h1>Node {index + 1}</h1>
              </div>
            );
      })}
      {
        numberHiddenNodes > 0 && (
          <div>
            {Array
              .from({ length: numberHiddenNodes })
              .map((_, index) => {
                return (
                  <div key={index}>
                    <h1>Hidden Node {index + 1}</h1>
                  </div>
                );
              })}
          </div>
        )
      }
    </div>
  );
};

export default NewPage;
