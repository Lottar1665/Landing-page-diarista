"use client"
import { Section } from "@/components/layout/Section"
import Link from "next/link"
import Image from "next/image"

export function Contact() {
  return (
    <Section id="contato">
      <div className="p-2">
      <p className="text-xs font-bold my-2 text-white">
        Entre em contato para agendar uma limpeza ou solicitar um orçamento.
      </p>

      <div className="flex justify-center gap-6">

        <div  className="flex justify-center items-center gap-2">
            <Link href="/" aria-label="Página inicial">
      <Image
        src="/images/facebook.png"
        alt="Logo Vinicius Mariano"
        width={20}
        height={20}
        className="rounded-full"
      />
    </Link>

    <Link href="/" aria-label="Página inicial">
      <Image
        src="/images/instagram.png"
        alt="Logo Vinicius Mariano"
        width={20}
        height={20}
        className="rounded-full"
      />
    </Link>

    <Link href="/" aria-label="Página inicial">
      <Image
        src="/images/whatsapp.png"
        alt="Logo Vinicius Mariano"
        width={20}
        height={20}
        className="rounded-full"
      />
    </Link>

      </div>
      </div>
      </div>
    </Section>
  )
}