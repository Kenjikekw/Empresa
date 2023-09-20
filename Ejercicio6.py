from os import system

system("cls")

x = list(str(input("Escribe una frase y te intercambio la primera letra con la ultima\n")))
primera = x[0]
x.pop(0)
for y in range (len(x)):
    z=list(x[len(x)-1]).append(x)
x=list(x[len(x)-1]).append(x)
list(x).pop(len(x)-1)
list(x).append(primera)
print(x)