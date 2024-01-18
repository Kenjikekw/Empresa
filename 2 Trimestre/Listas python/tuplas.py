import os
os.system("cls")
#Declaramos las variables que vamos a utilizar
horas=[]
#Abrimos el archivo
fh = open("media-3.txt")
#Comprobamos linea por linea si empieza por "From "
for line in fh:
    x = line.startswith("From ")
    contador = 1
    #Si empieza por "From " pilla la hora y en caso de que este en la lista de horas le añade uno a su contador de veces o lo agraga en la lista de horas en caso de que no este
    if x:
        #Conseguimos la hora
        horaDoc = line.split()[5].split(":")[0]
        for hora in horas:
            if hora["hora"] == horaDoc:
                hora["veces"]= hora["veces"] + 1
                contador=contador-1
        if contador:
            horas.append({"hora":horaDoc,"veces":1})
#Ordenamos la lista por la hora
horas = sorted(horas, key=lambda hora: hora["hora"])
#La mostramos por pantalla con el formato de "hora veces"
for h in horas:
    print(f"{h["hora"]} {h["veces"]}")