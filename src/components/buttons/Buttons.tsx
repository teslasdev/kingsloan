import { cn } from "../../utils/classes";

export const Button = ({ className, ...props }: { className?: string; [key: string]: any }) => {
  return (
    <button
      className={cn(
        "bg-[#FFAF00] text-black px-4 py-2 rounded-full hover:bg-[#ffae0073] transition duration-300 ease-in-out",
        className
      )}
      {...props}
    >
      {props.children}
    </button>
  );
};
