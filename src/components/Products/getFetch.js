const products = [ 
{ id: 1, title: "Arduino DUE Original", description:"",price: "S/. 190.00", pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1635819311/ARDUINO/due-300x300_ce1cfv.jpg" },
{ id: 2, title: "Arduino M0", description:"",price: "S/. 149.00", pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1635819311/ARDUINO/arduinoM0-300x300_gxbw3a.jpg" },
{ id: 3, title: "Arduino Mega R3 Original", description:"",price: "S/. 175.00", pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1635819311/ARDUINO/ArduinoMegaOriginal-300x300_jxvaa0.jpg" },
{ id: 4, title: "Arduino Micro", description:"",price: "S/. 110.00", pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1635819311/ARDUINO/ArduinoMicro-300x300_iyae9c.jpg" },
{ id: 5, title: "Arduino Mini Pro 5V 16Mhz", description:"",price: "S/. 22.00", pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1635819311/ARDUINO/ArduinoMini-300x300_pvde6u.jpg" },
{ id: 6, title: "Arduino MKR WiFi 1010", description:"",price: "S/. 169.00", pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1635819311/ARDUINO/mkr1010-300x300_ncylvr.jpg" },
{ id: 7, title: "Arduino Starter Kit Original", description:"",price: "S/. 459.00", pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1635819311/ARDUINO/ArduinoStarterKit-300x300_wa3y8p.jpg" },
{ id: 8, title: "Arduino UNO R3 Original", description:"",price: "S/. 95.00", pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1635819311/ARDUINO/UNO_ML1-300x197_cw4oz5.jpg" },
{ id: 9, title: "DFRduino Ethernet Shield V2.1", description:"",price: "S/. 75.00", pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1635819311/ARDUINO/ethernetdfrobot-300x300_tuqpka.jpg" },
{ id: 10, title: "DFRduino MEGA ADK", description:"",price: "S/. 155.00", pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1635819311/ARDUINO/adk_dfrobot-300x300_egatu7.jpg" } ]

 
export const getFetch = new Promise( (resolve, reject) => {

    const condition = true;
    if (condition) {
        setTimeout( () => {
            resolve(products)
        }, 2000 )
    }
    else {
        setTimeout( () => {
            reject('404 not found')
        }, 2000 )
    }

} )