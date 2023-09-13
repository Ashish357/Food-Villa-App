import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { FAQ } from "../constants";

const Section = ({ id, title, description, isVisible, setIsVisible }) => {
  return (
    <div
      className="flex bg-white flex-col  rounded-sm p-6 border-b-2 cursor-pointer"
      onClick={() => (isVisible ? setIsVisible(false) : setIsVisible(true))}
    >
      <div className="flex justify-between items-center">
        <h3 className=" text-base font-medium">{title}</h3>
        {isVisible ? <SlArrowUp /> : <SlArrowDown className="cursor-pointer" />}
      </div>
      {isVisible && (
        <p className="text-sm pt-2 text-slate-500">{description}</p>
      )}
    </div>
  );
};

const Help = () => {
  const [visibleSection, setVisibleSection] =
    useState(""); /* Initially description of all questions are hidden */

  return (
    <div className="bg-slate-50 w-[80vw] flex-grow font-poppins mx-auto">
      <h1 className="py-5 font-bold text-center text-2xl bg-slate-900 text-white ">
        FAQs
      </h1>
      {FAQ.map((question) => {
        return (
          <Section
            key={question.id}
            id={question.id}
            title={question.title}
            description={question.description}
            isVisible={visibleSection === question.id}
            setIsVisible={(param) => {
              if (param) {
                setVisibleSection(question.id);
              } else {
                setVisibleSection(" ");
              }
            }}
          />
        );
      })}
    </div>
  );
};

export default Help;