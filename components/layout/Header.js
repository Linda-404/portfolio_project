import Image from "next/image";
import Heading from "../Heading";
import Logo from "../../public/images/logo.png";

export default function Header() {
  return (
    <header>
      <Image src={Logo} width="125" height="100" alt="personal logo" />

      <Heading title="Linda-404" />
    </header>
  );
}
