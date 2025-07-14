"use client";

import Header from "../components/UI/header";
import Image from "next/image";

export default function SobreMi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      <Header />

      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="space-y-4">
                <h1
                  className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Hola, soy{" "}
                  <span className="text-rose-500">Paola Brizuela</span>
                </h1>

                <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full"></div>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Estudiante de odontología apasionada por el cuidado bucal y
                  comprometida con brindar una atención cálida, responsable y
                  basada en la evidencia científica.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-rose-100">
                  <div className="text-3xl mb-3">💝</div>
                  <h3
                    className="font-semibold text-gray-800 mb-2"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Atención Personalizada
                  </h3>
                  <p className="text-sm text-gray-600">
                    Cada paciente es único y merece un trato humano especial
                  </p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-rose-100">
                  <div className="text-3xl mb-3">🔬</div>
                  <h3
                    className="font-semibold text-gray-800 mb-2"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Evidencia Científica
                  </h3>
                  <p className="text-sm text-gray-600">
                    Tratamientos basados en la investigación más actual
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contacto"
                  className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  Agendar Consulta
                </a>
                <a
                  href="/tratamientos"
                  className="border-2 border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Ver Servicios
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-400 rounded-3xl transform rotate-3 opacity-20"></div>
                <div className="relative bg-white rounded-3xl p-3 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/Img-perfil.jpeg"
                    alt="Dra. Paola Brizuela"
                    width={400}
                    height={500}
                    className="rounded-2xl object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl text-center">
          <h2
            className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Mi Filosofía
          </h2>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-rose-100">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <span className="text-rose-500 font-semibold">
                Mi enfoque es siempre ver al paciente como una persona integral
              </span>
              , no solo como un caso clínico. Busco constantemente actualizarme,
              investigar y crecer profesionalmente para ofrecer un trato humano
              y personalizado, con resultados de calidad.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-semibold text-gray-800 mb-2">Compromiso</h3>
                <p className="text-sm text-gray-600">
                  Con la excelencia y el crecimiento continuo
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="font-semibold text-gray-800 mb-2">Empatía</h3>
                <p className="text-sm text-gray-600">
                  Entendiendo las necesidades de cada paciente
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="font-semibold text-gray-800 mb-2">Calidad</h3>
                <p className="text-sm text-gray-600">
                  Resultados excepcionales en cada tratamiento
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              ¿Listo para cuidar tu sonrisa?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Agenda tu consulta y descubre cómo puedo ayudarte a lograr la
              sonrisa que siempre has deseado
            </p>
            <a
              href="/contacto"
              className="inline-block bg-white text-rose-500 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Agendar Cita Ahora
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
