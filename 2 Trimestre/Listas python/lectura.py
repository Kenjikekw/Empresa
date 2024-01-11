import os
import time

os.system("cls")
# Creamos la lista de variables a utilizar
cantidad = 0
numero = 0
arch = ""
lista=os.listdir()
var = True
# Creamos un loop donde hasta que el usuario no elija el archivo a utilizar no avanzamos a lo siguiente
while var:
    #Printamos lista y pedimos el archivo
    for arc in lista: 
        print(arc)
    archname = input("\nEscribe el nombre del archivo que quieres leer:\n")
    #Comprobamos si esta dento
    for arc in lista:
        if arc.startswith(archname):
            arch = arc
            var=False
            break
    # En caso que no este se le dice y volvemos a repetir
    if arch == "":
        os.system("cls")
        print("No existe el archivo que has pedido, por favor selecciona uno que este en la lista")
        time.sleep(5)
# Abrimos el archivo para leerlo
fh = open(arch)
# Por cada linea que contenga 'X-DSPAM-Confidence:' sumamos el numero de veces que aparece y su valor
for line in fh:
    x = line.startswith("X-DSPAM-Confidence:")
    if x:
        cantidad= cantidad+ float(line.split()[1])
        numero=numero+1
# Al final se printa la media
print(f"Confianza promedio de spam: {cantidad/numero}")
