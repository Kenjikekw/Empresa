import random
from os import system

system("cls")
print("Ahora vas a tener que buscar un numero, tendras que ir introduciondolos por pantalla y el programa le dira si el numero es mayor o menor")
intentos = 0
x=int
secretNum = random.randint(0, 20)
while(x!= secretNum):
    x= int(input("Escribe un numero\n")) 
    intentos+=1
    if x<secretNum:
        print("El numero es más alto")
    elif x>secretNum:
        print("El numero es más pequeño")
    else:
        print("Enhorabuena, lo has conseguido en", intentos, "intentos")
