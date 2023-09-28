from os import system
import msvcrt
system("cls")

class Matriz:

    def __init__(self, rows, columns):
        self.rows=rows
        self.columns=columns
        self.matrix= [[3] * columns for _ in range(rows)]
    
    def getNumberRows(self):
        return self.rows
    
    def getNumberColumns(self):
        return self.columns
    
    def setElement(self, x, j, element):
        self.matrix[x][j]=element

    def addMatrix(self, matrix):
        if len(matrix)==len(self.matrix) and len(matrix[0]) == len(self.matrix[0]):
            for i in range(len(self.matrix)):
                for j in range(len(matrix[0])):
                    self.matrix[i][j]+=matrix[i][j]
                    print(self.matrix[i][j],end=" ")
                print()
        else:
            return "\nLas dimensiones de los arrays no coinciden\n"
        
    def multMatrix(self, matrix):
        if len(matrix)==len(self.matrix) and len(matrix[0]) == len(self.matrix[0]):
            for i in range(len(self.matrix)):
                for j in range(len(matrix[0])):
                    self.matrix[i][j]*=matrix[i][j]
                    print(self.matrix[i][j],end="")
                print()
        else:
            return "\nLas dimensiones de los arrays no coinciden\n"
        
matriz = None
        
while 1:
    num = int(input("Que quieres hacer?\n 1. Crear matriz\n 2. Sumar matriz\n 3. Multiplicar matriz\n 4. Salir\n"))
    if num == 1:
        matriz = Matriz(int(input("Escribe el numero de filas que quieres que tenga\n")),int(input("Escribe el numero de columnas que quieres que tenga\n")))
    elif num == 2:
        if matriz is not None:
            matriz.addMatrix(matriz.matrix)
        else:
            print("Todavia no has creado una matriz")
    elif num == 3:
        if matriz is not None:
            matriz.multMatrix(matriz.matrix)
        else:
            print("Todavia no has creado una matriz")
    elif num == 4:
        system("cls")
        print("Hasta pronto\n\n o(〃＾▽＾〃)o\n\n")
        msvcrt.getch()     
        break
    else:
        print("Parece ser que ha habido un problema, por favor, eliga un numero que este dentro del rango")