const products = [
{ id: 1, title: " Arduino DUE Original ", description: [{ id: 101, desc1: " Microcontroller ", desc2: "AT91SAM3X8E " } , { id: 102, desc1: " Operating Voltage ", desc2: "3.3V " } , { id: 103, desc1: " Input Voltage (recommended) ", desc2: "7-12V " } , { id: 104, desc1: " Input Voltage (limits) ", desc2: "6-16V " } , { id: 105, desc1: " Digital I/O Pins ", desc2: "54 (of which 12 provide PWM output) " } , { id: 106, desc1: " Analog Input Pins ", desc2: "12 und " } , { id: 107, desc1: " Analog Output Pins ", desc2: "2 (DAC) " } , { id: 108, desc1: " Total DC Output Current on all I/O lines ", desc2: "130 mA " } , { id: 109, desc1: " DC Current for 3.3V Pin ", desc2: "800 mA " } , { id: 110, desc1: " DC Current for 5V Pin ", desc2: "800 mA " } , { id: 111, desc1: " Flash Memory ", desc2: "512 KB all available for the user applications " } , { id: 112, desc1: " SRAM ", desc2: "96 KB (two banks: 64KB and 32KB) " } , { id: 113, desc1: " Clock Speed ", desc2: "84 MHz " } , { id: 114, desc1: " Length ", desc2: "101.52 mm " } , { id: 115, desc1: " Width ", desc2: "53.3 mm " } , { id: 116, desc1: " Weight ", desc2: "36 g " } ] , price: " S/. 190 ", stock:"  ", pictureUrl: " https://res.cloudinary.com/dvinxey2w/image/upload/v1635819311/ARDUINO/due-300x300_ce1cfv.jpg " } , 
{ id: 2, title: " Arduino M0 ", description: " ", price: " S/. 149 ", stock:"  ", pictureUrl: " https://res.cloudinary.com/dvinxey2w/image/upload/v1635819311/ARDUINO/arduinoM0-300x300_gxbw3a.jpg " } , 
{ id: 3, title: " Arduino Mega R3 Original ", description: " ", price: " S/. 175 ", stock:"  ", pictureUrl: " https://res.cloudinary.com/dvinxey2w/image/upload/v1635819311/ARDUINO/ArduinoMegaOriginal-300x300_jxvaa0.jpg " } , 
{ id: 4, title: " Arduino Micro ", description: " ", price: " S/. 110 ", stock:"  ", pictureUrl: " https://res.cloudinary.com/dvinxey2w/image/upload/v1635819311/ARDUINO/ArduinoMicro-300x300_iyae9c.jpg " } , 
{ id: 5, title: " Arduino Mini Pro 5V 16Mhz ", description: " ", price: " S/. 22 ", stock:"  ", pictureUrl: " https://res.cloudinary.com/dvinxey2w/image/upload/v1635819311/ARDUINO/ArduinoMini-300x300_pvde6u.jpg " } , 
{ id: 6, title: " Arduino MKR WiFi 1010 ", description: " ", price: " S/. 169 ", stock:"  ", pictureUrl: " https://res.cloudinary.com/dvinxey2w/image/upload/v1635819311/ARDUINO/mkr1010-300x300_ncylvr.jpg " } , 
{ id: 7, title: " Arduino Starter Kit Original ", description: " ", price: " S/. 459 ", stock:"  ", pictureUrl: " https://res.cloudinary.com/dvinxey2w/image/upload/v1635819311/ARDUINO/ArduinoStarterKit-300x300_wa3y8p.jpg " } , 
{ id: 8, title: " Arduino UNO R3 Original ", description: " ", price: " S/. 95 ", stock:"  ", pictureUrl: " https://res.cloudinary.com/dvinxey2w/image/upload/v1635819311/ARDUINO/UNO_ML1-300x197_cw4oz5.jpg " } , 
{ id: 9, title: " DFRduino Ethernet Shield V2.1 ", description: " ", price: " S/. 75 ", stock:"  ", pictureUrl: " https://res.cloudinary.com/dvinxey2w/image/upload/v1635819311/ARDUINO/ethernetdfrobot-300x300_tuqpka.jpg " } , 
{ id: 10, title: " DFRduino MEGA ADK ", description: " ", price: " S/. 155 ", stock:"  ", pictureUrl: " https://res.cloudinary.com/dvinxey2w/image/upload/v1635819311/ARDUINO/adk_dfrobot-300x300_egatu7.jpg " } ]

console.log(products);

const product = products.find( (data) => data.id === 1 ) 

console.log(product);

const info = product.description;

console.log(info);

 
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

export const getFetch2 = new Promise( (resolve, reject) => {

    const condition = true;
    if (condition) {
        setTimeout( () => {
            resolve(product)
        }, 2000 )
    }
    else {
        setTimeout( () => {
            reject('404 not found')
        }, 2000 )
    }
} )

export const getFetch3 = new Promise( (resolve, reject) => {

    const condition = true;
    if (condition) {
        setTimeout( () => {
            resolve(info)
        }, 2000 )
    }
    else {
        setTimeout( () => {
            reject('404 not found')
        }, 2000 )
    }
} )
