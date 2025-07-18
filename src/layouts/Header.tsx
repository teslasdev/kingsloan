import { Link } from "react-router-dom";
import { Button } from "../components/buttons/Buttons";

export const Header = () => {
  return (
    <div className="h-[100px] flex justify-center w-full items-center px-6 border border-[#D7D7D780]">
      <div className="flex justify-between items-center w-full max-w-[1200px]">
        <div>
          <h1 className="text-[#002266] text-[20.76px] font-[700]">
            KingsLoan
          </h1>
        </div>

        <div className="lg:flex hidden gap-8 items-center">
          <ul className="flex gap-6 text-[16px] font-[500] text-[#002266]">
            <Link to="/">About</Link>
            <Link to="/">Products</Link>
            <Link to="/">More</Link>
          </ul>
          <Button className={"w-[140px] h-[52px]"}>Apply</Button>
        </div>
      </div>
    </div>
  );
};
