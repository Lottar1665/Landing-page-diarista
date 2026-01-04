"use client";

import { useState } from "react";

type Plan = "Plano Diário" | "Plano Semanal" | "Plano Mensal";

const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

export default function Hero() {
  const [activePlan, setActivePlan] = useState<Plan | null>(null);

  function handleWhatsApp(plan: Plan): void {
    if (!WHATSAPP_NUMBER) {
      console.warn("WhatsApp number not configured");
      return;
    }

    const message = `Olá! Tenho interesse no ${plan}. Poderia me passar mais informações?`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  function cardClasses(plan: Plan): string {
    const isActive = activePlan === plan;

    return `
      flex-1 bg-white rounded-2xl p-6 shadow-md
      transition-all duration-300 transform
      border-2
      ${
        isActive
          ? "border-blue-600 scale-105 z-10"
          : "border-transparent"
      }
      md:hover:scale-105
      md:hover:border-blue-600
      cursor-pointer
    `;
  }

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Planos de limpeza sob medida
          </h1>
          <p className="text-gray-600">
            Escolha o plano ideal para sua rotina
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Diário */}
          <div
            className={cardClasses("Plano Diário")}
            onClick={() => setActivePlan("Plano Diário")}
          >
            <h2 className="text-xl font-semibold mb-2">Plano Diário</h2>
            <p className="text-gray-600 mb-4">
              Ideal para limpezas pontuais e emergenciais.
            </p>

            <div className="text-3xl font-bold mb-4">
              R$ 150
              <span className="text-base font-normal text-gray-500">/dia</span>
            </div>

            <button
              onClick={() => handleWhatsApp("Plano Diário")}
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Agendar agora
            </button>
          </div>

          {/* Semanal */}
          <div
            className={cardClasses("Plano Semanal")}
            onClick={() => setActivePlan("Plano Semanal")}
          >
            <h2 className="text-xl font-semibold mb-2">Plano Semanal</h2>
            <p className="text-gray-600 mb-4">
              Perfeito para manter sua casa sempre limpa.
            </p>

            <div className="text-3xl font-bold mb-4">
              R$ 500
              <span className="text-base font-normal text-gray-500">/semana</span>
            </div>

            <button
              onClick={() => handleWhatsApp("Plano Semanal")}
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Agendar agora
            </button>
          </div>

          {/* Mensal */}
          <div
            className={cardClasses("Plano Mensal")}
            onClick={() => setActivePlan("Plano Mensal")}
          >
            <h2 className="text-xl font-semibold mb-2">Plano Mensal</h2>
            <p className="text-gray-600 mb-4">
              Economia e praticidade para o dia a dia.
            </p>

            <div className="text-3xl font-bold mb-4">
              R$ 1.800
              <span className="text-base font-normal text-gray-500">/mês</span>
            </div>

            <button
              onClick={() => handleWhatsApp("Plano Mensal")}
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Agendar agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
