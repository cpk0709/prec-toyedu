import styled from "styled-components";
import {
  Dropdown,
  Space,
  Menu,
  Modal,
  Descriptions,
  Input,
  Button,
} from "antd";
// import Modal from "./modal/Modal";
import { useState } from "react";

const Header = () => {
  const [isModal, setIsModal] = useState(false);

  const modalOpen = () => {
    setIsModal(true);
  };

  // const modalToggle = () => {
  //   setIsModal((prev) => !prev);
  // };

  const menu = (
    <Menu
      items={[
        {
          label: <a onClick={modalOpen}>비밀번호 변경</a>,
          // key: "0",
        },
      ]}
    />
  );

  const [passwordChange, setPasswordChange] = useState({
    current: undefined,
    // password: undefined,
    // passwordCheck: undefined,
  });

  const [fillForm, setFillForm] = useState(false);

  const checkForm = () => {
    setFillForm(true);
  };

  const passwordRecord = Object.values(passwordChange).every((value) => value);

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
        {isModal && (
          <Modal
            centered
            closable={false}
            visible={isModal}
            width="800px"
            footer={null}
            bodyStyle={{ padding: "40px" }}
          >
            <ModalTitle>비밀번호 변경</ModalTitle>
            <Descriptions bordered>
              <Descriptions.item
                label="현재 비밀번호"
                span={3}
                labelStyle={{ width: "190px", fontWeight: "bold" }}
                contentStyle={{ width: "530px" }}
              >
                {fillForm && !passwordChange?.current ? (
                  <ReInputRow>
                    <Input
                      onChange={(e) => {
                        setPasswordChange((prev) => ({
                          ...prev,
                          current: e.target.value,
                        }));
                      }}
                      bordered={false}
                      autoFocus
                    />
                    {!passwordChange?.current && (
                      <p
                        style={{
                          textAlign: "right",
                          width: "400px",
                          color: "#c40000",
                        }}
                      >
                        비밀번호가 일치하지 않습니다.
                      </p>
                    )}
                  </ReInputRow>
                ) : (
                  <Input
                    onChange={(e) => {
                      setPasswordChange((prev) => ({
                        ...prev,
                        current: e.target.value,
                      }));
                    }}
                    placeholder="현재 비밀번호를 입력해주세요"
                    bordered={false}
                    autoFocus
                  />
                )}
              </Descriptions.item>
            </Descriptions>
            {passwordRecord ? (
              <>
                <Button
                  style={{
                    color: "#ffffff",
                    width: "160px",
                    height: "40px",
                    backgroundColor: "#03c75a",
                  }}
                >
                  변경하기
                </Button>
              </>
            ) : (
              <>
                <Button
                  style={{
                    color: "#ffffff",
                    width: "160px",
                    height: "40px",
                    backgroundColor: "#999899",
                  }}
                  onClick={checkForm}
                >
                  변경하기
                </Button>
              </>
            )}
          </Modal>
        )}
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

const ModalTitle = styled.p`
  display: flex;
  height: 60px;
  font-size: 24px;
  font-weight: bold;
  justify-content: left;
  align-items: center;
  margin-bottom: 10px;
`;

// 좀 생각해봐야겠음
const ReInputRow = styled.span`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default Header;
