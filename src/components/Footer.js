import React from "react";


const Footer = () => {
  return (
    <div className="bg-slate-900 pb-16">
      <div className="p-8 text-white mb-10 grid min-[320px]:grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
        <div>
          <h1 className="font-bold text-lg min-[320px]:mt-8">LIVE EVENTS</h1>
          <br />
          <p className="hover:text-orange-400 cursor-pointer">
            Vedant Mahotsav
          </p>
          <br />
          <p className="hover:text-orange-400 cursor-pointer">Geeta Course</p>
          <br />
          <p className="hover:text-orange-400 cursor-pointer">
            Institutional Sessions
          </p>
        </div>
        <div>
          <h1 className="font-bold text-lg min-[320px]:mt-8">WISDOM CONTENT</h1>
          <br />
          <p className="hover:text-orange-400 cursor-pointer">Wisdom Courses</p>
          <br />
          <p className="hover:text-orange-400 cursor-pointer">His Books</p>
          <br />
          <p className="hover:text-orange-400 cursor-pointer">AP Circle</p>
        </div>
        <div>
          <h1 className="font-bold text-lg min-[320px]:mt-8">MORE</h1>
          <br />
          <p className="hover:text-orange-400 cursor-pointer">
            About Acharya Prashant
          </p>
          <br />
          <p className="hover:text-orange-400 cursor-pointer">
            Ghar Ghar Upnishad
          </p>
          <br />
          <p className="hover:text-orange-400 cursor-pointer">
            Media and Public Interaction
          </p>
          <br />
          <p className="hover:text-orange-400 cursor-pointer">
            Tals with Acharya Prashant
          </p>
        </div>
        <div>
          <h1 className="font-bold text-lg min-[320px]:mt-8">SOCIAL MEDIA</h1>
          <br />
          <p className="hover:text-orange-400 cursor-pointer mb-2">
            For English
          </p>

          <i className="bi bi-youtube cursor-pointer hover:text-orange-400 mr-1.5"></i>
          <i className="bi bi-twitter cursor-pointer hover:text-orange-400 mr-1.5"></i>
          <i className="bi bi-facebook cursor-pointer hover:text-orange-400 mr-1.5"></i>
          <i className="bi bi-instagram cursor-pointer hover:text-orange-400 mr-1.5"></i>
          <i className="bi bi-wordpress cursor-pointer hover:text-orange-400 mr-1.5"></i>
          <p className="hover:text-orange-400 cursor-pointer mt-5 mb-2">
            For Hindi
          </p>
          <i className="bi bi-youtube cursor-pointer hover:text-orange-400 mr-1.5"></i>
          <i className="bi bi-twitter cursor-pointer hover:text-orange-400 mr-1.5"></i>
          <i className="bi bi-facebook cursor-pointer hover:text-orange-400 mr-1.5"></i>
          <i className="bi bi-instagram cursor-pointer hover:text-orange-400 mr-1.5"></i>
        </div>
        <div>
          <h1 className="font-bold text-lg min-[320px]:mt-8">DOWNLOAD APP</h1>
          <br />
          <div className="flex">
            <img
              src="https://acharyaprashant.org/images/ic_aplogo.png"
              className="h-6 w-6 rounded-full mr-2"
            />
            <p className="hover:text-orange-400">Acharya Prashant</p>
          </div>
          <br />
          <img
            className="h-10 cursor-pointer border-2 border-white rounded-md"
            src="https://acharyaprashant.org/images/ic_googleplay.png"
          />
          <br />
          <img
            className="h-10 cursor-pointer border-2 border-white rounded-md"
            src="https://acharyaprashant.org/images/ic_appstore.png"
          />
        </div>
        <div>
          <h1 className="font-bold text-lg min-[320px]:mt-8">CONTACT US</h1>
          <br />
          <p className="hover:text-orange-400 cursor-pointer">
            <span>
              <i className="bi bi-envelope cursor-pointer hover:text-orange-400 mr-1.5"></i>
            </span>
            support@advait.org.in
          </p>
          <br />
          <p className="hover:text-orange-400 cursor-pointer">
            <span>
              <i className="bi bi-whatsapp cursor-pointer hover:text-orange-400 mr-1.5"></i>
            </span>
            +91 9650585100
          </p>
          <br />
          <p className="hover:text-orange-400 cursor-pointer">
            <span>
              <i className="bi bi-telephone-fill cursor-pointer hover:text-orange-400 mr-1.5"></i>
            </span>
            +91 9650585100
          </p>
          <br />
          <button className="px-2 py-0.5 font-bold text-sm hover:text-orange-400 border-2 hover:border-orange-400">
            Fill Form to Connect
          </button>
        </div>
      </div>

      <hr className="min-[320px]:w-11/12 md:w-4/5 lg:3/4 flex justify-center mx-auto" />

      <div className="text-white mt-5 text-sm min-[320px]:ml-7 md:mx-auto md:flex justify-center items-center">
        <p className="mr-16 min-[320px]:mb-2">Copyright © 2022 PrashantAdvait Foundation</p>
        <p>
          <span className="hover:text-orange-400 cursor-pointer ">
            Terms & Conditions
          </span>{" "}
          |{" "}
          <span className="hover:text-orange-400 cursor-pointer">
            Privacy Policy
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
