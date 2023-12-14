import React from 'react'

const MailIcon = ({ className, ...props }) => {
   return (
      <svg
         id="Layer_1"
         //style="enable-background:new 0 0 128 128;"
         version="1.1"
         viewBox="0 0 128 128"
         xmlSpace="preserve"
         xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink"
         className={className}
         {...props}
      >
         <style type="text/css"></style>
         <g>
            <circle className="st0" cx="64" cy="64" r="64" />
         </g>
         <g>
            <g>
               <path className="st1" d="M64,28" />
            </g>
         </g>
         <g>
            <g>
               <path
                  fill="black"
                  className="st1"
                  d="M64,72.4l38.2-32.7c-0.6-0.4-1.4-0.7-2.2-0.7H28c-0.8,0-1.6,0.3-2.2,0.7L64,72.4z"
               />
            </g>
            <g>
               <path
                  fill="black"
                  className="st1"
                  d="M66.6,75.4c-1.5,1.3-3.7,1.3-5.2,0L24,43.5V85c0,2.2,1.8,4,4,4h72c2.2,0,4-1.8,4-4V43.4L66.6,75.4z"
               />
            </g>
         </g>
      </svg>
   )
}

export default MailIcon
