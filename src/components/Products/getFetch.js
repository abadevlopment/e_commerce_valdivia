const products = [
    { id: 1, title: "Arduino DUE Original", category: "Tarjetas", price: 190 , stock: 0 , pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1636743443/ARDUINO/due_gpuzzq.jpg" } , 
    { id: 2, title: "Arduino M0", category: "Tarjetas", price: 149 , stock: 25 , pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1636743498/ARDUINO/arduinoM0_tpjpml.jpg" } , 
    { id: 3, title: "Arduino Mega R3 Original", category: "Tarjetas", price: 175 , stock: 25 , pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1636743546/ARDUINO/ArduinoMegaOriginal_bao6zm.jpg" } , 
    { id: 4, title: "Arduino Micro", category: "Tarjetas", price: 110 , stock: 25 , pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1636743585/ARDUINO/ArduinoMicro_eufjcp.jpg" } , 
    { id: 5, title: "Arduino Mini Pro 5V 16Mhz", category: "Tarjetas", price: 22 , stock: 25 , pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1636743631/ARDUINO/ArduinoMini_vtocys.jpg" } , 
    { id: 6, title: "Arduino MKR WiFi 1010", category: "Tarjetas", price: 169 , stock: 25 , pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1636743741/ARDUINO/Arduino_MKR_aeplun.jpg" } , 
    { id: 7, title: "Arduino Starter Kit Original", category: "Tarjetas", price: 459 , stock: 25 , pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1636743782/ARDUINO/ArduinoStarterKit_mrloqz.jpg" } , 
    { id: 8, title: "Arduino UNO R3 Original", category: "Tarjetas", price: 95 , stock: 25 , pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1636743840/ARDUINO/UNO_ML1_d3zbf4.jpg" } , 
    { id: 9, title: "DFRduino MEGA ADK", category: "Tarjetas", price: 155 , stock: 25 , pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1636744044/ARDUINO/DFRduino_MEGA_ADK_ezrhhf.jpg" } , 
    { id: 10, title: "Grove Speech recognizer Kit", category: "Kits", price: 189 , stock: 30 , pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1636650114/ARDUINO/grovespeechkit_ytu1dx.jpg" } , 
    { id: 11, title: "Kit basico del ESP32", category: "Kits", price: 85 , stock: 30 , pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1636650377/ARDUINO/kitbasicoESP32-2_yz6b9z.jpg" } , 
    { id: 12, title: "Kit de Robotica de Arduino", category: "Kits", price: 135 , stock: 30 , pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1636650666/ARDUINO/kit_robotica_se8gtz.jpg" } , 
    { id: 13, title: "Kit Educativo de Arduino", category: "Kits", price: 182 , stock: 30 , pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1636650903/ARDUINO/Kit_educativo_Arduino-1_dityyz.jpg" } , 
    { id: 14, title: "Kit Intermedio de Arduino", category: "Kits", price: 129 , stock: 30 , pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1636651130/ARDUINO/kit_intermedio_arduino_szg9jq.jpg" } , 
    { id: 15, title: "Makey Makey Classic by JoyLabz", category: "Kits", price: 199 , stock: 30 , pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1636651277/ARDUINO/makeymakey1_uqwncb.jpg" } , 
    { id: 16, title: "Chasis 4WD Kit – Basic", category: "Robotica", price: 110 , stock: 15 , pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1636652009/ARDUINO/4wdkit_ifrw5d.jpg" } , 
    { id: 17, title: "Chasis Tank (Tanque)", category: "Robotica", price: 155 , stock: 15 , pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1636652379/ARDUINO/tank1_ni17bj.jpg" } , 
    { id: 18, title: "Controlador de servos PCA9685", category: "Robotica", price: 24 , stock: 15 , pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1636652453/ARDUINO/PCA9685_yubqfh.jpg" } , 
    { id: 19, title: "Dagu 2WD Self-Balancing Chassis", category: "Robotica", price: 149 , stock: 15 , pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1636652631/ARDUINO/ChasisBalancing_dhezxg.jpg" } , 
    { id: 20, title: "Garra robotica", category: "Robotica", price: 25 , stock: 15 , pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1636653143/ARDUINO/garrarobotica_i87sv9.jpg" } , 
    { id: 21, title: "Hexapod Chassis Kit", category: "Robotica", price: 299 , stock: 15 , pictureUrl: "https://res.cloudinary.com/dvinxey2w/image/upload/v1636653324/ARDUINO/spider_h4h7fq.jpg" } 
]


const desc = [
    { id: 1, description: [{ id: 101, desc1: "Microcontroller", desc2: "AT91SAM3X8E" } , { id: 102, desc1: "Operating Voltage", desc2: "3.3V" } , { id: 103, desc1: "Input Voltage (recommended)", desc2: "7-12V" } , { id: 104, desc1: "Input Voltage (limits)", desc2: "6-16V" } , { id: 105, desc1: "Digital I/O Pins", desc2: "54 (of which 12 provide PWM output)" } , { id: 106, desc1: "Analog Input Pins", desc2: "12" } , { id: 107, desc1: "Analog Output Pins", desc2: "2 (DAC)" } , { id: 108, desc1: "Total DC Output Current on all I/O lines", desc2: "130 mA" } , { id: 109, desc1: "DC Current for 3.3V Pin", desc2: "800 mA" } , { id: 110, desc1: "DC Current for 5V Pin", desc2: "800 mA" } , { id: 111, desc1: "Flash Memory", desc2: "512 KB all available for the user applications" } , { id: 112, desc1: "SRAM", desc2: "96 KB (two banks: 64KB and 32KB)" } , { id: 113, desc1: "Clock Speed", desc2: "84 MHz" } , { id: 114, desc1: "Length", desc2: "101.52 mm" } , { id: 115, desc1: "Width", desc2: "53.3 mm" } , { id: 116, desc1: "Weight", desc2: "36 g" }]} , 
    { id: 2, description: [{ id: 101, desc1: "Microcontroller", desc2: "ATSAMD21G18, 48pins LQFP" } , { id: 102, desc1: "Architecture", desc2: "ARM Cortex-M0+" } , { id: 103, desc1: "Operating Voltage", desc2: "3.3V" } , { id: 104, desc1: "Flash memory", desc2: "256 KB" } , { id: 105, desc1: "SRAM", desc2: "32Kb" } , { id: 106, desc1: "Clock Speed", desc2: "48 MHz" } , { id: 107, desc1: "Analog I/O Pins", desc2: "6 +1 DAC" } , { id: 108, desc1: "DC Current per I/O Pins", desc2: "7 mA (I/O Pins)" } , { id: 109, desc1: "Input Voltage", desc2: "5-15 V" } , { id: 110, desc1: "Digital I/O Pins", desc2: "20, with 12 PWM and UART" } , { id: 111, desc1: "PWM Output", desc2: "12" } , { id: 112, desc1: "Power Consumption", desc2: "29 mA" } , { id: 113, desc1: "PCB Size", desc2: "53 x 68.5 mm" } , { id: 114, desc1: "Weight", desc2: "21g" }]} , 
    { id: 3, description: [{ id: 101, desc1: "Microcontroller", desc2: "ATmega2560" } , { id: 102, desc1: "Operating Voltage", desc2: "5V" } , { id: 103, desc1: "Input Voltage (recommended)", desc2: "7-12V" } , { id: 104, desc1: "Input Voltage (limit)", desc2: "6-20V" } , { id: 105, desc1: "Digital I/O Pins", desc2: "54 (of which 15 provide PWM output)" } , { id: 106, desc1: "Analog Input Pins", desc2: "16" } , { id: 107, desc1: "DC Current per I/O Pin", desc2: "20 mA" } , { id: 108, desc1: "DC Current for 3.3V Pin", desc2: "50 mA" } , { id: 109, desc1: "Flash Memory", desc2: "256 KB of which 8 KB used by bootloader" } , { id: 110, desc1: "SRAM", desc2: "8 KB" } , { id: 111, desc1: "EEPROM", desc2: "4 KB" } , { id: 112, desc1: "Clock Speed", desc2: "16 MHz" } , { id: 113, desc1: "LED_BUILTIN", desc2: "13" } , { id: 114, desc1: "Length", desc2: "101.52 mm" } , { id: 115, desc1: "Width", desc2: "53.3 mm" } , { id: 116, desc1: "Weight", desc2: "37 g" }]} , 
    { id: 4, description: [{ id: 101, desc1: "Microcontroller", desc2: "ATmega32U4" } ,{ id: 102, desc1: "Operating Voltage", desc2: "5V" } ,{ id: 103, desc1: "Input Voltage (Recommended)", desc2: "7-12V" } ,{ id: 104, desc1: "Input Voltage (Limit)", desc2: "6-20V" } ,{ id: 105, desc1: "Digital I/O Pins", desc2: "20" } ,{ id: 106, desc1: "Pwm Channels", desc2: "7" } ,{ id: 107, desc1: "Analog Input Channels", desc2: "12" } ,{ id: 108, desc1: "Dc Current Per I/O Pin", desc2: "20 mA" } ,{ id: 109, desc1: "Dc Current For 3.3V Pin", desc2: "50 mA" } ,{ id: 110, desc1: "Flash Memory", desc2: "32 KB (ATmega32U4) of which 4 KB used by bootloader" } ,{ id: 111, desc1: "Sram", desc2: "2.5 KB (ATmega32U4)" } ,{ id: 112, desc1: "Eeprom", desc2: "1 KB (ATmega32U4)" } ,{ id: 113, desc1: "Clock Speed", desc2: "16 MHz" } ,{ id: 114, desc1: "Led_Builtin", desc2: "13" } ,{ id: 115, desc1: "Length", desc2: "48 mm" } ,{ id: 116, desc1: "Width", desc2: "18 mm" } ,{ id: 117, desc1: "Weight", desc2: "13 g" } ]} , 
    { id: 5, description: [{ id: 101, desc1: "Microcontroller", desc2: "ATmega328 " } ,{ id: 102, desc1: "Board Power Supply", desc2: "5 - 12 V " } ,{ id: 103, desc1: "Circuit Operating Voltage", desc2: "5V" } ,{ id: 104, desc1: "Digital I/O Pins", desc2: "14" } ,{ id: 105, desc1: "PWM Pins", desc2: "6" } ,{ id: 106, desc1: "UART", desc2: "1" } ,{ id: 107, desc1: "SPI", desc2: "1" } ,{ id: 108, desc1: "I2C", desc2: "1" } ,{ id: 109, desc1: "Analog Input Pins", desc2: "6" } ,{ id: 110, desc1: "External Interrupts", desc2: "2" } ,{ id: 111, desc1: "DC Current per I/O Pin", desc2: "40 mA" } ,{ id: 112, desc1: "Flash Memory", desc2: "32KB of which 2 KB used by bootloader " } ,{ id: 113, desc1: "SRAM", desc2: "2 KB " } ,{ id: 114, desc1: "EEPROM", desc2: "1 KB " } ,{ id: 115, desc1: "Clock Speed", desc2: "16 MHz" } ]} , 
    { id: 6, description: [{ id: 101, desc1: "Microcontroller", desc2: "SAMD21 Cortex®-M0+ 32bit low power ARM MCU (datasheet)" } , { id: 102, desc1: "Radio module", desc2: "u-blox NINA-W102 (datasheet)" } , { id: 103, desc1: "Board Power Supply (USB/VIN)", desc2: "5V" } , { id: 104, desc1: "Secure Element", desc2: "ATECC508 (datasheet)" } , { id: 105, desc1: "Supported Battery", desc2: "Li-Po Single Cell, 3.7V, 1024mAh Minimum" } , { id: 106, desc1: "Circuit Operating Voltage", desc2: "3.3V" } , { id: 107, desc1: "Digital I/O Pins", desc2: "8" } , { id: 108, desc1: "PWM Pins", desc2: "13 (0 .. 8, 10, 12, 18 / A3, 19 / A4)" } , { id: 109, desc1: "UART", desc2: "1" } , { id: 110, desc1: "SPI", desc2: "1" } , { id: 111, desc1: "I2C", desc2: "1" } , { id: 112, desc1: "Analog Input Pins", desc2: "7 (ADC 8/10/12 bit)" } , { id: 113, desc1: "Analog Output Pins", desc2: "1 (DAC 10 bit)" } , { id: 114, desc1: "External Interrupts", desc2: "8 (0, 1, 4, 5, 6, 7, 8, 16 / A1, 17 / A2)" } , { id: 115, desc1: "DC Current per I/O Pin", desc2: "7 mA" } , { id: 116, desc1: "CPU Flash Memory", desc2: "256 KB (internal)" } , { id: 117, desc1: "SRAM", desc2: "32 KB" } , { id: 118, desc1: "EEPROM", desc2: "no" } , { id: 119, desc1: "Clock Speed", desc2: "32.768 kHz (RTC), 48 MHz" } , { id: 120, desc1: "LED_BUILTIN", desc2: "6" } , { id: 121, desc1: "USB", desc2: "Full-Speed USB Device and embedded Host" } , { id: 122, desc1: "Length", desc2: "61.5 mm" } , { id: 123, desc1: "Width", desc2: "25 mm" } , { id: 124, desc1: "Weight", desc2: "32 gr." }]} , 
    { id: 7, description: [{ id: 101, desc1: "Projects Book (170 pages)", desc2: "1" } ,{ id: 102, desc1: "Arduino / Genuino Uno", desc2: "1" } ,{ id: 103, desc1: "USB cable", desc2: "1" } ,{ id: 104, desc1: "Breadboard 400 points", desc2: "1" } ,{ id: 105, desc1: "Solid core jumper wires", desc2: "70" } ,{ id: 106, desc1: "Easy-to-assemble wooden base", desc2: "1" } ,{ id: 107, desc1: "9v battery snap", desc2: "1" } ,{ id: 108, desc1: "Stranded jumper wires (black)", desc2: "1" } ,{ id: 109, desc1: "Stranded jumper wires (red)", desc2: "1" } ,{ id: 110, desc1: "Phototransistor", desc2: "6" } ,{ id: 111, desc1: "Potentiometer 10kOhms", desc2: "3" } ,{ id: 112, desc1: "Pushbuttons", desc2: "10" } ,{ id: 113, desc1: "Temperature sensor [TMP36]", desc2: "1" } ,{ id: 114, desc1: "Tilt sensor", desc2: "1" } ,{ id: 115, desc1: "alphanumeric LCD (16×2 characters)", desc2: "1" } ,{ id: 116, desc1: "LED (bright white)", desc2: "1" } ,{ id: 117, desc1: "LED (RGB)", desc2: "1" } ,{ id: 118, desc1: "LEDs (red)", desc2: "8" } ,{ id: 119, desc1: "LEDs (green)", desc2: "8" } ,{ id: 120, desc1: "LEDs (yellow)", desc2: "8" } ,{ id: 121, desc1: "LEDs (blue)", desc2: "3" } ,{ id: 122, desc1: "Small DC motor 6/9V", desc2: "1" } ,{ id: 123, desc1: "Small servo motor", desc2: "1" } ,{ id: 124, desc1: "Piezo capsule [PKM17EPP-4001-B0]", desc2: "1" } ,{ id: 125, desc1: "H-bridge motor driver [L293D]", desc2: "1" } ,{ id: 126, desc1: "Optocouplers [4N35]", desc2: "1" } ,{ id: 127, desc1: "Mosfet transistors [IRF520]", desc2: "2" } ,{ id: 128, desc1: "Capacitors 100uF", desc2: "5" } ,{ id: 129, desc1: "Diodes [1N4007]", desc2: "5" } ,{ id: 130, desc1: "Transparent gels (red, green, blue)", desc2: "3" } ,{ id: 131, desc1: "Male pins strip (40×1)", desc2: "1" } ,{ id: 132, desc1: "Resistors 220 Ohms", desc2: "20" } ,{ id: 133, desc1: "Resistors 560 Ohms", desc2: "5" } ,{ id: 134, desc1: "Resistors 1 kOhms", desc2: "5" } ,{ id: 135, desc1: "Resistors 4.7 kOhms", desc2: "5" } ,{ id: 136, desc1: "Resistors 10 kOhms", desc2: "20" } ,{ id: 137, desc1: "Resistors 1 MOhms", desc2: "5" } ,{ id: 138, desc1: "Resistors 10 MOhms", desc2: "5" }]} , 
    { id: 8, description: [{ id: 101, desc1: "Microcontroller", desc2: "ATmega328P" } ,{ id: 102, desc1: "Operating Voltage", desc2: "5V" } ,{ id: 103, desc1: "Input Voltage (recommended)", desc2: "7-12V" } ,{ id: 104, desc1: "Input Voltage (limit)", desc2: "6-20V" } ,{ id: 105, desc1: "Digital I/O Pins", desc2: "14 (of which 6 provide PWM output)" } ,{ id: 106, desc1: "PWM Digital I/O Pins", desc2: "6" } ,{ id: 107, desc1: "Analog Input Pins", desc2: "6" } ,{ id: 108, desc1: "DC Current per I/O Pin", desc2: "20 mA" } ,{ id: 109, desc1: "DC Current for 3.3V Pin", desc2: "50 mA" } ,{ id: 110, desc1: "Flash Memory", desc2: "32 KB (ATmega328P) of which 0.5 KB used by bootloader" } ,{ id: 111, desc1: "SRAM", desc2: "2 KB (ATmega328P)" } ,{ id: 112, desc1: "EEPROM", desc2: "1 KB (ATmega328P)" } ,{ id: 113, desc1: "Clock Speed", desc2: "16 MHz" } ,{ id: 114, desc1: "LED_BUILTIN", desc2: "13" } ,{ id: 115, desc1: "Length", desc2: "68.6 mm" } ,{ id: 116, desc1: "Width", desc2: "53.4 mm" } ,{ id: 117, desc1: "Weight", desc2: "25 g" }]} , 
    { id: 9, description: [{ id: 101, desc1: "Microcontroller", desc2: "ATmega2560" } ,{ id: 102, desc1: "Operating Voltage", desc2: "5V" } ,{ id: 103, desc1: "Max output current", desc2: "3A" } ,{ id: 104, desc1: "Input Voltage (recommended)", desc2: "6-23V" } ,{ id: 105, desc1: "Digital I/O Pins", desc2: "54 (of which 14 provide PWM output)" } ,{ id: 106, desc1: "Analog Input Pins", desc2: "16" } ,{ id: 107, desc1: "DC Current per I/O Pin", desc2: "40 mA" } ,{ id: 108, desc1: "DC Current for 3.3V Pin", desc2: "50 mA" } ,{ id: 109, desc1: "Flash Memory ", desc2: "256 KB of which 8 KB used by bootloader" } ,{ id: 110, desc1: "SRAM", desc2: "8 KB" } ,{ id: 111, desc1: "EEPROM", desc2: "4 KB" } ,{ id: 112, desc1: "Clock Speed", desc2: "16 MHz" }]} , 
    
    { id: 10, description: [{ id: 101, desc1: "Grove – Speech Recognizer", desc2: "1" } ,{ id: 102, desc1: "Grove – MP3 v2.0", desc2: "1" } ,{ id: 103, desc1: "Grove – RTC", desc2: "1" } ,{ id: 104, desc1: "Base Shield", desc2: "1" } ,{ id: 105, desc1: "Grove – Infrared Receiver", desc2: "1" } ,{ id: 106, desc1: "Grove – Infrared Emitter", desc2: "1" } ,{ id: 107, desc1: "Cable", desc2: "5" } ,{ id: 108, desc1: "Manual", desc2: "1" } ,{ id: 109, desc1: "Dimensions", desc2: "190mm x120mm x45mm" } ,{ id: 110, desc1: "Weight", desc2: "G.W 222g" } ,{ id: 111, desc1: "Battery", desc2: "Exclude" }]} , 
    
    { id: 11, description: [{ id: 101, desc1: "Modulo ESP32", desc2: "1" } ,{ id: 102, desc1: "Protoboard mediano", desc2: "1" } ,{ id: 103, desc1: "Sensor ultrasonido", desc2: "1" } ,{ id: 104, desc1: "Sensor DHT11", desc2: "1" } ,{ id: 105, desc1: "Microservo SG90", desc2: "1" } ,{ id: 106, desc1: "LCD con I2C", desc2: "1" } ,{ id: 107, desc1: "Cables 20cm Macho-Hembra", desc2: "10" } ,{ id: 108, desc1: "Cables 20cm Hembra-Hembra", desc2: "10" } ,{ id: 109, desc1: "Leds", desc2: "2" } ,{ id: 110, desc1: "Resitencias 220 Ohmios", desc2: "2" } ,{ id: 111, desc1: "Pulsador", desc2: "1" } ,{ id: 112, desc1: "Resistencia 10K", desc2: "1" } ,{ id: 113, desc1: "Potenciometro.", desc2: "1" }]} , 
    { id: 12, description: [{ id: 101, desc1: "Arduino UNO", desc2: "1" } ,{ id: 102, desc1: "Cable USB", desc2: "1" } ,{ id: 103, desc1: "Protoboard Mediano", desc2: "1" } ,{ id: 104, desc1: "Pack de 20 cable M-M", desc2: "1" } ,{ id: 105, desc1: "Pack de 20 cable M-H", desc2: "1" } ,{ id: 106, desc1: "Sensor Ultrasonido", desc2: "1" } ,{ id: 107, desc1: "Chasis Magician Azul", desc2: "1" } ,{ id: 108, desc1: "L298N", desc2: "1" } ,{ id: 109, desc1: "Modulo Bluetooth HC-06", desc2: "1" } ,{ id: 110, desc1: "Sensor seguidor de Linea TCRT5000", desc2: "3" }]} , 
    { id: 13, description: [{ id: 101, desc1: "Arduino UNO", desc2: "1" } ,{ id: 102, desc1: "Cable USB", desc2: "1" } ,{ id: 103, desc1: "Protoboard Mediano", desc2: "1" } ,{ id: 104, desc1: "Pack de 20 cable M-M", desc2: "1" } ,{ id: 105, desc1: "Pack de 20 cable M-H", desc2: "1" } ,{ id: 106, desc1: "Sensor Ultrasonido", desc2: "1" } ,{ id: 107, desc1: "Chasis Magician Azul", desc2: "1" } ,{ id: 108, desc1: "L298N", desc2: "1" } ,{ id: 109, desc1: "Modulo Bluetooth HC-06", desc2: "1" } ,{ id: 110, desc1: "Sensor seguidor de Linea TCRT5000", desc2: "3" } ,{ id: 111, desc1: "Sensor Temperatura LM35", desc2: "1" } ,{ id: 112, desc1: "Sensor DHT11", desc2: "1" } ,{ id: 113, desc1: "LCD 16×2", desc2: "1" } ,{ id: 114, desc1: "Modulo I2C para LCD", desc2: "1" } ,{ id: 115, desc1: "Teclado matricial 4X4", desc2: "1" } ,{ id: 116, desc1: "Microservo SG90", desc2: "1" } ,{ id: 117, desc1: "Buzzer 5V", desc2: "1" } ,{ id: 118, desc1: "Potenciometro", desc2: "1" } ,{ id: 119, desc1: "Leds", desc2: "4" } ,{ id: 120, desc1: "Pulsador", desc2: "2" } ,{ id: 121, desc1: "Resistencia 330 Ohm", desc2: "4" } ,{ id: 122, desc1: "Resistencia 10K", desc2: "2" } ,{ id: 123, desc1: "Resistencia 100 Ohm", desc2: "1" } ,{ id: 124, desc1: "Caja de componentes", desc2: "1" }]} , 
    { id: 14, description: [{ id: 101, desc1: "Arduino UNO", desc2: "1" } ,{ id: 102, desc1: "Cable USB", desc2: "1" } ,{ id: 103, desc1: "Protoboard Mediano", desc2: "1" } ,{ id: 104, desc1: "Pack de 10 cable M-M", desc2: "1" } ,{ id: 105, desc1: "Pack de 10 cable M-H", desc2: "1" } ,{ id: 106, desc1: "Sensor Ultrasonido", desc2: "1" } ,{ id: 107, desc1: "Chasis Magician Azul", desc2: "1" } ,{ id: 108, desc1: "L298N", desc2: "1" } ,{ id: 109, desc1: "Modulo Bluetooth HC-06", desc2: "1" } ,{ id: 110, desc1: "Buzzer 5V", desc2: "1" } ,{ id: 111, desc1: "Potenciometro", desc2: "1" } ,{ id: 112, desc1: "Led RGB", desc2: "1" } ,{ id: 113, desc1: "Leds", desc2: "4" } ,{ id: 114, desc1: "Pulsador", desc2: "2" } ,{ id: 115, desc1: "Resistencia 330 Ohm", desc2: "4" } ,{ id: 116, desc1: "Resistencia 10K", desc2: "2" } ,{ id: 117, desc1: "Resistencia 100Ohm", desc2: "1" } ,{ id: 118, desc1: "Caja de componentes", desc2: "1" }]} , 
    { id: 15, description: [{ id: 101, desc1: "Makey Makey HID Board", desc2: "1" } ,{ id: 102, desc1: "Mini-USB Cable", desc2: "1" } ,{ id: 103, desc1: "Alligator Clip Pack", desc2: "1" } ,{ id: 104, desc1: "Jumper Wire Pack", desc2: "1" }]} , 
    { id: 16, description: [{ id: 101, desc1: "Motores DC", desc2: "4" } ,{ id: 102, desc1: "Llantas", desc2: "4" } ,{ id: 103, desc1: "Armazon con todos los conectores necesarios para Armar", desc2: "" }]} , 
    { id: 17, description: [{ id: 101, desc1: "Motores DC", desc2: "2" } ,{ id: 102, desc1: "Ruedas", desc2: "4" } ,{ id: 103, desc1: "Orugas", desc2: "2" } ,{ id: 104, desc1: "Armazon con todos los conectores necesarios para Armar", desc2: "" }]} , 
    { id: 18, description: [{ id: 101, desc1: "Salidas PWM", desc2: "16" } ,{ id: 102, desc1: "Comunicacion I2C", desc2: "I2C" } ,{ id: 103, desc1: "Salida", desc2: "12 bits de resolucion" }]} , 
    { id: 19, description: [{ id: 101, desc1: "Outer dia of wheel", desc2: "65mm" } ,{ id: 102, desc1: "Width of wheel", desc2: "28mm" } ,{ id: 103, desc1: "Brass fitting suits 4mm shaft", desc2: "" } ,{ id: 104, desc1: "Rated Voltage(DC)", desc2: "12V / 6V" } ,{ id: 105, desc1: "No load speed", desc2: "126rpm / 75rpm" } ,{ id: 106, desc1: "No Load Current", desc2: "46mA / 30mA" } ,{ id: 107, desc1: "load Speed", desc2: "100rpm / 60rpm" } ,{ id: 108, desc1: "load Current", desc2: "250mA / 280mA" } ,{ id: 109, desc1: "Power out put", desc2: "1.25W / 1.25W" } ,{ id: 110, desc1: "load torque", desc2: "1.2kg.cm / 0.8kg.cm" } ,{ id: 111, desc1: "Stall torque", desc2: "4.2kg.cm / 2.5kg.cm" } ,{ id: 112, desc1: "Stall Current", desc2: "1A / 900mA" } ,{ id: 113, desc1: "Gear ratio", desc2: "1 : 34" } ,{ id: 114, desc1: "JGA25-371 All Metal Motor With Encoder with RMC connector wire", desc2: "2" } ,{ id: 115, desc1: "Wear resistant Rubber Tires 65mm", desc2: "2" } ,{ id: 116, desc1: "3mm aluminum body", desc2: "1" } ,{ id: 117, desc1: "Accessory Kit", desc2: "1" }]} , 
    { id: 20, description: [{ id: 101, desc1: "Color", desc2: "Silver" } ,{ id: 102, desc1: "Material", desc2: "Aluminum Alloy" } ,{ id: 103, desc1: "Clamp maximum open", desc2: "55mm" } ,{ id: 104, desc1: "Suitable for standard servos", desc2: "" }]} , 
    { id: 21, description: [{ id: 101, desc1: "Incluye:", desc2: "" } ,{ id: 102, desc1: "Laser-Cut, 4mm Thick, Acrylic Base Plate", desc2: "1" } ,{ id: 103, desc1: "ABS leg segments", desc2: "12" } ,{ id: 104, desc1: "Foam Rubber Feet", desc2: "6" } ,{ id: 105, desc1: "Mini Servos", desc2: "12 x 9g" } ,{ id: 106, desc1: "A Bag of Screws", desc2: "" } ,{ id: 107, desc1: "Caracteristicas:", desc2: "" } ,{ id: 108, desc1: "Cute/Terrifying", desc2: "" } ,{ id: 109, desc1: "Base Plate has Several Universal Mounting Holes", desc2: "" } ,{ id: 110, desc1: "6 Legs with 2 Servos Each", desc2: "" } ,{ id: 111, desc1: "Foam Rubber Feet for ‘Grippage’", desc2: "" } ,{ id: 112, desc1: "Easy and Quick Assembly", desc2: "" }]} 
]


 
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

            resolve(desc)
        }, 2000 )

    }
    else {
        setTimeout( () => {

            reject('404 not found')
        }, 2000 )
    }
} )
