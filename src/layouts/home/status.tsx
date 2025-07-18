import { Button } from "../../components/buttons/Buttons";
import Layout from "../Layout";
import Success from "../../assets/success.gif";
import { useHomeChunk } from "./HomeChunk.hook";

const Status = () => {
  const p = useHomeChunk();
  return (
    <Layout>
      <div className="flex items-center justify-center mx-auto max-w-[1200px] w-full min-h-[80vh] p-4">
        <div
          className={`md:w-[846px] relative w-full min-h-[516px] p-6 bg-white shadow-lg rounded-[20px] flex flex-col transition-transform duration-500 border border-[#D7D7D780]`}
        >
          {p.takeLoan && (
            <div className="absolute flex justify-center items-center flex-col inset-0 w-full h-full z-30 bg-white rounded-md">
              {/* <ProgressLoader isLoading={h.isLoading} /> */}
              <img src={Success} className="w-[300px] h-[300px]" />
              <h3 className="text-[#002266] font-[600] text-[24px]">
                Loan Disbursed
              </h3>
              <p className="text-[14px] font-[400] text-[#002266]">
                Your loan has been disbursed to your local bank account.
              </p>

              <button className="text-[16px] mt-6 font-[500] text-[#14961D]">
                <a href={"/"}>Cancel</a>
              </button>
            </div>
          )}

          <h1 className="text-[24px] text-[#002266] font-[600]">
            Your loan limit is ready
          </h1>
          <p className="text-[14px] font-[400] text-[#002266]">
            Your loan limit has been calculated and below is the amount
            available for disbursement..
          </p>

          <div className="bg-[#F6FEF7] p-2 flex justify-between my-4 px-4 items-center">
            <div className="flex items-center gap-8">
              <div>
                <h2 className="text-[20px] text-[#002266] font-[600]">
                  NGN 20,000
                </h2>
                <p>Amount loanable</p>
              </div>
              <div>
                <h2 className="text-[20px] text-[#002266] font-[600]">15%</h2>
                <p>Interest Rate</p>
              </div>
            </div>

            <div>
              <h2 className="text-[20px] text-[#002266] font-[600]">
                NGN 2,000
              </h2>
              <p>Interest on loan</p>
            </div>
            <div>
              <h2 className="text-[20px] text-[#002266] font-[600]">
                NGN 22,000
              </h2>
              <p>Repayment Amount</p>
            </div>
          </div>

          <div className="my-4">
            <p>Disbursing details</p>
            <div className="border border-[#D7D7D7] flex justify-between flex-wrap mt-1 p-4 gap-6 rounded-[12px]">
              <div className="w-[30%]">
                <h2 className="text-[20px] text-[#002266] font-[600]">
                  7064422483
                </h2>
                <p>Account number</p>
              </div>
              <div className="w-[30%]">
                <h2 className="text-[20px] text-[#002266] font-[600]">
                  Atoyebi Paul Wealth
                </h2>
                <p>Account Name</p>
              </div>

              <div className="w-[30%]">
                <h2 className="text-[20px] text-[#002266] font-[600]">
                  Opay Digital Banking
                </h2>
                <p>Bank</p>
              </div>
              <div className="w-[30%]">
                <h2 className="text-[20px] text-[#002266] font-[600]">
                  1 Month
                </h2>
                <p>Repayment duration</p>
              </div>

              <div className="w-[30%]">
                <h2 className="text-[20px] text-[#002266] font-[600]">NGN 0</h2>
                <p>Discount</p>
              </div>

              <div className="w-[30%]">
                <h2 className="text-[20px] text-[#002266] font-[600]">1%</h2>
                <p>Rollover fee</p>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full justify-end">
            <Button
              onClick={() => p.setTakeLoan(true)}
              className={"w-[200px] h-[52px] cursor-pointer"}
            >
              Take Loan
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Status;
