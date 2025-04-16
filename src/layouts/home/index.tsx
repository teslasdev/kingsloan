import Layout from "../Layout";
import { useHomeChunk } from "./HomeChunk.hook";
import Step1 from "./steps/step-1";
import Step2 from "./steps/step-2";

const Home = () => {
  const p = useHomeChunk();
  return (
    <Layout>
      
        {p.step == 0 && <Step1 p={p} />}
        {p.step == 1 && <Step2 p={p}/>}
    
    </Layout>
  );
};

export default Home;
