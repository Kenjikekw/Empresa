# Definición de un gráfo direccional
class Directed_Graph:
    def __init__(self):
        self.graph_dict = {}

     # Añadir un vértice.
    def añadir_vertice(self, v):
        if v in self.graph_dict:
            return "El vertice ya está dentro del gráfo."
        
        self.graph_dict[v] = []

     # Añadir una arista.
    def añadir_arista(self, e):
        v1 = e.get_v1()
        v2 = e.get_v2()

        if v1 not in self.graph_dict:
            raise ValueError(f'Vertice {v1.get_nombre()} no se ha encontrado.')
        if v2 not in self.graph_dict:
            raise ValueError(f'Vertice {v2.get_nombre()} no se ha encontrado')
        
        self.graph_dict[v1].append(v2)

     # Determinar la existencia de un vertice en el mismo gráfo.
    def existe(self,v):
        return v in self.graph_dict
    
    # Devuelve el nombre de un vertice en caso de que exista.
    def get_verice(self, v_name):
        for v in self.graph_dict:
            
            if v_name == v.get_nombre():
                return v
            
        print( f' Vertice {v_name} no existe')

     # Devuelve los vertices vecinos a otro pasado por parámetro.
    def get_vecinos(self, v):
        return self.graph_dict[v]
    
    def __str__ (self):
        all_edges = ''

        for v1 in self.graph_dict:
            for v2 in self.graph_dict[v1]:
                all_edges += v1.get_nombre() + '---->' + v2.get_nombre() + '\n'

        return all_edges        

# Clase unidireccional a un grafo direccional.
class unidireccional_graph(Directed_Graph):
    def cambiar(self,edge):
        Directed_Graph.cambiar(self, edge)
        edge_back = Edge(edge.get_v2(), edge.get_v1())
        Directed_Graph.cambiar(self, edge_back)


# Clase arista.
class Edge:
    def __init__(self,v1,v2):
        self.v1 = v1
        self.v2 = v2

    def get_v1(self):
        return self.v1
    
    def get_v2(self):
        return self.v2
    
    def _str_(self):
        return self.v1.get_nombre() + '---->' + self.v2.get_nombre()
    

# Clase Vertice.
class Vertex:
    def __init__(self, name):
        self.name = name

    def get_nombre(self):
        return self.name
    
    def __str__(self):
        return self.name
    


# Creación de un grafo.
def construir_graph(graph):
    g = graph()
    for v in ('s','a','b','c','d','e','f','g','h','i'):
        g.añadir_vertice(Vertex(v))
    g.añadir_arista(Edge(g.get_verice('s'), g.get_verice('a')))
    g.añadir_arista(Edge(g.get_verice('s'), g.get_verice('b')))
    g.añadir_arista(Edge(g.get_verice('s'), g.get_verice('c')))
    g.añadir_arista(Edge(g.get_verice('s'), g.get_verice('d')))
    g.añadir_arista(Edge(g.get_verice('a'), g.get_verice('e')))
    g.añadir_arista(Edge(g.get_verice('a'), g.get_verice('f')))
    g.añadir_arista(Edge(g.get_verice('s'), g.get_verice('g')))
    g.añadir_arista(Edge(g.get_verice('g'), g.get_verice('h')))
    g.añadir_arista(Edge(g.get_verice('f'), g.get_verice('i')))
        

    return g


# Programa principal
grafo = construir_graph(Directed_Graph)
print(grafo)