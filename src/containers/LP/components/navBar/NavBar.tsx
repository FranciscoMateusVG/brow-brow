import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "../../../../components/Button";

export const NavBar: React.FC = () => {
  const router = useRouter();
  const login = () => {
    void router.push("/api/auth/login");
  };

  const icon = (
    <Image
      className="self-center"
      src={"but_icon.svg"}
      height={10}
      width={10}
      alt={"Vita Libratum Logo"}
    />
  );

  return (
    <nav className="flex h-[70px] justify-between bg-black px-4 py-4 ">
      <Image
        src={"vector.svg"}
        height={25}
        width={25}
        alt={"Vita Libratum Logo"}
      />
      <Image
        src={"LOGO.svg"}
        height={30}
        width={45}
        alt={"Vita Libratum Logo"}
      />
      <Button onClick={login} size="sm" type="primary" icon={icon} />
    </nav>
  );
};
