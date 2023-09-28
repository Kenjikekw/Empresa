from os import system
import msvcrt

system("cls")


def escribir(nombre):
    with open(nombre+".txt","w") as f:
        f.write("\n".join([str(numero) for numero in range(0, 101, 2)]))
    system("cls")
    print(f"Se ha creado el archivo {f.name}")

def leer():
    try:
        print(system("dir"))
        nombre=str(input("Escribe el nombre con extension de un archivo que quieras leer\n"))
        with open(nombre, "r") as f:
            contenido = f.read()
            print(f"Contenido del archivo {f.name}:")
            print(contenido)
            print("Pulse cualquier tecla para salir")
            msvcrt.getch()     
            system("cls")
    except FileNotFoundError:
        print(f"El archivo {nombre} no existe o aún no ha sido creado.")

while 1:
    num = int(input("Que quieres hacer?\n 1. Escribir numeros pares\n 2. Leer archivo\n 3. Salir\n"))
    if num == 1:
        escribir(str(input("Escribe el nombre del archivo que va a contener los numeros pares\n")))
    elif num == 2:
        leer()
    elif num == 3:
        system("cls")
        print("Hasta pronto\n\n o(〃＾▽＾〃)o\n\n")
        msvcrt.getch()     
        break
    else:
        print("Parece ser que ha habido un problema, por favor, eliga un numero que este dentro del rango")
