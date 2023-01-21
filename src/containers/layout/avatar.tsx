import { useEffect, useState } from "react";
import { createAvatar } from "@dicebear/core";
import { funEmoji } from "@dicebear/collection";
import Image from "next/image";

interface IAvatar {
  url: string | undefined | null;
}

export const Avatar: React.FC<IAvatar> = ({ url }) => {
  const [avatar, setAvatar] = useState<string>("");

  useEffect(() => {
    let active = true;

    void (async () => {
      const avatar = await createAvatar(funEmoji, {
        size: 128,
        radius: 50,
      }).toDataUri();

      if (active) {
        console.log(avatar);
        setAvatar(avatar);
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  return url ? (
    <img src={url} alt="Avatar" className="h-12 w-12 rounded-full" />
  ) : null;
};
