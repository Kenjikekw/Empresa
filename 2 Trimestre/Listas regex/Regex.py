from os import system
import re
system("cls")
#Abrimos el archivo
file = open("regex_sum_42.txt")
#Creamos un array donde metemos todos los numeros del archivo
numeros = [int(num) for num in re.findall(r"\d+",file.read())]
#Mostramos su numero total y la suma
with open("ar.txt", "w") as file:
    # Write each element of the array to a new line in the file
    for element in numeros:
        file.write(str(element) + "\n")
print(f"Hay un total de {len(numeros)} y la suma es de {sum(numeros)}")


