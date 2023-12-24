
/*
PINOUT:
RC522 MODULE                Uno/Nano     MEGA
SDA  (Serial Data)           D10          D9
SCK                          D13          D52
MOSI                         D11          D51
MISO                         D12          D50
IRQ                          N/A          N/A
GND                          GND          GND
RST                          D9           D8
3.3V                         3.3V         3.3V
*/

#include <RFID.h>
#include <SPI.h>

#define SDA 9 // define o pino serial data
#define RST 8 // define o pino de reset
#define buzina 10
#define ledR 40
#define ledB 38

RFID RC522(SDA,RST); // instancia bilbioteca rfid
void setup() {
  // put your setup code here, to run once:
   Serial.begin(9600);
   SPI.begin();
   RC522.init(); // inicializa leitor rfid
   pinMode(ledR,OUTPUT);
   pinMode(ledB,OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:

  /* verifica se detectou cartao */
  if (RC522.isCard())
  {
    /* Se sim, pegar o numero serial do cartao */
    RC522.readCardSerial();
    Serial.println("Card detected:");
    
    for(int i=0;i<5;i++)
    {
    Serial.print(RC522.serNum[i],DEC);
    Serial.print(RC522.serNum[i],HEX); //to print card detail in Hexa Decimal format
    tone(buzina,432,1000);
    digitalWrite(ledR,LOW);
    digitalWrite(ledB,HIGH);
    }
    Serial.println();
    Serial.println();
    delay(1000);
  }
  else if(!RC522.isCard()){
    digitalWrite(ledR,HIGH);
    digitalWrite(ledB,LOW);
  }
  }
 
