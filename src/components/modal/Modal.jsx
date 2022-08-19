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
  const onCustomClick = (e) => {
    if (typeof onClose !== "function") return;
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };
  //tabIndex 를 -1 로 해주는 이유는 페이지 내에서 키보드로 포커스 시킬순서에서 제외하기 위함
  return (
    <>
      <ModalWrapper
        onClick={customCloseable ? onCustomClick : null}
        className={className}
        tabIndex="-1"
        visible={visible}
      >
        <ModalInner
          tabIndex="0"
          className="modal-inner"
          width={width}
          height={height}
          radius={radius}
        >
          <ModalHeader mr={mr}>
            <ModalTitle fsize={fsize}>{label}</ModalTitle>
            {closeable && <ExitImg src="/image/exit.svg" onClick={close} />}
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
