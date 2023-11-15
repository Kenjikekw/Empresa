
from os import system
import msvcrt

system("cls")

class Nodo(object):

    def __init__(self, dato, prox=None):
        self.__dato = dato
        self.__prox = prox

    def __str__(self):
        return 'Nodo [' + str(self.__dato) + ']'

    @property
    def dato(self):
        return self.__dato

    @dato.setter
    def dato(self, dato):
        self.__dato = dato

    @property
    def proximo(self):
        return self.__prox

    @proximo.setter
    def proximo(self, prox):
        self.__prox = prox


class ListaCircular(object):

    def __init__(self):
        self.__primero = None

    def agregar(self, dato):
        nuevo_nodo = Nodo(dato)
        if not self.__primero:
            self.__primero = nuevo_nodo
            self.__primero.proximo = self.__primero
        else:
            actual = self.__primero
            while actual.proximo != self.__primero:
                actual = actual.proximo
            actual.proximo = nuevo_nodo
            nuevo_nodo.proximo = self.__primero

    def imprimir(self):
        if not self.__primero:
            return
        actual = self.__primero
        while True:
            print(actual)
            actual = actual.proximo
            if actual == self.__primero:
                break


Playlist = ListaCircular()

Playlist.agregar("TODA LA VIDA - YSY A, ONIRIA")
Playlist.agregar("LUGARES QUE LLEGO - YSY A, QUEVEDO, ONIRIA")
Playlist.agregar("+QUE LA DROGA - YSY A, ONIRIA")
Playlist.agregar("NO DA MÁS - YSY A, DUKI, ONIRIA, YESAN")
Playlist.agregar("COPENHAGUE - YSY A, ONIRIA")
Playlist.agregar("24/7 6.5 - YSY A, JERE KLEIN, ONIRIA")
Playlist.agregar("NUNCA ENTENDEMO - YSY A, ONIRIA")
Playlist.agregar("NO NEGOCIO CON MI ALMA - YSY A, ONIRIA")
Playlist.agregar("LOCO X TU CUERPO - YSY A, LARA91K, ONIRIA")
Playlist.agregar("ASESINO - YSY A, XINA MORA, ONIRIA, CIELOAZUL")
Playlist.agregar("GANAS - YSY A, ONIRIA")


Playlist.imprimir()


msvcrt.getch()     
