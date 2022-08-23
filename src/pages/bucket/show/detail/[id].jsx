import { useRouter } from "next/router";

const BucketDetail = () => {
  const router = useRouter();
  const { query } = router;
  const { id } = query;

  return (
    <div>
      <p>Bucket detail page!</p>
      <h1>{id}</h1>
    </div>
  );
};

export default BucketDetail;
