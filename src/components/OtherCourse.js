import React from "react";
import { useGlobalContext } from "../context";

const OtherCourse = ({ title, subtitle, noOfCourses, image }) => {
  const{langEng} =useGlobalContext();
  return (
    <div className="hover:bg-gray-200 rounded-md min-[320px]:w-full cursor-pointer mr-5 mb-2">
      <div className="px-4 py-1 h-32 flex">
        <img className="rounded-md w-36 object-contain" src={image} />

        <div className="ml-4">
          <h1 className="mt-4 font-bold mb-2">{title}</h1>
          <h2 className="text-gray-500 mb-2">{subtitle}</h2>
          <p className="text-gray-500 mb-2">{noOfCourses} {langEng?'Courses':'कोर्सेस'}</p>
        </div>
      </div>
      <button className="bg-green-100 py-1 px-2 rounded-md text-gray-800 text-xs mb-2 ml-4">
        {langEng?'Series':'श्रृंखला'}
      </button>
      <hr />
    </div>
  );
};

export default OtherCourse;
