export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-6 text-center">
        <p>© {new Date().getFullYear()} Astro Ajay. All rights reserved.</p>
      </footer>

      <div className="fixed bottom-1 right-6 text-xs text-gray-400">
        Developed by{" "}
        <a
          href="https://shubhamkumarjha.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:underline"
        >
          Shubham Jha
        </a>
      </div>
    </>
  );
}
