import Head from "next/head";
import "../styles/globals.css";
import BasicLayout from "../nav/BasicLayout";
import GlobalStyle from "../styles/GlobalStyle";

//로그인 했을 때와 안 했을 때 다른 화면이 보이는 것을 가정
const MainContainer = (props) => {
  const { Component, router, pageProps } = props;
  // 나중에 로그인 값 어떻게 불러올지 구상해서 작성 예정
  // const isLogin = useSelector();

  // if(!isLogin){
  //   return(
  //     <AnotherLayout>
  //       <Login {...PageProps}/>
  //     </AnotherLayout>
  //   )
  // }
  return (
    <BasicLayout>
      <Component {...pageProps} />
    </BasicLayout>
  );
};

const MyApp = (props) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>MY_BUCKET</title>
      </Head>
      <GlobalStyle />
      <MainContainer {...props} />
    </>
  );
};

export default MyApp;
