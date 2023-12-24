#define ir 50
#define buzina 51
int ir_state = 0;


void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(ir,INPUT);
  pinMode(buzina,OUTPUT);
  Serial.println("TESTE INFRAVERMELHO");
  

}

void loop() {
  // put your main code here, to run repeatedly:
  ir_state = digitalRead(ir);

  if(ir_state==0)
  {
    for(int i=0;i<4;i++)
    {
      digitalWrite(buzina,HIGH);
      delay(100);
      digitalWrite(buzina,LOW);
      delay(100);
    }
    Serial.println("Achei ocê!");
    delay(500);
  }
  else
  {
    digitalWrite(buzina,LOW);
  }
}

    
  
  
