from os import system

system("cls")

class Matriz:

    def __init__(self, rows, columns, matrix=[]):
        self.rows=rows
        self.columns=columns
        self.matrix= matrix[rows][columns]
        