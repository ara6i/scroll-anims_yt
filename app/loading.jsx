"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <Image
        src="/images/rover.jpg"
        alt="monkey"
        fill={true}
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </LoadingWrapper>
  );
};

export default Loading;
