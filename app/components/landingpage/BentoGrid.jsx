import { Box } from "@mui/material";
import { cn } from "../../utils/cn";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, img, imgClassName }) => {
  return (
    <Box
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-transparent bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      // sx={{
      //   backgroundImage: `url(${img})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   padding: 4, // Adjust padding as needed
      //   borderRadius: "16px", // Add border radius if desired
      //   textAlign: "center", // Center align the text
      //   borderRadius: "16px",
      //   backgroundColor: "#1f2937",
      // }}
    >
      <img src={img} className={imgClassName} alt="img" />
    </Box>
  );
};
