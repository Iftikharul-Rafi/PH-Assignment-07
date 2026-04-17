import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] mt-16 py-12 text-white">

      <div className="max-w-4xl mx-auto border-gray-400/40 p-8 text-center rounded-lg">
        

        <h2 className="text-6xl md:text-7xl font-bold tracking-tight">
          KeenKeeper
        </h2>


        <p className="text-gray-200 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>


        <div className="mt-6">
          <p className="text-gray-200 text-sm mb-3">Social Links</p>

          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:scale-105 transition"
            >
              <FaInstagram size={16} />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:scale-105 transition"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full hover:scale-105 transition"
            >
              <FaTwitter size={16} />
            </a>
          </div>
        </div>
      </div>


      <div className="max-w-6xl mx-auto mt-10 border-t border-gray-400/30 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-200 px-4">
        
        <p>© 2026 KeenKeeper. All rights reserved.</p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;..