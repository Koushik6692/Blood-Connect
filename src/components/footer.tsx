export default function Footer() {
    return (
      <footer className="bg-gray-100 py-6 mt-10">
        <div className="container mx-auto text-center text-gray-700">
          <p>© {new Date().getFullYear()} Blood Connect. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="/privacy" className="hover:text-red-600">Privacy Policy</a>
            <a href="/terms" className="hover:text-red-600">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
  }
  