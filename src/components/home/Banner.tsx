import { Link } from "react-router";

export const Banner = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      {/* IMAGEN DE FONDO */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70 h-full"
        style={{ backgroundImage: "url(/img/img-banner.webp)" }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black opacity-20" />

      {/* CONTENIDO */}
      <div className="relative z-10 flex flex-col items-center justify-center py-20 px-4 text-center lg:py-40 lg:px-8">
        <h1 className="text-4xl font-bold mb-4 lg:text-6xl">
          Los mejores celulares del 2025
        </h1>

        <p className="text-lg mb-8 lg:text-2xl">
          Descubre las ofertas exclusivas y las últimas novedades en celulares
        </p>

        <Link
          to="/celulares"
          className="bg-white hover:bg-amber-50 text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:scale-105 "
        >
          Ver celulares
        </Link>
      </div>
    </div>
  );
};
