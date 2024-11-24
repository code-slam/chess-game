const pawn = '<div class ="piece" id="pawn"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="inherit" d="M12 0a3.85 3.85 0 0 0-3.875 3.846A3.84 3.84 0 0 0 9.73 6.969l-2.79 1.85c0 .622.144 1.114.434 1.649H9.83c-.014.245-.014.549-.014.925q0 .037.006.071c-.064 1.353-.507 3.472-3.62 5.842c-.816.625-1.423 1.495-1.806 2.533a.3.3 0 0 0-.045.084a8.1 8.1 0 0 0-.39 2.516c0 .1.216 1.561 8.038 1.561s8.038-1.46 8.038-1.561c0-2.227-.824-4.048-2.24-5.133c-4.034-3.08-3.586-5.74-3.644-6.838h2.458c.29-.535.434-1.027.434-1.649l-2.79-1.836a3.86 3.86 0 0 0 1.604-3.123A3.87 3.87 0 0 0 13.445.275c-.004-.002-.01.004-.015.004A3.8 3.8 0 0 0 12 0"/></svg></div>'

const king = '<div class ="piece" id="king"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 448 512"><path fill="inherit" d="M224 0c17.7 0 32 14.3 32 32v16h16c17.7 0 32 14.3 32 32s-14.3 32-32 32h-16v48h152c22.1 0 40 17.9 40 40c0 5.3-1 10.5-3.1 15.4L368 400H80L3.1 215.4C1 210.5 0 205.3 0 200c0-22.1 17.9-40 40-40h152v-48h-16c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V32c0-17.7 14.3-32 32-32zM38.6 473.4L80 432h288l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H54.6C42.1 512 32 501.9 32 489.4c0-6 2.4-11.8 6.6-16z"/></svg></div>'

const knight='<div class ="piece" id="knight"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 448 512"><path fill="inherit" d="M96 48L82.7 61.3c-12 12-18.7 28.2-18.7 45.2v132.4c0 10.7 5.3 20.7 14.2 26.6l10.6 7c14.3 9.6 32.7 10.7 48.1 3l3.2-1.6c2.6-1.3 5-2.8 7.3-4.5l49.4-37c6.6-5 15.7-5 22.3 0c10.2 7.7 9.9 23.1-.7 30.3L90.4 350C73.9 361.3 64 380 64 400h320l28.9-159c2.1-11.3 3.1-22.8 3.1-34.3V192C416 86 330 0 224 0H83.8C72.9 0 64 8.9 64 19.8c0 7.5 4.2 14.3 10.9 17.7L96 48zm24 68a20 20 0 1 1 40 0a20 20 0 1 1-40 0zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16c0 12.5 10.1 22.6 22.6 22.6h370.8c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L384 432H64l-41.4 41.4z"/></svg></div>'

const rook= '<div class ="piece" id="rook"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="inherit" d="M4.77 20.23v-3.942h2.684l.684-4.788H5.77v-1h12.462v1h-2.37l.685 4.788h2.685v3.943H4.769ZM7.911 9.616L6.615 3.77q.71.452 1.325.704q.616.252 1.358.252q.827 0 1.501-.272q.674-.272 1.201-.703q.527.43 1.201.703q.674.272 1.482.272q.684 0 1.28-.242q.597-.243 1.44-.714l-1.309 5.846H7.912Z"/></svg></div>'

const queen= '<div class ="piece" id="queen"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path fill="inherit" d="M477.518 181.966a25 25 0 0 1-34.91 23l-62.29 150.26h-248.92l-62.24-150.19a25 25 0 1 1 9.73-7.29l87 71.2l20.92-126.4a25 25 0 1 1 14.7-1.85l54.31 117l54.42-117.3a25 25 0 1 1 14.58 2.08l20.93 126.42l87.26-71.3a25 25 0 1 1 44.51-15.63zm-71.66 241.25h-300v60h300v-60zm-27.75-52h-244.22v36h244.22v-36z"/></svg></div>'

const bishop = '<div class ="piece" id="bishop"><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 320 512"><path fill="inherit" d="M8 287.88c0 51.64 22.14 73.83 56 84.6V416h192v-43.52c33.86-10.77 56-33 56-84.6c0-30.61-10.73-67.1-26.69-102.56L185 285.65a8 8 0 0 1-11.31 0l-11.31-11.31a8 8 0 0 1 0-11.31L270.27 155.1c-20.8-37.91-46.47-72.1-70.87-92.59C213.4 59.09 224 47.05 224 32a32 32 0 0 0-32-32h-64a32 32 0 0 0-32 32c0 15 10.6 27.09 24.6 30.51C67.81 106.8 8 214.5 8 287.88zM304 448H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"/></svg></div>'

