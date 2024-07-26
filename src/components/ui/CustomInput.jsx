import React, { useState } from 'react';

const CustomInput = ({ type = 'text', value, onChange, placeholder, design, label, labelMore }) => {
  const [isInputActive, setInputActive] = useState(false);  
  
  return (
      <>
        {design === 'search' && <div className=" w-full flex items-center rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6">
            <button id="searchBtn" className="mr-2">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0833 17.4167C14.1334 17.4167 17.4167 14.1334 17.4167 10.0833C17.4167 6.03325 14.1334 2.75 10.0833 2.75C6.03325 2.75 2.75 6.03325 2.75 10.0833C2.75 14.1334 6.03325 17.4167 10.0833 17.4167Z" stroke="#23262A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.25 19.25L15.2625 15.2625" stroke="#23262A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <input 
                onChange={onChange}
                type={type}
                value={value}
                className="block w-80 " 
                placeholder={placeholder}
            />
        </div>}
        {design === 'basic' && <div>
                  <input 
                      onChange={onChange}
                      type={type}
                      value={value}
                      className={`block w-full rounded-md border-0 
                      py-1.5 pl-7 pr-20 text-gray-900 shadow-md ring-1 ring-inset 
                      ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                      focus:ring-sky-600 sm:text-sm sm:leading-6`} 
                      placeholder={placeholder}
                  />
          </div>}

          {design === 'label' && <div className=" w-full flex flex-col justify-center items-start rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6">
            <p className='text-xs opacity-50'>{label}</p>
            <input 
                onChange={onChange}
                type={type}
                value={value}
                className="block w-80 " 
                placeholder={placeholder}
            />
        </div>}

        { design === 'label-more' && 
      <div className='flex flex-col'>
        <div className="w-full flex flex-col justify-center items-start rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6">
          <p className='text-xs opacity-50 self-start'>{label}</p>
          <input 
            onChange={onChange}
            onFocus={() => setInputActive(true)} // 입력 필드에 포커스 될 때
            onBlur={() => setInputActive(false)} // 포커스가 벗어날 때
            type={type}
            value={value}
            className="block w-80" 
            placeholder={placeholder}
          />
        </div>
        <p className={`ml-1 font-bold text-xs text-cyan-400 self-start ${isInputActive ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
          {labelMore}
        </p>
      </div> }


      </>
    );
};

export default CustomInput;

