import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
    &::before {
      box-sizing: border-box;
    }
    &::after {
      box-sizing: border-box;
    }
  }
  html, body {
    line-height: 1;
    font-size: 10px;
    font-family: 'Noto Sans KR', sans-serif;
    letter-spacing: -0.05rem;
    background-color: #ffffff;
    color: #000000;
    overflow: hidden;
  }
  
  ol,
  ul,
  li {
    list-style: none;
  }
  button,
  input,
  select,
  textarea {
    background-color: transparent;
    outline: none;
    border: 0;
  }
  textarea {
    font-family: inherit;
    overflow: auto;
    outline: none;
    box-shadow: none;
    resize: none;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  .ant-table-footer {
    background-color: #ffffff;
  }
  .ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > thead > tr > th,
  .ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > thead > tr > th,
  .ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > thead > tr > th,
  .ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > tbody > tr > td,
  .ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > tbody > tr > td,
  .ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > tbody > tr > td, 
  .ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > tfoot > tr > th,
  .ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > tfoot > tr > th,
  .ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > tfoot > tr > th,
  .ant-table.ant-table-bordered > .ant-table-container > .ant-table-content > table > tfoot > tr > td,
  .ant-table.ant-table-bordered > .ant-table-container > .ant-table-header > table > tfoot > tr > td,
   .ant-table.ant-table-bordered > .ant-table-container > .ant-table-body > table > tfoot > tr > td {vertical-align: middle;}

    .ant-table-thead .ant-table-cell.ant-table-row-expand-icon-cell {
        &:before {
        content: '펼침'
      }
   }

   // 이벤트 배너 등록 페이지 파일로드 이미지 스타일
.ant-upload.ant-upload-select-picture-card,
.ant-upload-list-picture-card-container {
  width: 411px;
  height: 87px;
  border-radius: 4px;
  overflow: hidden;
}
.ant-upload-list-picture-card .ant-upload-list-item-thumbnail, .ant-upload-list-picture-card .ant-upload-list-item-thumbnail ≈{
  height: 250px;
  width: 411px;
  padding: 0;
  margin-top:-80px;
  margin-bottom: 100px;
  /* position: static; */
  display: block;
  object-fit: contain;
}
`;
