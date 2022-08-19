import { forwardRef } from "react";
import { Button } from "antd";
import styled from "styled-components";

const SaveButton = forwardRef(({ text, ...props }, ref) => {
  return (
    <Button ref={ref} {...props}>
      <Img src="/icons/save.png" alt="save button" />
      {text ?? "저장"}
    </Button>
  );
});

// 이거 안 하면 forwardRef 사용 시 eslint 에러 남.
SaveButton.displayName = "SaveButton";

const Img = styled.img`
  margin-right: 15px;
`;

export default SaveButton;
