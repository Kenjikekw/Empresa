
/*
using Newtonsoft.Json;

List<planta> facturas = new List<planta>();
        Random random = new Random();


    for (int i = 0; i < 50; i++)
    {
         planta factura = new planta
            {
                fecha = DateTime.Now.AddDays(random.Next(-365, 0)),
                cif = random.Next(100000000, 1000000000).ToString() + (char)random.Next('A', 'Z'),
                nombre = Faker.NameFaker.FirstName(),
                moneda = random.Next(2) == 0 ? "EUR" : "USD", // Asumiendo dos tipos de moneda
                importe = Convert.ToDecimal(Math.Round(random.Next(500, 2000) + random.NextDouble(), 2)),
                importe_iva = Convert.ToDecimal(Math.Round(random.Next(600, 2420) + random.NextDouble(), 2)),
                fecha_cobro = DateTime.Now.AddMinutes(random.Next(-100000, 0)),
                estado = random.Next(2) == 0 ? true : false
            };
            facturas.Add(factura);
    }
        

        // Imprime el contenido de la lista
        foreach (planta b in facturas)
             using (HttpClient cliente = new HttpClient())
        {
            string url = "https://facturasmedac.azurewebsites.net/factura"; // Reemplaza con la URL de tu API

            // Convierte la factura a formato JSON
            string jsonFactura = JsonConvert.SerializeObject(b);

            // Configura el contenido de la solicitud
            HttpContent contenido = new StringContent(jsonFactura, System.Text.Encoding.UTF8, "application/json");

            // Realiza la solicitud POST
            HttpResponseMessage respuesta = await cliente.PostAsync(url, contenido);
              if (respuesta.IsSuccessStatusCode)
            {
                Console.WriteLine("Factura enviada correctamente.");
            }
            else
            {
                Console.WriteLine($"Error al enviar la factura. Código de estado: {respuesta.StatusCode}");
            }

        }
    

    public class planta
    {

        public DateTime fecha { get; set; }
        public string cif { get; set; }
        public string nombre { get; set; }
        public decimal importe { get; set; }
        public decimal importe_iva { get; set; }
        public string moneda { get; set; }
        public DateTime fecha_cobro { get; set; }
        public bool estado { get; set; }
    


        public void to_string()
        {
            Console.WriteLine("('"+fecha+"',"+cif+","+nombre+","+importe+","+importe_iva+","+moneda+",'"+fecha_cobro+"',"+estado+")");
        }
    }
*/