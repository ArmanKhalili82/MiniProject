import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-5 bg-blue-800 text-center text-surface/75 text-white lg:text-left">
  <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-white/10 lg:justify-between">
    <div className="me-12 hidden lg:block">
      <span>Get connected with us on social networks:</span>
    </div>
    <div className="flex justify-center">
      <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 320 512">
          <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
        </svg>
      </a>
      <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512">
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
        </svg>
      </a>
      <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 488 512">
          <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
        </svg>
      </a>
      <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      </a>
      <a href="#!" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512">
          <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
        </svg>
      </a>
      <a href="#!" className="[&>svg]:h-4 [&>svg]:w-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512">
          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
        </svg>
      </a>
    </div>
  </div>

  <div className="mx-6 py-10 text-center md:text-left">
    <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      <div className="">
        <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
          <span className="me-3 [&>svg]:h-4 [&>svg]:w-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
            </svg>
          </span>
          University
        </h6>
        <p>
          Here you can use rows and columns to organize your footer
          content. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit.
        </p>
      </div>
      { /* Products section */ }
      <div>
        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Products
        </h6>
        <p className="mb-4">
          <a href="#!">Asp.Net Core</a>
        </p>
        <p className="mb-4">
          <a href="#!">React</a>
        </p>
        <p className="mb-4">
          <a href="#!">Sql Server</a>
        </p>
        <p>
          <a href="#!">Laravel</a>
        </p>
      </div>
      <div>
        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Useful links
        </h6>
        <p className="mb-4">
          <a href="#!">Students</a>
        </p>
        <p className="mb-4">
          <a href="#!">Teachers</a>
        </p>
        <p className="mb-4">
          <a href="#!">Courses</a>
        </p>
        <p>
          <a href="#!">Helps</a>
        </p>
      </div>
      { /* Contact section */ }
      <div>
        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Contact
        </h6>
        <p className="mb-4 flex items-center justify-center md:justify-start">
          <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
          </span>
          Tehran
        </p>
        <p className="mb-4 flex items-center justify-center md:justify-start">
          <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </span>
          university@gmail.com
        </p>
        <p className="mb-4 flex items-center justify-center md:justify-start">
          <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
          </span>
          + 98 999 999 999
        </p>
        <p className="flex items-center justify-center md:justify-start">
          <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z" clipRule="evenodd" />
            </svg>
          </span>
          + 98 999 999 999
        </p>
      </div>
    </div>
  </div>

  <div className="bg-black/5 p-6 text-center">
    <span>© 2024 Copyright:</span>
    <a className="font-semibold" href="https://tw-elements.com/">University</a>
  </div>
</footer>
  )
}

export default Footer



