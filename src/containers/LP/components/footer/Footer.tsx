import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-7 flex justify-center">
      <div className="w-[90%] rounded-sm border-t-2 border-gray-200">
        <div className="flex justify-center gap-4 py-4">
          <Image
            src={"footer/facebook.svg"}
            height={30}
            width={30}
            alt={"Vita Libratum Logo"}
          />{" "}
          <Image
            src={"footer/instagram.svg"}
            height={30}
            width={30}
            alt={"Vita Libratum Logo"}
          />{" "}
          <Image
            src={"footer/linkedin.svg"}
            height={30}
            width={30}
            alt={"Vita Libratum Logo"}
          />{" "}
          <Image
            src={"footer/twitter.svg"}
            height={30}
            width={30}
            alt={"Vita Libratum Logo"}
          />
        </div>
      </div>
    </footer>
  );
};
