import styled from "styled-components";
import { Dropdown, Space, Menu } from "antd";

const Header = () => {
  const menu = (
    <Menu
      items={[
        {
          label: <a>비밀번호 변경</a>,
          // key: "0",
        },
      ]}
    />
  );

  return (
    <HeadWrapper>
      <HeadDiv>
        <Profile src="/image/profile.svg" />
        <UserName>User Name</UserName>
        <Dropdown placement="bottomRight" overlay={menu} trigger={["click"]}>
          <Space>
            <Setting src="/image/setting.svg" />
          </Space>
        </Dropdown>
      </HeadDiv>
      <LogOut>Logout</LogOut>
    </HeadWrapper>
  );
};

const HeadWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const HeadDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  background-color: #d6ebff;
  flex-direction: row;
  justify-content: flex-end;
  aligh-items: center;
`;

const LogOut = styled.button`
  font-size: 18px;
  line-height: 1.33;
  color: #fff;
  width: 120px;
  height: 100px;
  background-color: #aed8ff;
  outline: 0;
  border: 0;
  cursor: pointer;
`;

const Profile = styled.img`
  justify-content: flex-end;
  width: 46px;
  height: 46px;
  margin-right: 20px;
`;

const UserName = styled.div`
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.35;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  margin-right: 20px;
`;

const Setting = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 24px;
  cursor: pointer;
`;

export default Header;
