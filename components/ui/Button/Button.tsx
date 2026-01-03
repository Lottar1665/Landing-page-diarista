import Link from "next/link";
import Image from "next/image";

export function Button() {
  return (
    <Link href="/" aria-label="Página inicial">
      <Image
        src="/images/logo.jpg"
        alt="Logo Vinicius Mariano"
        width={40}
        height={40}
        className="rounded-full"
      />
    </Link>
  );
}
