import os
os.system("cls")
#Declaramos las variables que vamos a utilizar
personas=[]
#Abrimos el archivo
fh = open("media-2.txt")
#Comprobamos linea por linea si empieza por "From "
for line in fh:
    x = line.startswith("From ")
    contador = 0
    #Si empieza por "From " pilla el correo y en caso de que este en la lista de personas le añade uno a su contador o lo agraga en la lista de personas en caso de que no este
    if x:
        for persona in personas:
            if persona["correo"] == line.split()[1]:
                persona["numero"] = persona["numero"]+1
                contador = contador + 1
        personas.append({"correo":line.split()[1],"numero":1})
#Consigo a la persona con mas correos para poder mostrarla más tarde
personaConMasCorreos = max(personas, key=lambda persona: persona["numero"])
print(f"{personaConMasCorreos["correo"]} {personaConMasCorreos["numero"]}")