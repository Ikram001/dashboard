import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen transition-colors duration-300`}>

      <header className="flex justify-between items-center p-4 shadow-md md:px-6">
        <div className="flex items-center gap-4">

          <button
            onClick={() => setSidebarOpen((prev) => !prev)}
            className="md:hidden"
          >
            {sidebarOpen ? (

              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (

              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded"
        >
          {darkMode ? "Light" : "Dark"} Mode
        </button>
      </header>

      <div className="md:grid md:grid-cols-[250px_1fr]">

        <aside
          className={`
            fixed top-0 left-0 h-full w-64 p-4 z-30 transition-transform duration-300 ease-in-out
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}

            md:relative md:translate-x-0 md:block md:shadow-md
          `}
        >
          <ul className="space-y-4 pt-16 md:pt-4">
            <li className="hover:underline cursor-pointer">Dashboard</li>
            <li className="hover:underline cursor-pointer">Orders</li>
            <li className="hover:underline cursor-pointer">Products</li>
            <li className="hover:underline cursor-pointer">Customers</li>
          </ul>
        </aside>

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        <main className="p-6">
          <h2 className="text-xl font-semibold mb-4">Welcome Admin!</h2>
          <div className={`rounded-lg p-4 ${darkMode ? "bg-gray-700" : "bg-gray-200"}`}>
            stats
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
