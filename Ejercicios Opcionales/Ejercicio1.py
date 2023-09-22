from os import system 

system("cls")

while 1:
    x=int(input("Escribe un numero entero positivo\n"))
    if x>0:
        break
    else:
        print("El numero debe ser mayor a 0")

for i in range(1,x+1):
    if i%2!=0:
        if i==1:
            print(i, end="")
        elif i==x:
            print(",",i)
        else:
            print(",",i, end="")
    