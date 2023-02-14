import Image from "next/image";

export const About: React.FC = () => {
  return (
    <section className="relative flex flex-col gap-3 overflow-hidden ">
      <h1 className="bg-gradient-to-r from-primary-300 to-primary-100 bg-clip-text text-center text-[25px] font-bold uppercase text-transparent">
        sobre
      </h1>
      <div className="px-6 text-[20px]">
        <p className="inline text-primary-200">Lucas Hoelzle</p> dolor sit amet,
        consectetur adipisicing elit. Eum, doloremque? Lorem ipsum dolor sit
        amet consectetur, adipisicing elit. Illum ratione odit natus, voluptas
        sunt deleniti beatae doloribus aperiam reprehenderit voluptate
        consectetur assumenda quisquam perspiciatis facere? Qui deserunt ipsam
        alias dolores.
      </div>
      <Image
        className="self-center"
        src={"/personal.png"}
        width={320}
        height={1258}
        alt={"Vita Libratum Logo"}
      />
    </section>
  );
};
