
import Layout from "../Layout";
import { useHomeChunk } from "./HomeChunk.hook";
import Step1 from "./steps/step-1";

const Home = () => {
  const p = useHomeChunk()
  return (
    <Layout>
       {p.step == 0 && <Step1 />}
    </Layout>
  );
};

export default Home;
