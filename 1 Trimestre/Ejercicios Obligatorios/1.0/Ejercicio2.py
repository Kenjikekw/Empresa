from os import system

system("cls")

mas = menos = igual = 0

for x in range(10):
    y= int(input("Escribe un numero\n")) 
    if y<0:
        menos+=1
    elif y==0:
        igual+=1
    else:
        mas+=1
print("Hay", menos, "numeros menores a 0,", mas," numeros mayores a 0 y", igual, "ceros")

 