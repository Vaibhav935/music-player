import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="pl-8 pr-5 mt-15">
      <div className="border-t border-t-gray-700">
        <div className="flex gap-20 text-white mt-15">
          <div>
            <h1 className="font-bold mb-3">Company</h1>
            <p className="font-semibold hover:underline cursor-pointer">
              About
            </p>
            <p className="font-semibold hover:underline cursor-pointer">Jobs</p>
            <p className="font-semibold hover:underline cursor-pointer">
              For the Record
            </p>
          </div>

          <div>
            <h1 className="font-bold mb-3">Communities</h1>
            <p className="font-semibold hover:underline cursor-pointer">
              For Artists
            </p>
            <p className="font-semibold hover:underline cursor-pointer">
              Developers
            </p>
            <p className="font-semibold hover:underline cursor-pointer">
              Advertising
            </p>
            <p className="font-semibold hover:underline cursor-pointer">
              Investors
            </p>
            <p className="font-semibold hover:underline cursor-pointer">
              Vendors
            </p>
          </div>

          <div>
            <h1 className="font-bold mb-3">Useful links</h1>
            <p className="font-semibold hover:underline cursor-pointer">
              Support
            </p>
            <p className="font-semibold hover:underline cursor-pointer">
              Free Mobile App
            </p>
            <p className="font-semibold hover:underline cursor-pointer">
              Popular by Country
            </p>
            <p className="font-semibold hover:underline cursor-pointer">
              Import your music
            </p>
          </div>

          <div>
            <h1 className="font-bold mb-3">Spotify Plans</h1>
            <p className="font-semibold hover:underline cursor-pointer">
              Premium Lite
            </p>
            <p className="font-semibold hover:underline cursor-pointer">
              Premium Standard
            </p>
            <p className="font-semibold hover:underline cursor-pointer">
              Premium Platinum
            </p>
            <p className="font-semibold hover:underline cursor-pointer">
              Premium Student
            </p>
            <p className="font-semibold hover:underline cursor-pointer">
              Spotify Free
            </p>
          </div>

          <div className="flex  flex-col gap-5">
            <div className="p-2 bg-gray-700 rounded-full cursor-pointer ">
              <Instagram size={16} color="#ffffff" strokeWidth={3} />
            </div>
            <div className="p-2 bg-gray-700 rounded-full cursor-pointer ">
              <Twitter size={16} color="#ffffff" strokeWidth={3} />
            </div>
            <div className="p-2 bg-gray-700 rounded-full cursor-pointer ">
              <Facebook size={16} color="#ffffff" strokeWidth={3} />
            </div>
          </div>
        </div>

        <div className="mt-15">
          <div className="flex justify-between items-center text-gray-400 text-sm mt-6 border-t border-t-gray-700 py-15">
            <div className="flex gap-6">
              <span className="hover:underline cursor-pointer">Legal</span>
              <span className="hover:underline cursor-pointer">
                Safety & Privacy Center
              </span>
              <span className="hover:underline cursor-pointer">
                Privacy Policy
              </span>
              <span className="hover:underline cursor-pointer">Cookies</span>
              <span className="hover:underline cursor-pointer">About Ads</span>
              <span className="hover:underline cursor-pointer">
                Accessibility
              </span>
            </div>

            <div>
              <p>© 2025 Spotify AB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
