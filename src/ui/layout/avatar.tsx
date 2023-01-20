import { useEffect, useState } from "react";
import { createAvatar } from "@dicebear/core";
import { funEmoji } from "@dicebear/collection";
import Image from "next/image";

function Avatar() {
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

  return avatar ? (
    <Image width={50} height={50} src={avatar} alt="Avatar" />
  ) : null;
}

export default Avatar;
