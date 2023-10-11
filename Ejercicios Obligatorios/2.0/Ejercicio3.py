from os import system 
import msvcrt

global lista

lista=[]

def Añadir(item):
    if item.isnumeric():
        lista.append(int(item)) 
    else:
        print("Debes ingresar un numero")

def Eliminar():
    Listar()
    lista.pop(int(input("Escribe el numero del valor que quieres eliminar\n")) - 1)

def Listar():
    for i in range(1,len(lista)+1):
        print(f"{i}. {lista[i-1]}")

def Contar(item):
    count = lista.count(item)
    print(f"{item} aparece {count} veces en la lista.")

def MedioYMax():
    medio = sum(lista) / len(lista)
    maxx = max(lista)
    print(f"Media de la lista: {medio}")
    print(f"Valor máximo en la lista: {maxx}")



while 1:
    num=int(input("Que quieres hacer?\n 1. Añadir un elemento a la lista\n 2. Eliminar un elemento de la lista\n 3. Listar el contenido\n 4. Contar las apariciones de un número en la lista\n 5. Calcular la media y el máximo de los elementos de la lista\n 0. Terminar\n"))
    if num==1:
        system("cls")
        Añadir(input("Escribe que quieres añadir a la lista\n"))
        system("cls")
    elif num==2:
        system("cls")
        Eliminar()
        system("cls")
    elif num==3:
        system("cls")
        print("Toca cualquier tecla para continuar:\n")
        Listar()
        msvcrt.getch()
        system("cls")
    elif num==4:
        system("cls")
        Contar(int(input("Escribe que numero quieres buscar\n")))
        print("Toca cualquier tecla para continuar:\n")
        msvcrt.getch()
        system("cls")
    elif num==5:
        system("cls")
        MedioYMax()
        print("Toca cualquier tecla para continuar:\n")
        msvcrt.getch()
        system("cls")
    elif num==0:
        break
    else:
        print("Debes elegir un numero de la lista")