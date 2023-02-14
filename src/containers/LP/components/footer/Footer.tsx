import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-7 flex justify-center">
      <div className="w-[90%] rounded-sm border-t-2 border-gray-200">
        <div className="flex justify-center gap-4 py-4">
          <Image
            src={"facebook.svg"}
            height={30}
            width={30}
            alt={"Vita Libratum Logo"}
          />{" "}
          <Image
            src={"instagram.svg"}
            height={30}
            width={30}
            alt={"Vita Libratum Logo"}
          />{" "}
          <Image
            src={"linkedin.svg"}
            height={30}
            width={30}
            alt={"Vita Libratum Logo"}
          />{" "}
          <Image
            src={"twitter.svg"}
            height={30}
            width={30}
            alt={"Vita Libratum Logo"}
          />
        </div>
      </div>
    </footer>
  );
};
