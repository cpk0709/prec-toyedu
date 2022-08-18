import { useRouter } from "next/router";
import { useEffect } from "react";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    // router.replace("/account");
    router.replace("/bucket/show");
  }, []);
};
export default Index;
