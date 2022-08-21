import styled from "styled-components";
import {
  Dropdown,
  Space,
  Menu,
  Modal,
  Descriptions,
  Input,
  Button,
  Row,
} from "antd";
import ConfirmModal from "./modal/Modal";
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
    password: undefined,
    passwordCheck: undefined,
  });

  const [fillForm, setFillForm] = useState(false);

  const checkForm = () => {
    setFillForm(true);
  };

  //변경 성공 후 나타나는 모달 토글용 state
  const [confirmModal, setConfirmModal] = useState(false);

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
                        현재 비밀번호가 일치하지 않습니다.
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
              {/* ###################################### */}
              <Descriptions.item
                label="비밀번호"
                span={3}
                labelStyle={{ width: "190px", fontWeight: "bold" }}
                contentStyle={{ width: "530px" }}
              >
                {fillForm && !passwordChange?.password ? (
                  <ReInputRow>
                    <Input
                      onChange={(e) => {
                        setPasswordChange((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }));
                      }}
                      bordered={false}
                      autoFocus
                    />
                    {!passwordChange?.password && (
                      <p
                        style={{
                          textAlign: "right",
                          width: "400px",
                          color: "#c40000",
                        }}
                      >
                        올바른 값을 입력해 주세요.
                      </p>
                    )}
                  </ReInputRow>
                ) : (
                  <Input
                    onChange={(e) => {
                      setPasswordChange((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }));
                    }}
                    placeholder="영문자, 숫자, 특수문자 포함 6자 이상 입력해 주세요"
                    bordered={false}
                    autoFocus
                  />
                )}
              </Descriptions.item>
              <Descriptions.item
                label="비밀번호 확인"
                span={3}
                labelStyle={{ width: "190px", fontWeight: "bold" }}
                contentStyle={{ width: "530px" }}
              >
                {fillForm && !passwordChange?.passwordCheck ? (
                  <ReInputRow>
                    <Input
                      onChange={(e) => {
                        setPasswordChange((prev) => ({
                          ...prev,
                          passwordCheck: e.target.value,
                        }));
                      }}
                      bordered={false}
                      autoFocus
                    />
                    {!passwordChange?.passwordCheck && (
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
                        passwordCheck: e.target.value,
                      }));
                    }}
                    placeholder="입력하신 비밀번호와 동일하게 입력해주세요."
                    bordered={false}
                    autoFocus
                  />
                )}
              </Descriptions.item>
              {/* ###################################### */}
            </Descriptions>
            <Row justify="end" align="middle" style={{ height: "70px" }}>
              <Button
                style={{
                  color: "#000000",
                  width: "160px",
                  height: "40px",
                  backgroundColor: "#ffffff",
                  marginRight: "10px",
                }}
                onClick={() => {
                  setIsModal(false);
                  setPasswordChange({
                    current: undefined,
                    password: undefined,
                    passwordCheck: undefined,
                  });
                  setFillForm(false);
                }}
              >
                취소
              </Button>
              {passwordRecord ? (
                <>
                  <Button
                    style={{
                      color: "#ffffff",
                      width: "160px",
                      height: "40px",
                      backgroundColor: "#03c75a",
                    }}
                    onClick={() => {
                      setIsModal(false);
                      setConfirmModal(true);
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
            </Row>
          </Modal>
        )}
        {confirmModal && (
          <ConfirmModal
            visible={confirmModal} // 왜 쓴건지 연구
            customCloseable // 왜 쓴건지 연구
            width="400px"
            height="228px"
          >
            <Space direction="vertical" size={45} style={{ width: "100%" }}>
              <Row justify="center">
                <Space size="small">
                  {/* <img src="/image/faq.svg" alt="icon" /> */}
                  <FaqText>비밀번호가 변경되었습니다.</FaqText>
                </Space>
              </Row>
              <Row justify="center">
                <Button
                  style={{
                    backgroundColor: "#03c75a",
                    borderRadius: "4px",
                    color: "#ffffff",
                    width: "60px",
                    height: "32px",
                  }}
                  onClick={() => setConfirmModal(false)}
                >
                  확인
                </Button>
              </Row>
            </Space>
          </ConfirmModal>
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
  align-items: center;
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

// validate 체크하면서 잘못된 입력의 경우 p태그의 경고문구가 나오는데 block속성이라 두 줄이 되어서 이를 감싸주고 flex할 필요있음
const ReInputRow = styled.span`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const FaqText = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.75);
`;

export default Header;
