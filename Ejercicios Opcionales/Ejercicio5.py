from os import system 

system("cls")

x = str(input("Escribe una palabra y te cuento las vocales\n"))
print(f"La palabra {x} tiene {x.count('a')} 'a', {x.count('e')} 'e', {x.count('i')} 'i', {x.count('o')} 'o', {x.count('u')} 'u'")