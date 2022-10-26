import React from "react";
import { useGlobalContext } from "../context";


const Footer = () => {
  const{langEng} = useGlobalContext();
  return (
    <div className="bg-slate-900 pb-16">
      <div className="p-8 text-white mb-10 grid min-[320px]:grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
        <div>
          <h1 className="font-bold text-lg min-[320px]:mt-8">{langEng?'LIVE EVENTS':'सजीव सत्र'}</h1>
          <br />
          <p className="hover:text-orange-400 cursor-pointer">
            {langEng?'Vedant Mahotsav':'वेदांत महोत्सव'}
          </p>
          <br />
          <p className="hover:text-orange-400 cursor-pointer">{langEng?'Geeta Course':'गीता कोर्स'}</p>
          <br />
          <p className="hover:text-orange-400 cursor-pointer">
            {langEng?'Institutional Sessions':'शैक्षणिक संस्थानों में सत्र'}
          </p>
        </div>
        <div>
          <h1 className="font-bold text-lg min-[320px]:mt-8">{langEng?'WISDOM CONTENT':'बोध साहित्य'}</h1>
          <br />
          <p className="hover:text-orange-400 cursor-pointer">{langEng?'Video Courses':'वीडिओ कोर्सेस'}</p>
          <br />
          <p className="hover:text-orange-400 cursor-pointer">{langEng?'His Books':'उनकी पुस्तकें'}</p>
          <br />
          <p className="hover:text-orange-400 cursor-pointer">{langEng?'AP Circle':'ए.पी. सर्किल'}</p>
        </div>
        <div>
          <h1 className="font-bold text-lg min-[320px]:mt-8">{langEng?'MORE':'अधिक जाने'}</h1>
          <br />
          <p className="hover:text-orange-400 cursor-pointer">
           {langEng?'About Acharya Prashant':'आचार्य प्रशांत के बारे में'}
          </p>
          <br />
          <p className="hover:text-orange-400 cursor-pointer">
            {langEng?'Ghar Ghar Upnishad':'घर घर उपनिषद'}
          </p>
          <br />
          <p className="hover:text-orange-400 cursor-pointer">
           {langEng? 'Media and Public Interaction':'मीडिया व प्रेस प्रकाशनी'}
          </p>
          <br />
          <p className="hover:text-orange-400 cursor-pointer">
            {langEng?'Talks with Acharya Prashant':'आचार्य प्रशांत संग संवाद'}
          </p>
        </div>
        <div>
          <h1 className="font-bold text-lg min-[320px]:mt-8">{langEng?'SOCIAL MEDIA':'सोशल मीडिया'}</h1>
          <br />
          <p className="hover:text-orange-400 cursor-pointer mb-2">
            {langEng?'For English':'अँग्रेजी के लिये'}
          </p>

          <i className="bi bi-youtube cursor-pointer hover:text-orange-400 mr-1.5"></i>
          <i className="bi bi-twitter cursor-pointer hover:text-orange-400 mr-1.5"></i>
          <i className="bi bi-facebook cursor-pointer hover:text-orange-400 mr-1.5"></i>
          <i className="bi bi-instagram cursor-pointer hover:text-orange-400 mr-1.5"></i>
          <i className="bi bi-wordpress cursor-pointer hover:text-orange-400 mr-1.5"></i>
          <p className="hover:text-orange-400 cursor-pointer mt-5 mb-2">
           {langEng? 'For Hindi':'हिंदी के लिये'}
          </p>
          <i className="bi bi-youtube cursor-pointer hover:text-orange-400 mr-1.5"></i>
          <i className="bi bi-twitter cursor-pointer hover:text-orange-400 mr-1.5"></i>
          <i className="bi bi-facebook cursor-pointer hover:text-orange-400 mr-1.5"></i>
          <i className="bi bi-instagram cursor-pointer hover:text-orange-400 mr-1.5"></i>
        </div>
        <div>
          <h1 className="font-bold text-lg min-[320px]:mt-8">{langEng?'DOWNLOAD APP':'डाउनलोड ऐप'}</h1>
          <br />
          <div className="flex">
            <img
              src="https://acharyaprashant.org/images/ic_aplogo.png"
              className="h-6 w-6 rounded-full mr-2"
            />
            <p className="hover:text-orange-400">{langEng?'Acharya Prashant':'आचार्य प्रशांत'}</p>
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
          <h1 className="font-bold text-lg min-[320px]:mt-8">{langEng?'CONTACT US':'सम्पर्क करें'}</h1>
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
            {langEng?'Fill Form to Connect':'जुड़ने के लिए फ़ॉर्म भरें'}
          </button>
        </div>
      </div>

      <hr className="min-[320px]:w-11/12 md:w-4/5 lg:3/4 flex justify-center mx-auto" />

      <div className="text-white mt-5 text-sm min-[320px]:ml-7 md:mx-auto md:flex justify-center items-center">
        <p className="mr-16 min-[320px]:mb-2 md:flex">{langEng?'Copyright © 2022 PrashantAdvait Foundation':'कॉपीराइट © 2022 प्रशांतअद्वैत फाउंडेशन'}</p>
        <p className="min-[320px]:mb-2">
          <span className="hover:text-orange-400 cursor-pointer ">
            {langEng?'Terms & Conditions':'नियम एवं शर्तें'} &ensp;
          </span> | <span className="hover:text-orange-400 cursor-pointer">
           &ensp; {langEng?'Privacy Policy':'गोपनीयता नीति'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
