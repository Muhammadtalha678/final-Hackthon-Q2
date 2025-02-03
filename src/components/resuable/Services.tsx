import { HeadphonesIcon, Shield, Trophy, Truck } from 'lucide-react'
import React from 'react'

const Services = () => {
  return (
    <div className="bg-[#FAF3EA] py-16 mb-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Trophy className="w-12 h-12 mb-4 text-[#B88E2F]" />
              <h3 className="font-bold mb-2">High Quality</h3>
              <p className="text-[#898989]">crafted from top materials</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="w-12 h-12 mb-4 text-[#B88E2F]" />
              <h3 className="font-bold mb-2">Warranty Protection</h3>
              <p className="text-[#898989]">Over 2 years</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Truck className="w-12 h-12 mb-4 text-[#B88E2F]" />
              <h3 className="font-bold mb-2">Free Shipping</h3>
              <p className="text-[#898989]">Order over 150 $</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <HeadphonesIcon className="w-12 h-12 mb-4 text-[#B88E2F]" />
              <h3 className="font-bold mb-2">24 / 7 Support</h3>
              <p className="text-[#898989]">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Services