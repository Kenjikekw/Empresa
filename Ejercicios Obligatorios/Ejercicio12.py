from os import system
import msvcrt

system("cls")

class Cuenta:

    def __init__(self, titular, cantidad=0.0):
        self.titular = titular
        self.cantidad = cantidad

    def ingresar(self, cantidad):
        if cantidad > 0:
            self.cantidad += cantidad
        else:
            print("No puedes ingresar una cantidad negativo")
            print("\n\n\nPresiona cualquier tecla para continuar...")
            msvcrt.getch()


    def retirar(self, cantidad):
        if cantidad > 0:
            if self.cantidad - cantidad >= 0:
                self.cantidad -= cantidad
            else:
                self.cantidad = 0
        else:
            print("No puedes ingresar una cantidad negativo")
            print("\n\n\nPresiona cualquier tecla para continuar...")
            msvcrt.getch()

    def get_titular(self):
        return self.titular

    def set_titular(self, titular):
        self.titular = titular

    def get_cantidad(self):
        return self.cantidad

    def set_cantidad(self, cantidad):
        self.cantidad = cantidad

    def __str__(self):
        return f'El titular de la cuenta: {self.titular} tiene una cantidad de: {self.cantidad}'


cuenta = Cuenta(str(input("Ingresa tu nombre\n")))

while 1:
    system("cls")
    num=int(input("Que quieres hacer?\n 1. Ingresar dinero\n 2. Retirar dinero\n 3. Ver cuenta\n 4. Salir\n"))
    if num==1:
        cuenta.ingresar(float(input("Escriba la cantidad a ingresar\n")))
    elif num==2:
        cuenta.retirar(float(input("Escriba la cantidad a retirar\n")))
    elif num==3:
        system("cls")
        print(cuenta)
        print("\n\n\nPresiona cualquier tecla para continuar...")
        msvcrt.getch()
    elif num==4:
        print("Hasta pronto\n\n o(〃＾▽＾〃)o\n\n")
        msvcrt.getch()
        break
    else:
        print("Parece ser que ha habido un problema, por favor, eliga un numero que este dentro del rango")

