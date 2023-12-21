import { type NextPage } from "next";
import { OnboardingContainer } from "../../containers/Alunos/Onboarding/Onboarding.container";

const onboarding: NextPage = () => {
  return (
    <div className="flex h-screen justify-center bg-black align-middle  opacity-90">
      <OnboardingContainer />
    </div>
  );
};

export default onboarding;
