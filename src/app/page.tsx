import Header from "./components/UI/header";
import Footer from "./components/UI/footer";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Imagen de fondo fija que cubre toda la viewport */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/Background.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <main className="flex-1 relative z-10">
        <Header />
        <section className="w-full flex justify-start px-4 md:px-16 py-8 md:py-12 mt-8 md:mt-15 min-h-[calc(100vh-200px)] md:min-h-[calc(100vh-150px)]">
          <div
            className="flex flex-col items-start justify-center md:justify-start"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            <Link
              href="/contacto"
              className="bg-rose-300 text-black font-medium px-6 md:px-8 py-3 md:py-4 rounded-full flex items-center justify-between w-64 md:w-72 hover:bg-pink-400 transition-colors shadow-lg mb-8 md:mb-16"
            >
              <span className="text-base md:text-lg">Agenda tu cita</span>
              <span className="bg-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-sm">
                <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5 text-black" />
              </span>
            </Link>

            <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-light leading-tight">
              Presenta una
              <br />
              sonrisa <span className="font-normal">Encantadora</span>
            </h1>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
