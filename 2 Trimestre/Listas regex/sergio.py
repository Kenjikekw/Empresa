lista = []
lista2=[]
#445833
suma = 0
texto = open('regex_sum_42.txt') 
for linea in texto:
    palabras= linea.split()
    for elemento in palabras:
        if elemento.isdigit():
            lista.append(int(elemento))
print(lista)        
file = open("ar.txt")   
for line in file:
    lista2.append(line)
for item,value in zip(lista2,lista):
    print(f"{item} {value}", end="=")
for numero in lista:
    suma=numero + suma
    #print(suma)
