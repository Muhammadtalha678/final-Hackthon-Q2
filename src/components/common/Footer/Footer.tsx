import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold mb-6">Funiro.</h2>
          <p className="text-gray-500 mt-2">
            400 University Drive Suite 200 Coral Gables, <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-gray-400  mb-6 font-medium">Links</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline font-medium">Home</Link></li>
            <li><Link href="#" className="hover:underline font-medium">Shop</Link></li>
            <li><Link href="#" className="hover:underline font-medium">About</Link></li>
            <li><Link href="#" className="hover:underline font-medium">Contact</Link></li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-gray-400  mb-6 font-medium">Help</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline font-medium">Payment Options</Link></li>
            <li><Link href="#" className="hover:underline font-medium">Returns</Link></li>
            <li><Link href="#" className="hover:underline font-medium">Privacy Policies</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-gray-400  mb-6 font-medium">Newsletter</h3>
          <div className=" lg:flex-row flex-col pb-1">
            <input 
              type="email" 
              placeholder="Enter Your Email Address" 
              className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-400 border-b border-gray-900"
            />
          
            <button className="ml-2 font-medium hover:underline border-b border-gray-900">SUBSCRIBE</button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-8 pt-4 font-no  text-gray-500 text-sm">
        2023 Funiro. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;