import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const menu = [
  {
    key: "account",
    title: "계정관리",
    items: [
      { item: "내계정 조회", link: "/account/show" },
      { item: "내계정 수정", link: "/account/update" },
      { item: "내계정 삭제", link: "/account/delete" },
    ],
  },
  {
    key: "bucket",
    title: "버킷관리",
    items: [
      { item: "내버킷 조회", link: "/bucket/show" },
      { item: "내버킷 수정", link: "/bucket/update" },
      { item: "내버킷 삭제", link: "/bucket/delete" },
      { item: "내버킷 통계", link: "/bucket/chart" },
    ],
  },
  { key: "sample1", title: "샘플메뉴1", link: "/sample1" },
  { key: "sample2", title: "샘플메뉴2", link: "/sample2" },
  {
    key: "sample3",
    title: "샘플메뉴3",
    items: [
      { item: "서브메뉴1", link: "/sample/sub1" },
      { item: "서브메뉴2", link: "/sample/sub2" },
      { item: "서브메뉴3", link: "/sample/sub3" },
      { item: "서브메뉴4", link: "/sample/sub4" },
    ],
  },
];

const BasicLayout = ({ children }) => {
  const [selected, setSelected] = useState();
  const { asPath } = useRouter();

  useEffect(() => {
    const targetRoute = asPath.split("/")[1];
    console.log(targetRoute);
    const selectMenu = menu.find(({ key }) => targetRoute === key);
    if (selectMenu) setSelected(selectMenu.key);
  }, [asPath]);

  return (
    <Wrapper>
      <SideContainer>
        <LogoContainer>
          <Link href="/">
            <a>My Bucket</a>
          </Link>
        </LogoContainer>
        <MenuContainer>
          {menu.map((data) => {
            const isSelect = selected === data.key;
            const onClick = () => {
              // setSelected(data.key);
              setSelected((prev) =>
                prev ? (prev === data.key ? null : data.key) : data.key
              );
            };
            return (
              <MenuItem key={data.key} onClick={onClick}>
                {data.link ? (
                  <Link href={`${data.link}`}>
                    <MenuItemTitle isSelect={isSelect}>
                      {data.title}
                    </MenuItemTitle>
                  </Link>
                ) : (
                  <MenuItemTitle isSelect={isSelect} isShowArray>
                    {data.title}
                  </MenuItemTitle>
                )}
                {
                  <MenuSubList isSelect={isSelect}>
                    {data.items?.map((items, idx) => {
                      return (
                        <Link href={`${items.link}`} key={idx}>
                          <MenuSubListItem
                            active={asPath.startsWith(items.link)}
                          >
                            <a>{items.item}</a>
                          </MenuSubListItem>
                        </Link>
                      );
                    })}
                  </MenuSubList>
                }
              </MenuItem>
            );
          })}
        </MenuContainer>
      </SideContainer>
      <RootContainer>
        <Container>{children}</Container>
      </RootContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: rgba(244, 246, 250, 0.2);
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const SideContainer = styled.aside`
  background: #fff;
  width: 350px;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  background: #aed8ff;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #fff;
  font-weight: 700;
`;

const MenuContainer = styled.nav`
  border-right: 1px #ddd solid;
  flex: 1;
`;

const MenuItem = styled.div`
  border-bottom: 1px #eee solid;
  overflow: hidden;
`;

const MenuItemTitle = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 70px;
  padding: 0 20px;
  color: #707070;
  font-size: 20px;
  font-weight: 500;
  // transition-duration: 0.3s;
  ${({ isSelect }) =>
    isSelect && `font-weight:600; color: #fff; background-color:#c4e2ff;`}
  ${({ isShowArray = false }) =>
    isShowArray &&
    css`
      &::after {
        content: "";
        width: 15px;
        height: 15px;
        background-image: url("/icons/nav_arr_off.png");
        background-size: contain;
        transition-duration: 0.5s;
        ${({ isSelect }) =>
          isSelect &&
          `
          background-image: url("/icons/nav_arr_on.png"); 
          transform: rotate(180deg); 
          transition-duration:0.5s;
          `};
      }
    `};
`;

const MenuSubList = styled.ul`
  height: 0;
  padding: 0;
  list-style-type: none;
  margin: 0;
  transition-duration: 0.2s;
  ${({ isSelect }) => isSelect && `height: auto;`}
`;

const MenuSubListItem = styled.li`
  a {
    display: block;
    font-size: 20px;
    line-height: 60px;
    height: 60px;
    padding: 0 20px;
    color: #ddd;
    font-weight: 300;
    font-family: "Noto Sans KR", sans-serif;
    :hover {
      color: black;
    }
    ${({ active }) => active && `color: #3d3d3d; font-weight: bold;`}
  }
`;

const RootContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: auto;
`;

const Container = styled.div`
  margin-bottom: 30px;
  margin-top: 40px;
  margin-left: 40px;
  margin-right: 120px;
`;

export default BasicLayout;
