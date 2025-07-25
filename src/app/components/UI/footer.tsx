export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-rose-50 to-pink-50 border-t border-rose-200">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Contenido principal */}
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <h3
              className="text-3xl font-bold text-gray-800 mb-2"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              🦷 Diente a Diente
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Cuidando tu sonrisa con profesionalismo y calidez humana
            </p>
          </div>

          {/* Información de contacto */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
              <div className="bg-rose-100 p-3 rounded-full mb-3">
                <svg
                  className="w-6 h-6 text-rose-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.5 10.5a11.06 11.06 0 004.5 4.5l1.113-1.724a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">Teléfono</h4>
              <p className="text-gray-600 text-sm">4646516461</p>
            </div>

            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
              <div className="bg-rose-100 p-3 rounded-full mb-3">
                <svg
                  className="w-6 h-6 text-rose-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">Ubicación</h4>
              <p className="text-gray-600 text-sm">Calle Principal #123</p>
            </div>

            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
              <div className="bg-rose-100 p-3 rounded-full mb-3">
                <svg
                  className="w-6 h-6 text-rose-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-1">Horarios</h4>
              <p className="text-gray-600 text-sm">
                Lun - Vie: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>

          {/* Redes sociales */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Síguenos en nuestras redes
            </h4>
            <div className="flex justify-center space-x-4">
              <a
                href="mailto:contacto@dienteadiente.com"
                className="group bg-white hover:bg-rose-500 border-2 border-rose-200 hover:border-rose-500 p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                title="Email"
              >
                <svg
                  className="w-6 h-6 text-rose-500 group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/dienteadiente"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white hover:bg-blue-600 border-2 border-blue-200 hover:border-blue-600 p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                title="Facebook"
              >
                <svg
                  className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/dienteadiente"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 border-2 border-pink-200 hover:border-pink-500 p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                title="Instagram"
              >
                <svg
                  className="w-6 h-6 text-pink-500 group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* WhatsApp destacado */}
          <div className="mb-8">
            <a
              href="https://wa.me/+524646516461?text=Hola, necesito información sobre los servicios dentales"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.109" />
              </svg>
              Chatea con nosotros
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-rose-200 pt-6">
            <p className="text-gray-600 text-sm">
              © 2025 Diente a Diente. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Hecho con ❤️ para cuidar tu sonrisa
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
