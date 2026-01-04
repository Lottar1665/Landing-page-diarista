"use client";

import { useState } from "react";

type Plan = "Plano Essencial" | "Plano Completo" | "Plano Pós-Obra" | "Plano Faxina personalizada";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

export default function Hero() {
  const [activePlan, setActivePlan] = useState<Plan | null>(null);

  function handleWhatsApp(plan: Plan) {
    const message = `Olá! Tenho interesse no ${plan}. Poderia me passar mais informações?`;
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  function isOpen(plan: Plan) {
    return activePlan === plan;
  }

  function cardClasses(plan: Plan) {
    return `
      w-full bg-white rounded-2xl border-2
      transition-all duration-300
      flex flex-col
      ${isOpen(plan) ? "border-blue-600" : "border-transparent"}
      md:hover:border-blue-600 md:hover:scale-105
      cursor-pointer
    `;
  }

  function contentClasses(plan: Plan) {
    return `
      transition-all duration-300 overflow-hidden
      ${isOpen(plan) ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}
      xl:max-h-none xl:opacity-100
    `;
  }

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">
          Escolha o plano ideal para sua rotina
        </h1>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 px-2 sm:px-6 xl:px-0">

          {/* ESSENCIAL */}
          <div
            className={cardClasses("Plano Essencial")}
            onClick={() =>
              setActivePlan(isOpen("Plano Essencial") ? null : "Plano Essencial")
            }
          >
            <div className="p-6 flex flex-col gap-4 text-center">
              <h2 className="text-xl font-semibold">PLANO ESSENCIAL</h2>
              <p>Indicado para:</p>
              <p>Manutenção básica e limpeza recorrentes</p>

              <div className={contentClasses("Plano Essencial")}>
                <div className="text-left mt-6 space-y-4">
                  <h3 className="font-semibold">INCLUI:</h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Varrição e pano no chão</li>
                    <li>Limpeza de poeira (móveis acessíveis)</li>
                    <li>Limpeza externa de eletrodomésticos</li>
                    <li>Limpeza de banheiro (vaso, pia e box)</li>
                    <li>Cozinha: pia, bancada e fogão (externo)</li>
                    <li>Retirada de lixo</li>
                  </ul>

                  <h3 className="font-semibold">NÃO INCLUI:</h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Limpeza pesada</li>
                    <li>Vidros externos</li>
                    <li>Parte interna de armários</li>
                    <li>Pós-obra</li>
                  </ul>

                  <p>Tempo médio: 4 a 5 horas</p>
                </div>
              </div>
            </div>

            <div className="mt-auto p-6 text-center">
              <p className="text-sm text-gray-500">a partir</p>
              <p className="text-3xl font-bold mb-4">R$ 250</p>
              <button
                onClick={() => handleWhatsApp("Plano Essencial")}
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
              >
                Agendar agora
              </button>
            </div>
          </div>

          {/* COMPLETO */}
          <div
            className={cardClasses("Plano Completo")}
            onClick={() =>
              setActivePlan(isOpen("Plano Completo") ? null : "Plano Completo")
            }
          >
            <div className="p-6 flex flex-col gap-4 text-center">
              <h2 className="text-xl font-semibold">PLANO COMPLETO</h2>
              <p>Indicado para:</p>
              <p>Manutenção básica e limpeza recorrentes</p>

              <div className={contentClasses("Plano Completo")}>
                <div className="text-left mt-6 space-y-4">
                  <h3 className="font-semibold">INCLUI:</h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Varrição e pano no chão</li>
                    <li>Limpeza de poeira (móveis acessíveis)</li>
                    <li>Limpeza externa de eletrodomésticos</li>
                    <li>Limpeza de banheiro (vaso, pia e box)</li>
                    <li>Cozinha: pia, bancada e fogão (externo)</li>
                    <li>Retirada de lixo</li>
                    <li>Limpeza pesada</li>
                    <li>Vidros externos</li>
                  </ul>

                  <h3 className="font-semibold">NÃO INCLUI:</h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Parte interna de armários (salvo combinado)</li>
                    <li>Pós-obra</li>
                  </ul>

                  <p>Tempo médio: 6 a 8 horas</p>
                </div>
              </div>
            </div>

            <div className="mt-auto p-6 text-center">
              <p className="text-sm text-gray-500">a partir</p>
              <p className="text-3xl font-bold mb-4">R$ 300</p>
              <button
                onClick={() => handleWhatsApp("Plano Completo")}
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
              >
                Agendar agora
              </button>
            </div>
          </div>

          {/* PÓS-OBRA */}
          <div
            className={cardClasses("Plano Pós-Obra")}
            onClick={() =>
              setActivePlan(isOpen("Plano Pós-Obra") ? null : "Plano Pós-Obra")
            }
          >
            <div className="p-6 flex flex-col gap-4 text-center">
              <h2 className="text-xl font-semibold">PLANO PÓS-OBRA</h2>
              <div className="text-center">
                    <p className="mb-4">Indicado para:</p>
                  <p>Imóveis após reforma ou pintura.</p>

                  </div>

              <div className={contentClasses("Plano Pós-Obra")}>
                <div className="text-left mt-2 space-y-4">
                  
                  <h3 className="font-semibold">INCLUI:</h3>

                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Remoção de pó fino de obra</li>
                    <li>Limpeza pesada de pisos</li>
                    <li>Limpeza de respingos de tinta (quando possível)</li>
                    <li>Limpeza de portas, janelas e rodapés</li>
                    <li>Limpeza de banheiros e cozinha</li>
                  </ul>

                  <h3 className="font-semibold">OBSERVAÇÃO:</h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>
                      Não inclui remoção de resíduos cimentícios difíceis sem
                      avaliação
                    </li>
                  </ul>

                  <p>Tempo médio: Sob avaliação</p>
                </div>
              </div>
            </div>

            <div className="mt-auto p-6 text-center">
              <p className="text-3xl font-bold mb-4">Orçamento</p>
              <button
                onClick={() => handleWhatsApp("Plano Faxina personalizada")}
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
              >
                Agendar agora
              </button>
            </div>
          </div>
            {/* PÓS-OBRA */}
          <div
            className={cardClasses("Plano Faxina personalizada")}
            onClick={() =>
              setActivePlan(isOpen("Plano Faxina personalizada") ? null : "Plano Faxina personalizada")
            }
          >
            <div className="p-6 flex flex-col gap-4 text-center">
              <h2 className="text-xl font-semibold">FAXINA PERSONALIZADA</h2>
              <div className="text-center">
                    <p className="mb-4">Indicado para:</p>
                  <p>Necessidades específicas do cliente</p>

                  </div>

              <div className={contentClasses("Plano Faxina personalizada")}>
                <div className="text-left mt-2 space-y-4">
                  
                  <h3 className="font-semibold">O cliente escolhe quais áreas deseja priorizar, por exemplo:</h3>

                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Banheiros</li>
                    <li>Cozinha</li>
                    <li>Janelas</li>
                    <li>Portas</li>
                    <li>Área de serviço</li>
                  </ul>

                  <p>Tempo médio: Definido conforme demanda</p>

                  <h3 className="font-semibold">OBSERVAÇÕES GERAIS:</h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>
                      Valores podem variar conforme tamanho do imóvel e nível de sujeira
                    </li>
                    <li>
                      Serviços adicionais devem ser combinados previamente
                    </li>
                    <li>
                      Para clientes novos, pode ser aplicada taxa de reserva de agenda
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-auto p-6 text-center">
              <p className="text-xl font-bold mb-4">
                Calculado por hora ou por escopo.
              </p>
              <button
                onClick={() => handleWhatsApp("Plano Faxina personalizada")}
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
              >
                Agendar agora
              </button>
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </section>
  );
}
