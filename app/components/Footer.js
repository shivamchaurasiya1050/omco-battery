export default function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white mt-20">

      <div className="max-w-7xl mx-auto px-8 py-8 text-center">

        <h2 className="text-xl font-semibold text-yellow-400 mb-2">
          OMCO Battery Service
        </h2>

        <p className="text-gray-300">
          Reliable Battery Sales & Service
        </p>

        <p className="mt-4 text-sm text-gray-400">
          © {year} OMCO Battery Service. All rights reserved.
        </p>

      </div>

    </footer>
  );
}