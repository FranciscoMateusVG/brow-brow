import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "../../../../components/Button";

export const Hero: React.FC = () => {
  const router = useRouter();
  const login = () => {
    void router.push("/api/auth/login");
  };

  const icon = (
    <Image
      className="self-center "
      src={"but_icon2.svg"}
      height={15}
      width={15}
      alt={"Vita Libratum Logo"}
    />
  );

  return (
    <section className="relative flex flex-col gap-3 overflow-hidden bg-primary-200 p-6 ">
      <h1 className="text-center text-[20px] text-white">Lorem Ipsum</h1>
      <div className="text-center text-[25px] font-medium text-white">
        <p>Lorem ipsum </p>
        <p>dolor sit amet, consectetur adipisicing elit. Eum, doloremque?</p>
      </div>

      <Image
        className="self-center"
        src={"/cellphones.png"}
        width={230}
        height={1258}
        alt={"Cell Phone Images"}
      />

      <Button onClick={login} size="md" type="secondary" icon={icon} />
      <div className="absolute top-[-50px] right-[-200px] h-full w-full">
        <Image src={"/last.png"} fill alt={"Vita Libratum Logo"} />
      </div>
      <Image src={"/past.png"} fill alt={"Vita Libratum Logo"} />
      <div className="absolute bottom-[-10px] left-0 h-24 w-screen">
        <Image src={"waves2.svg"} fill alt={"Vita Libratum Logo"} />
      </div>
    </section>
  );
};
