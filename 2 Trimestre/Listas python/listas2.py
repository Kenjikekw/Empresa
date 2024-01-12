import os
os.system("cls")
#Declaramos las variables que vamos a utilizar
contador=0
#Abrimos el archivo
fh = open("media.txt")
#Comprobamos linea por linea si empieza por "From "
for line in fh:
    x = line.startswith("From ")
    #Si empieza por "From " pilla el correo y suma uno al contador
    if x:
        print(line.split()[1])
        contador = contador + 1
print(f"There were {contador} lines in the file with From as the first word")