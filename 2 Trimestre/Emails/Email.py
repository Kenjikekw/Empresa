from os import system
import sqlite3
import re

system("cls")

# Conexión a la base de datos (creará la base de datos si no existe)
conn = sqlite3.connect('email_counts.sqlite')
cur = conn.cursor()

# Borrar la tabla si existe
cur.execute('DROP TABLE IF EXISTS Counts')

# Crear la tabla Counts
cur.execute('''
CREATE TABLE Counts (org TEXT, count INTEGER)''')

# Pedir al usuario el nombre del archivo
fname = input('Introduce el nombre del archivo:\n')
if len(fname) < 1: fname = 'mbox.txt'

try:
    # Abrir el archivo
    with open(fname, 'r') as file:
        # Leer cada línea del archivo
        for line in file:
            # Buscar la línea que contiene la dirección de correo electrónico
            if line.startswith('From: '):
                # Utilizar expresiones regulares para extraer el dominio de la dirección de correo electrónico
                domain = re.findall('@([^ ]+)', line)[0]

                # Actualizar el recuento del dominio en la base de datos
                cur.execute('SELECT count FROM Counts WHERE org = ?', (domain,))
                row = cur.fetchone()
                if row is None:
                    cur.execute('INSERT INTO Counts (org, count) VALUES (?, 1)', (domain,))
                else:
                    cur.execute('UPDATE Counts SET count = count + 1 WHERE org = ?', (domain,))

        # Confirmar los cambios en la base de datos
        conn.commit()

except FileNotFoundError:
    print("El archivo no se pudo encontrar:", fname)

# Mostrar los resultados ordenados por recuento descendente
sqlstr = 'SELECT org, count FROM Counts ORDER BY count DESC'
print("Recuentos de correo electrónico:")
for row in cur.execute(sqlstr):
    print(str(row[0]), row[1])

# Cerrar la conexión a la base de datos
cur.close()
