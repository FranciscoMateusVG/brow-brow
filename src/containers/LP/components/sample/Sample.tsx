export const Sample: React.FC = () => {
  return (
    <section className="relative flex flex-col gap-3 overflow-hidden ">
      <h1 className="px-6 text-center text-[25px] font-bold uppercase">
        Muitos{" "}
        <p className="inline bg-gradient-to-r from-primary-300 to-primary-100 bg-clip-text text-transparent">
          Treinos Prontos
        </p>{" "}
        Para você!
      </h1>
      <div className="flex flex-col  gap-3 px-6 ">
        <div className="h-48 w-48 self-center bg-primary-300"></div>
        <div className="h-48 w-48 self-center bg-primary-300"></div>{" "}
        <div className="h-48 w-48 self-center bg-primary-300"></div>
      </div>
    </section>
  );
};
