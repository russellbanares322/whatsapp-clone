import React from "react";

type PageProps = {
  params: {
    id: string;
  };
};

export default function Page({ params }: PageProps) {
  return <div>{params.id}</div>;
}