// <footer className='relative min-h-60 text-white'>
    //     <div>
    //         <div>
    //             <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><style>{`
    //             .path-0{
    //                 animation:pathAnim-0 4s;
    //                 animation-timing-function: linear;
    //                 animation-iteration-count: infinite;
    //             }
    //             @keyframes pathAnim-0{
    //                 0%{
    //                 d: path("M 0,700 L 0,131 C 166.2666666666667,140.73333333333335 332.5333333333334,150.46666666666667 510,152 C 687.4666666666666,153.53333333333333 876.1333333333334,146.86666666666665 1033,142 C 1189.8666666666666,137.13333333333335 1314.9333333333334,134.06666666666666 1440,131 L 1440,700 L 0,700 Z");
    //                 }
    //                 25%{
    //                 d: path("M 0,700 L 0,131 C 151.46666666666664,109.66666666666666 302.9333333333333,88.33333333333333 451,96 C 599.0666666666667,103.66666666666667 743.7333333333333,140.33333333333334 908,151 C 1072.2666666666667,161.66666666666666 1256.1333333333332,146.33333333333331 1440,131 L 1440,700 L 0,700 Z");
    //                 }
    //                 50%{
    //                 d: path("M 0,700 L 0,131 C 141.46666666666664,110.33333333333334 282.9333333333333,89.66666666666667 462,94 C 641.0666666666667,98.33333333333333 857.7333333333333,127.66666666666666 1027,138 C 1196.2666666666667,148.33333333333334 1318.1333333333332,139.66666666666669 1440,131 L 1440,700 L 0,700 Z");
    //                 }
    //                 75%{
    //                 d: path("M 0,700 L 0,131 C 157.33333333333331,128.73333333333335 314.66666666666663,126.46666666666667 483,125 C 651.3333333333334,123.53333333333333 830.6666666666667,122.86666666666667 992,124 C 1153.3333333333333,125.13333333333333 1296.6666666666665,128.06666666666666 1440,131 L 1440,700 L 0,700 Z");
    //                 }
    //                 100%{
    //                 d: path("M 0,700 L 0,131 C 166.2666666666667,140.73333333333335 332.5333333333334,150.46666666666667 510,152 C 687.4666666666666,153.53333333333333 876.1333333333334,146.86666666666665 1033,142 C 1189.8666666666666,137.13333333333335 1314.9333333333334,134.06666666666666 1440,131 L 1440,700 L 0,700 Z");
    //                 }
    //             }`}</style><path d="M 0,700 L 0,131 C 166.2666666666667,140.73333333333335 332.5333333333334,150.46666666666667 510,152 C 687.4666666666666,153.53333333333333 876.1333333333334,146.86666666666665 1033,142 C 1189.8666666666666,137.13333333333335 1314.9333333333334,134.06666666666666 1440,131 L 1440,700 L 0,700 Z" stroke="none" strokeWidth={0} fill="#00008b" fillOpacity="0.4" className="transition-all duration-300 ease-in-out delay-150 path-0" /><style>{`
    //             .path-1{
    //                 animation:pathAnim-1 4s;
    //                 animation-timing-function: linear;
    //                 animation-iteration-count: infinite;
    //             }
    //             @keyframes pathAnim-1{
    //                 0%{
    //                 d: path("M 0,700 L 0,306 C 196.53333333333336,312.93333333333334 393.0666666666667,319.8666666666667 543,334 C 692.9333333333333,348.1333333333333 796.2666666666667,369.4666666666667 938,366 C 1079.7333333333333,362.5333333333333 1259.8666666666668,334.26666666666665 1440,306 L 1440,700 L 0,700 Z");
    //                 }
    //                 25%{
    //                 d: path("M 0,700 L 0,306 C 168.13333333333333,300.5333333333333 336.26666666666665,295.06666666666666 476,295 C 615.7333333333333,294.93333333333334 727.0666666666666,300.26666666666665 883,303 C 1038.9333333333334,305.73333333333335 1239.4666666666667,305.8666666666667 1440,306 L 1440,700 L 0,700 Z");
    //                 }
    //                 50%{
    //                 d: path("M 0,700 L 0,306 C 172.53333333333336,335.06666666666666 345.0666666666667,364.1333333333333 499,355 C 652.9333333333333,345.8666666666667 788.2666666666667,298.53333333333336 942,284 C 1095.7333333333333,269.46666666666664 1267.8666666666668,287.73333333333335 1440,306 L 1440,700 L 0,700 Z");
    //                 }
    //                 75%{
    //                 d: path("M 0,700 L 0,306 C 126.66666666666669,285.3333333333333 253.33333333333337,264.66666666666663 422,256 C 590.6666666666666,247.33333333333334 801.3333333333333,250.66666666666669 978,261 C 1154.6666666666667,271.3333333333333 1297.3333333333335,288.66666666666663 1440,306 L 1440,700 L 0,700 Z");
    //                 }
    //                 100%{
    //                 d: path("M 0,700 L 0,306 C 196.53333333333336,312.93333333333334 393.0666666666667,319.8666666666667 543,334 C 692.9333333333333,348.1333333333333 796.2666666666667,369.4666666666667 938,366 C 1079.7333333333333,362.5333333333333 1259.8666666666668,334.26666666666665 1440,306 L 1440,700 L 0,700 Z");
    //                 }
    //             }`}</style><path d="M 0,700 L 0,306 C 196.53333333333336,312.93333333333334 393.0666666666667,319.8666666666667 543,334 C 692.9333333333333,348.1333333333333 796.2666666666667,369.4666666666667 938,366 C 1079.7333333333333,362.5333333333333 1259.8666666666668,334.26666666666665 1440,306 L 1440,700 L 0,700 Z" stroke="none" strokeWidth={0} fill="#00008b" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-1" /><style>{`
    //             .path-2{
    //                 animation:pathAnim-2 4s;
    //                 animation-timing-function: linear;
    //                 animation-iteration-count: infinite;
    //             }
    //             @keyframes pathAnim-2{
    //                 0%{
    //                 d: path("M 0,700 L 0,481 C 171.59999999999997,478.4666666666667 343.19999999999993,475.93333333333334 517,464 C 690.8000000000001,452.06666666666666 866.8,430.7333333333333 1021,432 C 1175.2,433.2666666666667 1307.6,457.1333333333333 1440,481 L 1440,700 L 0,700 Z");
    //                 }
    //                 25%{
    //                 d: path("M 0,700 L 0,481 C 157.19999999999993,518.0666666666666 314.39999999999986,555.1333333333333 497,542 C 679.6000000000001,528.8666666666667 887.6000000000001,465.5333333333333 1049,447 C 1210.3999999999999,428.4666666666667 1325.1999999999998,454.73333333333335 1440,481 L 1440,700 L 0,700 Z");
    //                 }
    //                 50%{
    //                 d: path("M 0,700 L 0,481 C 150.40000000000003,472.06666666666666 300.80000000000007,463.1333333333333 450,464 C 599.1999999999999,464.8666666666667 747.2,475.53333333333336 912,480 C 1076.8,484.46666666666664 1258.4,482.73333333333335 1440,481 L 1440,700 L 0,700 Z");
    //                 }
    //                 75%{
    //                 d: path("M 0,700 L 0,481 C 149.33333333333331,495.53333333333336 298.66666666666663,510.0666666666667 439,524 C 579.3333333333334,537.9333333333333 710.6666666666667,551.2666666666667 876,544 C 1041.3333333333333,536.7333333333333 1240.6666666666665,508.8666666666667 1440,481 L 1440,700 L 0,700 Z");
    //                 }
    //                 100%{
    //                 d: path("M 0,700 L 0,481 C 171.59999999999997,478.4666666666667 343.19999999999993,475.93333333333334 517,464 C 690.8000000000001,452.06666666666666 866.8,430.7333333333333 1021,432 C 1175.2,433.2666666666667 1307.6,457.1333333333333 1440,481 L 1440,700 L 0,700 Z");
    //                 }
    //             }`}</style><path d="M 0,700 L 0,481 C 171.59999999999997,478.4666666666667 343.19999999999993,475.93333333333334 517,464 C 690.8000000000001,452.06666666666666 866.8,430.7333333333333 1021,432 C 1175.2,433.2666666666667 1307.6,457.1333333333333 1440,481 L 1440,700 L 0,700 Z" stroke="none" strokeWidth={0} fill="#00008b" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-2" /></svg>
    //         </div>
    //         <div className='absolute grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:bottom-32 px-20'>
    //             <div className='flex flex-col gap-5'>
    //                 <h2 className='text-3xl text-orange-400'>Footer</h2>
    //                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sunt maiores odit aliquid fugiat corporis ea repellat optio laborum officiis.</p>
    //             </div>
    //             <div className='flex flex-col gap-5'>
    //                 <h2 className='text-3xl text-orange-400'>Footer</h2>
    //                 <ul>
    //                     <li>Website</li>
    //                     <li>Tips and Tricks</li>
    //                 </ul>
    //             </div>
    //             <div className='flex flex-col gap-5'>
    //                 <h2 className='text-3xl text-orange-400'>Footer</h2>
    //                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sunt maiores odit aliquid fugiat corporis ea repellat optio laborum officiis.</p>
    //             </div>
    //             <div className='flex flex-col gap-5'>
    //                 <h2 className='text-3xl text-orange-400'>Footer</h2>
    //                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sunt maiores odit aliquid fugiat corporis ea repellat optio laborum officiis.</p>
    //             </div>
    //             <div className='flex flex-col gap-5'>
    //                 <h2 className='text-3xl text-orange-400'>Footer</h2>
    //                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sunt maiores odit aliquid fugiat corporis ea repellat optio laborum officiis.</p>
    //             </div>
    //         </div>
    //     </div>
    // </footer>