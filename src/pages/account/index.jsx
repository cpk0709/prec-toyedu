import React from "react";
import { Table, Button, Typography, DatePicker } from "antd";
import styled from "styled-components";

const MainPageIndex = () => {
  return (
    <MainWrapper>
      <MainHeader>
        <MainTitle>
          <Typography.Title level={2}>버킷 리스트</Typography.Title>
        </MainTitle>

        <MainSort>
          <NumberRank>
            <Button>번호 순</Button>
          </NumberRank>
          <ImportantRank>
            <Button>우선순위 순</Button>
          </ImportantRank>
          <MainDatePicker placeholder="날짜선택" />
          <DateLine />
          <MainDatePicker placeholder="날짜선택" />
          <SearchButton>
            <SearchText>검색</SearchText>
          </SearchButton>
        </MainSort>
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

const MainSort = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 11px;
`;

const NumberRank = styled.div`
  margin-right: 22px;
`;

const ImportantRank = styled.div`
  margin-right: 22px;
`;

const MainDatePicker = styled(DatePicker)`
  width: 100px;
  height: 26px;
  cursor: pointer;
`;

const DateLine = styled.div`
  width: 8px;
  height: 1px;
  margin: 15px 6px 11px;
  background-color: #d9d9d9;
`;

const SearchButton = styled.button`
  margin-left: 2px;
  background-color: #b4b4b4;
  width: 40px;
  height: 26px;
  border: 0px;
  outline: 0;
  cursor: pointer;
`;

const SearchText = styled.div`
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.17;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
`;

export default MainPageIndex;
