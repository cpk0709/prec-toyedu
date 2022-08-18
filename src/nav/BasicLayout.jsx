import React from "react";
import styled from "styled-components";
import Link from "next/link";

const menu = [
  {
    key: "account",
    title: "계정관리",
    items: [
      { item: "메뉴1", link: "/" },
      { item: "메뉴2", link: "/" },
      { item: "메뉴3", link: "/" },
    ],
  },
  {
    key: "bucket",
    title: "버킷관리",
    items: [
      { item: "메뉴1", link: "/" },
      { item: "메뉴2", link: "/" },
      { item: "메뉴3", link: "/" },
      { item: "메뉴4", link: "/" },
    ],
  },
  { key: "sample1", title: "샘플메뉴1", link: "/" },
  { key: "sample2", title: "샘플메뉴2", link: "/" },
  {
    key: "sample3",
    title: "샘플메뉴3",
    items: [
      { item: "서브메뉴1", link: "/" },
      { item: "서브메뉴2", link: "/" },
      { item: "서브메뉴3", link: "/" },
      { item: "서브메뉴4", link: "/" },
    ],
  },
];

const BasicLayout = ({ children }) => {
  return (
    <Wrapper>
      <p>Basic Layout</p>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: rgba(244, 246, 250, 0.2);
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export default BasicLayout;
