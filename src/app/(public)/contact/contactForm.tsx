import { Phone, Pin, Timer } from "lucide-react";

export default function ContactForm() {
    return (
        <div className="flex flex-col lg:flex-row items-start justify-center min-h-screen p-6 ">
            {/* Contact Information */}
            <div className="bg-white p-8 w-full lg:w-1/3 mb-6 lg:mb-0">
                <div className="space-y-6">
                    <div className="flex items-center gap-3">
                        <span className="text-xl"><Phone /></span>
                        <div>
                            <h2 className="text-lg font-semibold">Address</h2>
                            <p className="text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-xl"><Pin /></span>
                        <div>
                            <h2 className="text-lg font-semibold">Phone</h2>
                            <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                            <p className="text-gray-600">Hotline: +(84) 456-6789</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-xl"><Timer /></span>
                        <div>
                            <h2 className="text-lg font-semibold">Working Time</h2>
                            <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
                            <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8   w-full lg:w-1/2">
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Your name</label>
                        <input type="text" placeholder="Abc" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Email address</label>
                        <input type="email" placeholder="Abc@def.com" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Subject</label>
                        <input type="text" placeholder="This is an optional" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Message</label>
                        <textarea placeholder="Hi! I'd like to ask about" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 h-28" />
                    </div>
                    <button type="submit" className="w-full bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700 transition-all">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
