import Layout from "../Layout";
import { useHomeChunk } from "./HomeChunk.hook";
import Step1 from "./steps/step-1";
import Step2 from "./steps/step-2";
import Step3 from "./steps/step-3";
import Step4 from "./steps/step-4";
import Step5 from "./steps/step-5";

const Home = () => {
  const p = useHomeChunk();
  return (
    <Layout>
        {p.step == 0 && <Step1 p={p} />}
        {p.step == 1 && <Step2 p={p}/>}
        {p.step == 2 && <Step3 p={p}/>}
        {p.step == 3 && <Step4 p={p}/>}
        {p.step == 4 && <Step5 p={p}/>}
    
    </Layout>
  );
};

export default Home;
