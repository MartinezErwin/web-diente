"use client";

import Header from "../components/UI/header";
import { tratamientos } from "../tratamientos";
import { useState } from "react";

export default function Tratamientos() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [tratamientoSeleccionado, setTratamientoSeleccionado] = useState<
    (typeof tratamientos)[0] | null
  >(null);

  const abrirModal = (tratamiento: (typeof tratamientos)[0]) => {
    setTratamientoSeleccionado(tratamiento);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setTratamientoSeleccionado(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      <Header />
      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-16">
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Odontología Integral
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos una amplia gama de servicios dentales con tecnología
            avanzada y un enfoque personalizado para cuidar tu sonrisa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tratamientos.map((tratamiento) => (
            <div
              key={tratamiento.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-rose-100"
            >
              <div className="text-4xl mb-4 text-center">
                {tratamiento.icono}
              </div>
              <h3
                className="text-xl font-bold text-gray-800 mb-4 text-center"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {tratamiento.titulo}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {tratamiento.descripcion}
              </p>
              <div className="mt-6 text-center">
                <button
                  onClick={() => abrirModal(tratamiento)}
                  className="bg-rose-300 hover:bg-rose-400 text-gray-800 font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Más información
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h2
              className="text-2xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              ¿Necesitas una consulta?
            </h2>
            <p className="text-gray-600 mb-6">
              Agenda tu cita y recibe atención personalizada para tu salud
              bucal.
            </p>
            <a
              href="/contacto"
              className="inline-block bg-rose-400 hover:bg-rose-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Agendar Cita
            </a>
          </div>
        </div>
      </main>

      {modalAbierto && tratamientoSeleccionado && (
        <div className="fixed inset-0 backdrop-blur-sm  bg-opacity-20 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <span className="text-3xl">
                  {tratamientoSeleccionado.icono}
                </span>
                <h2
                  className="text-2xl font-bold text-gray-800"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {tratamientoSeleccionado.titulo}
                </h2>
              </div>
              <button
                onClick={cerrarModal}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                ×
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3
                  className="text-lg font-semibold text-gray-800 mb-2"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Descripción del tratamiento
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {tratamientoSeleccionado.descripcionCompleta}
                </p>
              </div>

              <div>
                <h3
                  className="text-lg font-semibold text-gray-800 mb-2"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Duración
                </h3>
                <p className="text-rose-600 font-medium text-lg">
                  {tratamientoSeleccionado.duracion}
                </p>
              </div>

              <div>
                <h3
                  className="text-lg font-semibold text-gray-800 mb-3"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Proceso del tratamiento
                </h3>
                <ol className="space-y-2">
                  {tratamientoSeleccionado.proceso.map(
                    (paso: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="bg-rose-100 text-rose-600 font-semibold w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-gray-600">{paso}</span>
                      </li>
                    )
                  )}
                </ol>
              </div>

              <div>
                <h3
                  className="text-lg font-semibold text-gray-800 mb-2"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Recomendaciones post-tratamiento
                </h3>
                <p className="text-gray-600 leading-relaxed bg-rose-50 p-4 rounded-xl">
                  {tratamientoSeleccionado.recomendaciones}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href="/contacto"
                  className="flex-1 bg-rose-400 hover:bg-rose-500 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 text-center"
                >
                  Agendar cita
                </a>
                <a
                  href={`https://wa.me/4646516461?text=Hola, me interesa el tratamiento de ${tratamientoSeleccionado.titulo}`}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 text-center"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
