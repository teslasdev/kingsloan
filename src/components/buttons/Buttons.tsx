import { cn } from "../../utils/classes";

export const Button = ({ className, ...props }: { className?: string; [key: string]: any }) => {
  return (
    <button
      className={cn(
        "bg-[#14961D] text-white px-4 py-2 rounded-full hover:bg-[#14961D] transition duration-300 ease-in-out",
        className
      )}
      {...props}
    >
      {props.children}
    </button>
  );
};
