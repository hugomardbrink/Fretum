import React from 'react';

function PlayButton() {
  return (
      <div className="w-full">
          <div className="flex justify-center">
              <button type="button" className="p-1 rounded-full bg-white text-gray-800 hover:text-gray-700 active:text-gray-900">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download" className="w-10 mx-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor"
                            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z">
                     </path>
                  </svg>
              </button>
          </div>
      </div>
  );
}

export default PlayButton;