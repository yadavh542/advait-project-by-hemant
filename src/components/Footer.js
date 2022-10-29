import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import {
  EmailShareButton,
  EmailIcon,
} from "react-share";


const Footer = () => {
  const{langEng} = useGlobalContext();
  const emailShareUrl = "support@advait.org.in";
  const title = "Advait Foundation";

  function handlePlayStore() {
    
      setTimeout(() => {
        // 👇️ redirects to an external URL
        window.location.replace('https://play.google.com/store/apps/details?id=org.acharyaprashant.apbooks');
      }, 500);
  
      
  }

  function handleAppStore() {
    
    setTimeout(() => {
      // 👇️ redirects to an external URL
      window.location.replace('https://apps.apple.com/in/app/acharya-prashant/id1603611866');
    }, 500);

    
}


  return (
    <div className="bg-slate-900 pb-16">
      <div className="p-8 text-white min-[320px]:mb-10 lg:mb-4 grid min-[320px]:grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
        <div>
          <h1 className="font-bold text-lg min-[320px]:mt-8 lg:mt-4">{langEng?'LIVE EVENTS':'सजीव सत्र'}</h1>
          <br />
          <p 
            onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/camps`)}
            className="hover:text-orange-400 cursor-pointer">
            {langEng?'Vedant Mahotsav':'वेदांत महोत्सव'}
          </p>
          <br />
          <p 
          onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/online-courses/gita`)}
          className="hover:text-orange-400 cursor-pointer">{langEng?'Geeta Course':'गीता कोर्स'}</p>
          <br />
          <p 
          onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/online-courses/upanishad`)}
          className="hover:text-orange-400 cursor-pointer">
            {langEng?'Institutional Sessions':'शैक्षणिक संस्थानों में सत्र'}
          </p>
        </div>
        <div>
          <h1 className="font-bold text-lg min-[320px]:mt-8 lg:mt-4">{langEng?'WISDOM CONTENT':'बोध साहित्य'}</h1>
          <br />
          <p 
          onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/courses`)}
          className="hover:text-orange-400 cursor-pointer">{langEng?'Wisdom Courses':'वीडिओ कोर्सेस'}</p>
          <br />
          <p 
          onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/books`)}
          className="hover:text-orange-400 cursor-pointer">{langEng?'His Books':'उनकी पुस्तकें'}</p>
          <br />
          <p 
          onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/circle`)}
          className="hover:text-orange-400 cursor-pointer">{langEng?'AP Circle':'ए.पी. सर्किल'}</p>
        </div>
        <div>
          <h1 className="font-bold text-lg min-[320px]:mt-8 lg:mt-4">{langEng?'MORE':'अधिक जाने'}</h1>
          <br />
          <p 
          onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/ap-intro`)}
          className="hover:text-orange-400 cursor-pointer">
           {langEng?'About Acharya Prashant':'आचार्य प्रशांत के बारे में'}
          </p>
          <br />
          <p 
          onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/vedant`)}
          className="hover:text-orange-400 cursor-pointer">
            {langEng?'Ghar Ghar Upnishad':'घर घर उपनिषद'}
          </p>
          <br />
          <p 
          onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/media`)}
          className="hover:text-orange-400 cursor-pointer">
           {langEng? 'Media and Public Interaction':'मीडिया व प्रेस प्रकाशनी'}
          </p>
          <br />
          <p 
          onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/invite`)}
          className="hover:text-orange-400 cursor-pointer">
            {langEng?'Talks with Acharya Prashant':'आचार्य प्रशांत संग संवाद'}
          </p>
        </div>
        <div>
          <h1 className="font-bold text-lg min-[320px]:mt-8 lg:mt-4">{langEng?'SOCIAL MEDIA':'सोशल मीडिया'}</h1>
          <br />
          <p className="hover:text-orange-400 cursor-pointer mb-2">
            {langEng?'For English':'अँग्रेजी के लिये'}
          </p>

          <i 
          onClick={()=>window.location.replace(`https://www.youtube.com/c/AcharyaPrashant`)}
          className="bi bi-youtube cursor-pointer hover:text-orange-400 mr-1.5"></i>
          <i 
          onClick={()=>window.location.replace(`https://twitter.com/Prashant_Advait`)}
          className="bi bi-twitter cursor-pointer hover:text-orange-400 mr-1.5"></i>
          <i 
          onClick={()=>window.location.replace(`https://www.facebook.com/AdvaitAcharyaPrashant`)}
          className="bi bi-facebook cursor-pointer hover:text-orange-400 mr-1.5"></i>
          <i 
          onClick={()=>window.location.replace(`https://www.instagram.com/acharya_prashant_paf/`)}
          className="bi bi-instagram cursor-pointer hover:text-orange-400 mr-1.5"></i>
          <i 
          onClick={()=>window.location.replace(`https://en.wikipedia.org/wiki/Acharya_Prashant`)}
          className="bi bi-wordpress cursor-pointer hover:text-orange-400 mr-1.5"></i>
          <p className="hover:text-orange-400 cursor-pointer mt-5 mb-2">
           {langEng? 'For Hindi':'हिंदी के लिये'}
          </p>
          <i 
          onClick={()=>window.location.replace(`https://www.youtube.com/c/ShriPrashant`)}
          className="bi bi-youtube cursor-pointer hover:text-orange-400 mr-1.5"></i>
          <i 
          onClick={()=>window.location.replace(`https://twitter.com/Advait_Prashant`)}
          className="bi bi-twitter cursor-pointer hover:text-orange-400 mr-1.5"></i>
          <i 
          onClick={()=>window.location.replace(`https://www.facebook.com/Acharya.Prashant.Advait`)}
          className="bi bi-facebook cursor-pointer hover:text-orange-400 mr-1.5"></i>
          <i 
          onClick={()=>window.location.replace(`https://www.instagram.com/acharya_prashant_ap/`)}
          className="bi bi-instagram cursor-pointer hover:text-orange-400 mr-1.5"></i>
        </div>
        <div>
          <h1 className="font-bold text-lg min-[320px]:mt-8 lg:mt-4">{langEng?'DOWNLOAD APP':'डाउनलोड ऐप'}</h1>
          <br />
          <div className="flex">
            <img
              src="https://acharyaprashant.org/images/ic_aplogo.png"
              className="h-6 w-6 rounded-full mr-2"
            />
            <p className="text-md">{langEng?'Acharya Prashant':'आचार्य प्रशांत'}</p>
          </div>
          <br />
          <img
            onClick={handlePlayStore}
            className="h-10 cursor-pointer border-2 border-white rounded-md"
            src="https://acharyaprashant.org/images/ic_googleplay.png"
          />
          <br />
          <img
            onClick={handleAppStore}
            className="h-10 cursor-pointer border-2 border-white rounded-md"
            src="https://acharyaprashant.org/images/ic_appstore.png"
          />
        </div>
        <div>
          <h1 className="font-bold text-lg min-[320px]:mt-8 lg:mt-4">{langEng?'CONTACT US':'सम्पर्क करें'}</h1>
          <br />

          {/* Send Email to */}

          <a href="mailto:support@advait.org.in" className="flex">
          <span>
              <i className="bi bi-envelope cursor-pointer mr-1.5"></i>  
            </span>
          <p className="hover:text-orange-500 cursor-pointer">
            support@advait.org.in
          </p>
          </a>
          <br/>

          {/* Chat on Whatsapp */}

          <span className="flex">
          <i className="bi bi-whatsapp cursor-pointer mr-1.5"></i>
          <p 
          onClick={()=>window.open('https://api.whatsapp.com/send/?phone=%2B919643750710&text&type=phone_number&app_absent=0','_blank')}
          className="hover:text-orange-500 cursor-pointer">
             
            <span>
            +91 9650585100</span>
          </p></span>
          <br />

          {/* phone call */}

          <a href="tel:+919650585100" className="flex"> 
          <span>
              <i className="bi bi-telephone-fill cursor-pointer mr-1.5"></i>
            </span>
          <p className="hover:text-orange-400 cursor-pointer">
            
            +91 9650585100
          </p>
          </a>

          <br />

          {/* Fill Form */}

          <button 
          onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/enquiry`)}
          className="px-2 py-0.5 font-bold text-sm hover:text-orange-400 border-2 hover:border-orange-400">
            {langEng?'Fill Form to Connect':'जुड़ने के लिए फ़ॉर्म भरें'}
          </button>

        </div>
      </div>

      <hr className="min-[320px]:w-11/12 md:w-4/5 lg:3/4 flex justify-center mx-auto" />

      <div className="text-white mt-5 text-sm min-[320px]:ml-7 md:mx-auto md:flex justify-center items-center">
        <p className="mr-16 min-[320px]:mb-2 md:flex">{langEng?'Copyright © 2022 PrashantAdvait Foundation':'कॉपीराइट © 2022 प्रशांतअद्वैत फाउंडेशन'}</p>
        <p className="min-[320px]:mb-2">
          <span 
          onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/terms-and-conditions`)}
          className="hover:text-orange-400 cursor-pointer ">
            {langEng?'Terms & Conditions':'नियम एवं शर्तें'} &ensp;
          </span> | 
          <span 
          onClick={()=>window.location.replace(`https://acharyaprashant.org/${langEng?'en':'hi'}/privacy-policy`)}
          className="hover:text-orange-400 cursor-pointer">
           &ensp; {langEng?'Privacy Policy':'गोपनीयता नीति'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
