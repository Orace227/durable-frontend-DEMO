import { useSelector } from "react-redux";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const Logo = () => {
  const customizer = useSelector((state) => state.customizer);
  const LinkStyled = styled(Link)(() => ({
    height: customizer.TopbarHeight,
    width: customizer.isCollapse ? "40px" : "180px",
    overflow: "hidden",
    display: "block",
  }));

  return (
    // <LinkStyled href="/">
    <div>
      {customizer.activeMode === "dark" ? (
        <Link href="/">
          <Image
            src="/images/logos/2.png"
            alt="logo"
            height={customizer.TopbarHeight}
            width={174}
            priority
          />
        </Link>
      ) : (
        <Link href="/">
          <Image
            src={"/images/logos/2.png"}
            alt="logo"
            height={customizer.TopbarHeight}
            width={174}
            priority
          />
        </Link>
      )}
    </div>
    // </LinkStyled>
  );
};

export default Logo;
