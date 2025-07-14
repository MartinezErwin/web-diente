"use client";

import Header from "../components/UI/header";
import Image from "next/image";

export default function SobreMiPropuesta2() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-rose-25 to-pink-50">
      <Header />
      
      {/* Hero Section con diseño centrado */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          
          {/* Imagen Principal Centrada */}
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              {/* Decoración de fondo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
              
              {/* Contenedor de imagen */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <Image
                  src="/Img-perfil.jpeg"
                  alt="Dra. Paola Brizuela"
                  fill
                  className="rounded-full object-cover border-8 border-white shadow-2xl"
                  priority
                />
                {/* Anillo decorativo */}
                <div className="absolute -inset-2 border-4 border-rose-200 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Contenido Principal */}
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h1 
                className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                <span className="block text-2xl lg:text-3xl font-normal text-rose-500 mb-2">
                  Hola, soy
                </span>
                Paola Brizuela
              </h1>
              
              {/* Subtitle elegante */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-32 h-1 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full"></div>
                <p className="text-xl lg:text-2xl text-gray-600 font-light italic pt-4">
                  "Estudiante de odontología apasionada por el cuidado bucal"
                </p>
              </div>
            </div>

            {/* Descripción principal en tarjeta elegante */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-rose-100 mx-4">
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                Comprometida con brindar una atención <strong className="text-rose-600">cálida, responsable</strong> y 
                basada en la <strong className="text-rose-600">evidencia científica</strong>. Mi enfoque es siempre ver al 
                paciente como una <strong className="text-rose-600">persona integral</strong>, no solo como un caso clínico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Valores en Cards */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 
            className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-16"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Mis <span className="text-rose-500">Valores</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-rose-100">
              <div className="text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                💝
              </div>
              <h3 
                className="text-xl font-bold text-gray-800 mb-4 text-center"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Atención Humana
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Cada paciente es único y merece un trato personalizado y cálido
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-rose-100">
              <div className="text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                🔬
              </div>
              <h3 
                className="text-xl font-bold text-gray-800 mb-4 text-center"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Evidencia Científica
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Tratamientos basados en la investigación y evidencia más actual
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-rose-100">
              <div className="text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                📚
              </div>
              <h3 
                className="text-xl font-bold text-gray-800 mb-4 text-center"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Crecimiento Continuo
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Constantemente actualizándome para ofrecer lo mejor a mis pacientes
              </p>
            </div>

            {/* Card 4 */}
            <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-rose-100">
              <div className="text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                🏆
              </div>
              <h3 
                className="text-xl font-bold text-gray-800 mb-4 text-center"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Resultados de Calidad
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Comprometida con la excelencia en cada tratamiento realizado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Misión */}
      <section className="py-20 px-4 bg-gradient-to-r from-rose-500 to-pink-500">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 
            className="text-4xl lg:text-5xl font-bold mb-8"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Mi Misión
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20">
            <p className="text-xl lg:text-2xl leading-relaxed font-light">
              "Busco constantemente <strong>actualizarme, investigar y crecer profesionalmente</strong> 
              para ofrecer un trato humano y personalizado, con <strong>resultados de calidad</strong> 
              que transformen no solo sonrisas, sino vidas."
            </p>
          </div>
          
          <div className="mt-12 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex justify-center">
            <a
              href="/contacto"
              className="inline-block bg-white text-rose-500 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Agenda tu Consulta
            </a>
            <a
              href="/tratamientos"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-rose-500 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Conoce mis Servicios
            </a>
          </div>
        </div>
      </section>

      {/* Sección de Contacto Rápido */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 
            className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            ¿Tienes alguna pregunta?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Estoy aquí para ayudarte a lograr la sonrisa saludable que mereces
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/+524646516461?text=Hola Paola, me gustaría agendar una consulta"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.188z"/>
              </svg>
              WhatsApp
            </a>
            
            <a
              href="mailto:paola@ejemplo.com"
              className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
