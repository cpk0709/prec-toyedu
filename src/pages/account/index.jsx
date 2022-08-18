import React from "react";
import { Table, Button, Typography } from "antd";
import styled from "styled-components";

const MainPageIndex = () => {
  return (
    <MainWrapper>
      <MainHeader>
        <MainTitle>
          <Typography.Title level={2}>버킷 리스트</Typography.Title>
        </MainTitle>
      </MainHeader>
      <p>Main Page</p>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  flex: 1;
  margin-left: 36px;
  margin-right: 120px;
`;

const MainHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const MainTitle = styled.div`
  display: flex;
  flex-direction: row;
`;
export default MainPageIndex;
