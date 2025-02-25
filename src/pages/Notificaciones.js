import { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import io from 'socket.io-client';

const serverURL = "https://alegra-679014142115.us-central1.run.app";
const socket = io(serverURL);

export default function NotificacionesTiempoReal() {
  const [compras, setCompras] = useState([]);
  const [platos, setPlatos] = useState([]);
  const [ingredientes, setIngredientes] = useState([]);
  const [estadisticas, setEstadisticas] = useState({ pedidos: "-", enCocina: "-", finalizados: "-" });
  
  useEffect(() => {
    async function fetchData(endpoint, setter) {
      try {
        const response = await fetch(`${serverURL}/${endpoint}`);
          const data = await response.json();
          console.log('Datos', data);
        setter(data);
      } catch (error) {
        console.error(`❌ Error al obtener ${endpoint}:`, error);
      }
    }

      // fetchData("monitoreo-compras", setCompras);
      const setDatos=(data)=>{
          setEstadisticas(data)
          setPlatos(data.platos)
      }
    fetchData("monitoreo-platos", setDatos);
    fetchData("monitoreo-ingredientes", setIngredientes);
    fetchData("monitoreo-compras", setCompras);

    socket.on("compras", (compra) => setCompras((prev) => [compra, ...prev]));
      socket.on("platos", (data) => {
          setDatos(data);
          console.log(data)
    });
    socket.on("ingredientes", (data) => setIngredientes(data));
  }, []);

  async function solicitarPlato() {
    try {
      await fetch(`${serverURL}/nuevoPlato`, { method: "GET" });
    } catch (error) {
      console.error("❌ Error al solicitar el plato:", error);
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-4">Pedidos en Tiempo Real</h1>
      <div className="text-center">
        <Button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md" onClick={solicitarPlato}>
          🚀 Solicitar Nuevo Plato
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <h3 className="text-lg font-semibold">📌 Estado de Pedidos</h3>
          <Table className="w-full border-collapse border border-gray-300 mt-2">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="border border-gray-300 p-2">Pedidos</th>
                <th className="border border-gray-300 p-2">En Cocina</th>
                <th className="border border-gray-300 p-2">Finalizados</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">{estadisticas.pedidos}</td>
                <td className="border border-gray-300 p-2">{estadisticas.enCocina}</td>
                <td className="border border-gray-300 p-2">{estadisticas.finalizados}</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div>
          <h3 className="text-lg font-semibold">🍽️ Últimos Platos</h3>
          <div className="overflow-y-auto max-h-60">
            <Table className="w-full border-collapse border border-gray-300 mt-2">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="border border-gray-300 p-2">Nombre</th>
                  <th className="border border-gray-300 p-2">Fecha en Cocina</th>
                  <th className="border border-gray-300 p-2">Finalizado</th>
                </tr>
              </thead>
              <tbody>
                {platos?.map((plato, index) => (
                  <tr key={index} className="odd:bg-gray-100">
                    <td className="border border-gray-300 p-2">{plato.receta}</td>
                    <td className="border border-gray-300 p-2">{plato.recibidoCocina}</td>
                    <td className="border border-gray-300 p-2">{plato.finalizado}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <h3 className="text-lg font-semibold">Últimas Compras</h3>
          <div className="overflow-y-auto max-h-60">
            <Table className="w-full border-collapse border border-gray-300 mt-2">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="border border-gray-300 p-2">Nombre</th>
                  <th className="border border-gray-300 p-2">Cantidad Vendida</th>
                  <th className="border border-gray-300 p-2">Fecha</th>
                </tr>
              </thead>
              <tbody>
                {compras.map((compra, index) => (
                  <tr key={index} className="odd:bg-gray-100">
                    <td className="border border-gray-300 p-2">{compra.ingrediente}</td>
                    <td className="border border-gray-300 p-2">{compra.quantitySold}</td>
                    <td className="border border-gray-300 p-2">{compra.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">🛒 Ingredientes en Uso</h3>
          <Table className="w-full border-collapse border border-gray-300 mt-2">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="border border-gray-300 p-2">Ingrediente</th>
                <th className="border border-gray-300 p-2">Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {ingredientes.map((ingrediente, index) => (
                <tr key={index} className="odd:bg-gray-100">
                  <td className="border border-gray-300 p-2">{ingrediente.nombre}</td>
                  <td className="border border-gray-300 p-2">{ingrediente.cantidad}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
