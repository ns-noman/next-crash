import Button from "@/app/components/Button";
import Image from "next/image";
import thumb from "@/public/images/image.jpg";

export default function Home() {
  return (
    <main className="mt-10">
      <div>
        Adipisicing veniam ex Lorem aliqua nulla nulla adipisicing do non mollit consectetur. Officia sit Lorem voluptate aute tempor laboris occaecat sunt anim labore laborum culpa duis amet. Velit aute in est tempor Lorem exercitation minim aliqua adipisicing aliquip. Quis incididunt veniam voluptate aliqua ea nisi veniam voluptate non nulla non excepteur veniam. Enim laborum occaecat non dolor Lorem qui eu. Occaecat qui duis esse in elit officia proident. Laborum nulla enim do sint deserunt quis dolor esse velit dolore.
      </div>
      <Image placeholder="blur" src={thumb} alt="Thumb Image"/>
      <Button/>
    </main>
  );
}