// const wpawn = '<div class ="piece" id="wpawn"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 320 512"><path fill="currentColor" d="M232 152a72 72 0 1 0-144 0a72 72 0 1 0 144 0zm24 120h-12.6l10.7 80h-48.4L195 272h-70l-10.7 80H65.9l10.7-80H64c-13.3 0-24-10.7-24-24s10.7-24 24-24c-15.1-20.1-24-45-24-72C40 85.7 93.7 32 160 32s120 53.7 120 120c0 27-8.9 51.9-24 72c13.3 0 24 10.7 24 24s-10.7 24-24 24zM52.7 464h214.6l-16.6-32H69.2l-16.5 32zm207.9-80c12 0 22.9 6.7 28.4 17.3l26.5 51.2c3 5.8 4.6 12.2 4.6 18.7c0 22.5-18.2 40.8-40.8 40.8H40.8C18.2 512 0 493.8 0 471.2c0-6.5 1.6-12.9 4.6-18.7l26.5-51.2c5.4-10.6 16.4-17.3 28.4-17.3h201z"/></svg>></div>'

// const wking = '<div class ="piece" id="wking"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 448 512"><path fill="currentColor" d="M248 24c0-13.3-10.7-24-24-24s-24 10.7-24 24v32h-32c-13.3 0-24 10.7-24 24s10.7 24 24 24h32v40H59.6C26.7 144 0 170.7 0 203.6c0 8.2 1.7 16.3 4.9 23.8L59.1 352h52.3L49 208.2c-.6-1.5-1-3-1-4.6c0-6.4 5.2-11.6 11.6-11.6h328.8c6.4 0 11.6 5.2 11.6 11.6c0 1.6-.3 3.2-1 4.6L336.5 352h52.3L443 227.4c3.3-7.5 4.9-15.6 4.9-23.8c0-32.9-26.7-59.6-59.6-59.6H248v-40h32c13.3 0 24-10.7 24-24s-10.7-24-24-24h-32V24zM101.2 432h245.6l16.6 32H84.7l16.6-32zm283.7-30.7c-5.5-10.6-16.5-17.3-28.4-17.3h-265c-12 0-22.9 6.7-28.4 17.3l-26.5 51.2c-3 5.8-4.6 12.2-4.6 18.7c0 22.6 18.2 40.8 40.8 40.8h302.4c22.5 0 40.8-18.2 40.8-40.8c0-6.5-1.6-12.9-4.6-18.7l-26.5-51.2z"/></svg>></div>'

// const wqueen = '<div class ="piece" id="wqueen"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m16 16l2-11l-4 4l-2-5l-2 5l-4-4l2 11m0 0l-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16H8z"/><path d="M11 4a1 1 0 1 0 2 0a1 1 0 1 0-2 0M5 5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m12 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0"/></g></svg>></div>'

// const wknight = '<div class ="piece" id="wknight"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 448 512"><path fill="currentColor" d="M226.6 48H117.3l17.1 12.8c6 4.5 9.6 11.6 9.6 19.2s-3.6 14.7-9.6 19.2l-6.5 4.9c-10 7.5-16 19.3-16 31.9l-.3 91c0 10.2 4.9 19.9 13.2 25.8l1.9 1.3c9.9 7.1 23.3 7 33.2-.1l49.9-36.3c10.7-7.8 25.7-5.4 33.5 5.3s5.4 25.7-5.3 33.5l-49.9 36.3l-53.8 39.1c-7.3 5.3-13 12.2-16.9 20.1H66.8c5.3-22.1 17.8-41.9 35.9-56.3c-1.3-.8-2.6-1.7-3.8-2.6l-1.9-1.3c-21-15-33.4-39.2-33.3-65l.3-91c.1-19.8 6.7-38.7 18.6-53.9l-.4-.3C70.7 73 64 59.6 64 45.3C64 20.3 84.3 0 109.3 0h117.3C331.2 0 416 84.8 416 189.4c0 11.1-1 22.2-2.9 33.2l-23 129.4h-48.8l24.5-137.8c1.5-8.2 2.2-16.5 2.2-24.8C368 111.3 304.7 48 226.6 48zM85.2 432l-16.5 32h310.6l-16.6-32H85.2zm315.7-30.7l26.5 51.2c3 5.8 4.6 12.2 4.6 18.7c0 22.5-18.2 40.8-40.8 40.8H56.8C34.2 512 16 493.8 16 471.2c0-6.5 1.6-12.9 4.6-18.7l26.5-51.2c5.4-10.6 16.4-17.3 28.4-17.3h297c12 0 22.9 6.7 28.4 17.3zM172 128a20 20 0 1 1 0 40a20 20 0 1 1 0-40z"/></svg>></div>'

// const wrook = '<div class ="piece" id="wrook"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 16l-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16H8zm0 0l1-9h6l1 9M6 4l.5 3h11l.5-3m-8 0v3m4-3v3"/></svg>></div>'

// const wbishop = '<div class ="piece" id="wbishop"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 16l-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16H8zm3-12a1 1 0 1 0 2 0a1 1 0 1 0-2 0M9.5 16C7.833 16 7 14.331 7 13c0-3.667 1.667-6 5-7c3.333 1 5 3.427 5 7c0 1.284-.775 2.881-2.325 3H9.5zM15 8l-3 3m0-6v1"/></svg>></div>'
