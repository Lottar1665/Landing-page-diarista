export function Hero() {
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
        <div className="flex flex-col md:flex-row gap-6 group">
          
          {/* Diário */}
          <div className="flex-1 bg-white rounded-2xl p-6 shadow-md transition-all duration-300 transform md:group-hover:scale-95 md:hover:scale-110 md:hover:z-10">
            <h2 className="text-xl font-semibold mb-2">Plano Diário</h2>
            <p className="text-gray-600 mb-4">
              Ideal para limpezas pontuais e emergenciais.
            </p>

            <div className="text-3xl font-bold mb-4">
              R$ 150
              <span className="text-base font-normal text-gray-500">
                /dia
              </span>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
              Agendar agora
            </button>
          </div>

          {/* Semanal */}
          <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-600 transition-all duration-300 transform md:group-hover:scale-95 md:hover:scale-110 md:hover:z-10">
            <h2 className="text-xl font-semibold mb-2">Plano Semanal</h2>
            <p className="text-gray-600 mb-4">
              Perfeito para manter sua casa sempre limpa.
            </p>

            <div className="text-3xl font-bold mb-4">
              R$ 500
              <span className="text-base font-normal text-gray-500">
                /semana
              </span>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
              Contratar plano
            </button>
          </div>

          {/* Mensal */}
          <div className="flex-1 bg-white rounded-2xl p-6 shadow-md transition-all duration-300 transform md:group-hover:scale-95 md:hover:scale-110 md:hover:z-10">
            <h2 className="text-xl font-semibold mb-2">Plano Mensal</h2>
            <p className="text-gray-600 mb-4">
              Economia e praticidade para o dia a dia.
            </p>

            <div className="text-3xl font-bold mb-4">
              R$ 1.800
              <span className="text-base font-normal text-gray-500">
                /mês
              </span>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
              Falar no WhatsApp
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
