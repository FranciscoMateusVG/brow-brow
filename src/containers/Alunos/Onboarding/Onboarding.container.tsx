import Image from "next/image";
import { Button } from "../../../components/Button";

export const OnboardingContainer: React.FC = () => {
  return (
    <>
      <div className="absolute left-0 m-10">
        <Image
          src={"/navBar/LOGO.svg"}
          height={30}
          width={45}
          alt={"Vita Libratum Logo"}
          className=""
        />
      </div>
      <div>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ipsum et
          vel similique tenetur officiis.
        </p>
      </div>
      <div>
        ---------------------
        <br />
      </div>
      <div>
        <Button
          onClick={() => {
            console.log("aqui");
          }}
          size="md"
          type="primary"
          text="Próximo"
        />
        <Button
          onClick={() => {
            console.log("aqui");
          }}
          size="sm"
          type="primary"
          text="Pular onboarding"
        />
      </div>
    </>
  );
};
