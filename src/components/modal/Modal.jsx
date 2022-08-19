import styled from "styled-components";

const Modal = ({
  className,
  visible,
  children,
  customCloseable,
  closeable,
  onClose,
  label,
  width,
  height,
  fsize,
  radius,
  mr,
}) => {
  return (
    <>
      <ModalWrapper>
        <ModalInner>
          <ModalHeader>
            <ModalTitle>{label}</ModalTitle>
          </ModalHeader>
          {children}
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalInner = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius};
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 10px 15px 0 rgba(0, 0, 0, 0.16);
`;

const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  float: left;
  margin-bottom: 20px;
  margin-right: ${(props) => props.mr};
`;

const ModalTitle = styled.div`
  display: flex;
  flex: 1;
  font-size: ${(props) => props.fsize};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.08;
  letter-spacing: normal;
  text-align: center;
  color: #555555;
`;

const ExitImg = styled.img`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

export default Modal;
