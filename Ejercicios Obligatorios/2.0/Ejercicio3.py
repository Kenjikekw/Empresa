from os import system 

system("cls")

global lista

lista=[]

def Añadir(item):
    if item.isnumeric():
        lista.append(int(item)) 
    else:
        print("Debes ingresar un numero")

def Eliminar():
    Listar()

def Listar():
    for i in range(1,len(lista)):
        print(f"{i}. {lista[i]}")

def Contar(item):
    return

def MedioYMax():
    return


while 1:
    num=int(input("Que quieres hacer?\n 1. Añadir un elemento a la lista\n 2. Eliminar un elemento de la lista\n 3. Listar el contenido\n 4. Contar las apariciones de un número en la lista\n 5. Calcular la media y el máximo de los elementos de la lista\n 0. Terminar\n"))
    if num==1:
        Añadir(input("Escribe que quieres añadir a la lista\n"))
    elif num==2:
        Eliminar()
    elif num==3:
        Listar()
    elif num==4:
        Contar(input("Escribe que numero quieres buscar\n"))
    elif num==5:
        MedioYMax()
    elif num==0:
        break
    else:
        print("Debes elegir un numero de la lista")