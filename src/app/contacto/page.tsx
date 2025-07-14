"use client";

import Header from "../components/UI/header";
import { useState } from "react";

export default function Contacto() {
  const [paso, setPaso] = useState(1);
  const [enviando, setEnviando] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    servicio: "",
    fecha: "",
    hora: "",
    mensaje: "",
    tipoConsulta: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const siguientePaso = () => {
    if (paso < 3) setPaso(paso + 1);
  };

  const pasoAnterior = () => {
    if (paso > 1) setPaso(paso - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);

    const mensaje = `🦷 SOLICITUD DE CITA - DIENTE A DIENTE

- DATOS PERSONALES:
- Nombre: ${formData.nombre}
- Teléfono: ${formData.telefono}
- Email: ${formData.email}

- INFORMACIÓN MÉDICA:
- Tipo de consulta: ${formData.tipoConsulta}
- Servicio solicitado: ${formData.servicio}

- PROGRAMACIÓN:
- Fecha preferida: ${formData.fecha}
- Hora preferida: ${formData.hora}

💬 MENSAJE ADICIONAL:
${formData.mensaje || "Sin mensaje adicional"}

¡Gracias por contactarnos! Te confirmaremos tu cita pronto.`;

    // Enviar por WhatsApp
    const whatsappUrl = `https://wa.me/+524646516461?text=${encodeURIComponent(
      mensaje
    )}`;
    window.open(whatsappUrl, "_blank");

    // Enviar email de confirmación si el usuario proporcionó email
    if (formData.email) {
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert(
            "✅ ¡Solicitud enviada! Recibirás un email de confirmación pronto."
          );
        } else {
          console.error("Error enviando email de confirmación");
          alert(
            "✅ Solicitud enviada por WhatsApp. (Hubo un problema con el email de confirmación)"
          );
        }
      } catch (error) {
        console.error("Error:", error);
        alert(
          "✅ Solicitud enviada por WhatsApp. (Hubo un problema con el email de confirmación)"
        );
      }
    } else {
      alert("✅ ¡Solicitud enviada por WhatsApp!");
    }

    setEnviando(false);
  };

  const servicios = [
    "Valoración y diagnóstico",
    "Limpieza dental",
    "Restauraciones con resina",
    "Endodoncias",
    "Extracciones y cirugías dentales",
    "Citas de mantenimiento",
  ];

  const tiposConsulta = [
    "Primera vez",
    "Urgencia/Dolor",
    "Seguimiento",
    "Consulta preventiva",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      <Header />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Agenda tu Cita
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Completa el formulario en 3 sencillos pasos
          </p>
        </div>

        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                    paso >= stepNumber
                      ? "bg-rose-500 text-white shadow-lg"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {paso > stepNumber ? "✓" : stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div
                    className={`w-16 h-1 mx-2 transition-all duration-300 ${
                      paso > stepNumber ? "bg-rose-500" : "bg-gray-200"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <form onSubmit={handleSubmit}>
            {paso === 1 && (
              <div className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2
                    className="text-2xl font-bold text-gray-800 mb-2"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Información Personal
                  </h2>
                  <p className="text-gray-600">Cuéntanos sobre ti</p>
                </div>

                <div className="space-y-6 max-w-lg mx-auto">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      ¿Cuál es tu nombre completo? *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all text-lg"
                      placeholder="Escribe tu nombre completo"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      ¿Cuál es tu número de teléfono? *
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all text-lg"
                      placeholder="Ejemplo: 4646516461"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Email (opcional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all text-lg"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="flex justify-center mt-8">
                  <button
                    type="button"
                    onClick={siguientePaso}
                    disabled={!formData.nombre || !formData.telefono}
                    className="bg-rose-500 hover:bg-rose-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Continuar →
                  </button>
                </div>
              </div>
            )}

            {paso === 2 && (
              <div className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2
                    className="text-2xl font-bold text-gray-800 mb-2"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Información de la Consulta
                  </h2>
                  <p className="text-gray-600">¿Qué necesitas?</p>
                </div>

                <div className="space-y-6 max-w-lg mx-auto">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      ¿Qué tipo de consulta necesitas? *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {tiposConsulta.map((tipo) => (
                        <button
                          key={tipo}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, tipoConsulta: tipo })
                          }
                          className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                            formData.tipoConsulta === tipo
                              ? "border-rose-500 bg-rose-50 text-rose-700"
                              : "border-gray-200 hover:border-rose-300"
                          }`}
                        >
                          <div className="font-semibold">{tipo}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      ¿Qué servicio específico necesitas? *
                    </label>
                    <select
                      name="servicio"
                      required
                      value={formData.servicio}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all text-lg"
                    >
                      <option value="">Selecciona un servicio</option>
                      {servicios.map((servicio, index) => (
                        <option key={index} value={servicio}>
                          {servicio}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Cuéntanos más detalles (opcional)
                    </label>
                    <textarea
                      name="mensaje"
                      rows={4}
                      value={formData.mensaje}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all resize-none"
                      placeholder="Describe tu situación, síntomas o cualquier información relevante..."
                    ></textarea>
                  </div>
                </div>

                <div className="flex justify-center gap-4 mt-8">
                  <button
                    type="button"
                    onClick={pasoAnterior}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-4 px-8 rounded-xl transition-all duration-300"
                  >
                    ← Anterior
                  </button>
                  <button
                    type="button"
                    onClick={siguientePaso}
                    disabled={!formData.tipoConsulta || !formData.servicio}
                    className="bg-rose-500 hover:bg-rose-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Continuar →
                  </button>
                </div>
              </div>
            )}

            {paso === 3 && (
              <div className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2
                    className="text-2xl font-bold text-gray-800 mb-2"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Programación de Cita
                  </h2>
                  <p className="text-gray-600">¿Cuándo te gustaría tu cita?</p>
                </div>

                <div className="space-y-6 max-w-lg mx-auto">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Fecha preferida
                    </label>
                    <input
                      type="date"
                      name="fecha"
                      value={formData.fecha}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Horario preferido
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "09:00",
                        "10:00",
                        "11:00",
                        "12:00",
                        "14:00",
                        "15:00",
                        "16:00",
                        "17:00",
                      ].map((hora) => (
                        <button
                          key={hora}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, hora: hora })
                          }
                          className={`p-3 rounded-xl border-2 transition-all duration-300 text-center font-semibold ${
                            formData.hora === hora
                              ? "border-rose-500 bg-rose-50 text-rose-700"
                              : "border-gray-200 hover:border-rose-300"
                          }`}
                        >
                          {hora === "12:00"
                            ? "12:00 PM"
                            : parseInt(hora) < 12
                            ? `${hora} AM`
                            : `${parseInt(hora) - 12}:00 PM`}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-rose-50 p-6 rounded-xl">
                    <h3 className="font-bold text-gray-800 mb-3">
                      Resumen de tu cita:
                    </h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>
                        <span className="font-semibold">Paciente:</span>{" "}
                        {formData.nombre}
                      </p>
                      <p>
                        <span className="font-semibold">Teléfono:</span>{" "}
                        {formData.telefono}
                      </p>
                      <p>
                        <span className="font-semibold">Tipo:</span>{" "}
                        {formData.tipoConsulta}
                      </p>
                      <p>
                        <span className="font-semibold">Servicio:</span>{" "}
                        {formData.servicio}
                      </p>
                      {formData.fecha && (
                        <p>
                          <span className="font-semibold">Fecha:</span>{" "}
                          {formData.fecha}
                        </p>
                      )}
                      {formData.hora && (
                        <p>
                          <span className="font-semibold">Hora:</span>{" "}
                          {formData.hora}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-4 mt-8">
                  <button
                    type="button"
                    onClick={pasoAnterior}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-4 px-8 rounded-xl transition-all duration-300"
                  >
                    ← Anterior
                  </button>
                  <button
                    type="submit"
                    disabled={enviando}
                    className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {enviando ? "📤 Enviando..." : "📱 Enviar por WhatsApp"}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              ¿Necesitas ayuda?
            </h3>
            <p className="text-gray-600 mb-4">
              También puedes contactarnos directamente
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:4646516461"
                className="bg-rose-400 hover:bg-rose-500 text-white font-bold py-2 px-6 rounded-full transition-all duration-300"
              >
                📞 Llamar ahora
              </a>
              <a
                href="https://wa.me/+524646516461?text=Hola, necesito información sobre los servicios dentales"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300"
              >
                💬 WhatsApp directo
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
