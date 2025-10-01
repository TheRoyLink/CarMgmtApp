
import './App.css';
import { useState, useEffect } from "react";

import NavBar from './components/NavBar';
import MainContent from './components/MainContent';

function App() {
const [data, setData] = useState(() => {
    const saved = localStorage.getItem("gasData");
    return saved ? JSON.parse(saved) : [];
  });

  const [form, setForm] = useState({
    fecha: "",
    kilometraje: "",
    gasolinera: "",
    litros: "",
    gasto: "",
    kmRecorridos: "",
    comentarios: ""
  });

  useEffect(() => {
    localStorage.setItem("gasData", JSON.stringify(data));
  }, [data]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    const rendimiento =
      form.kmRecorridos && form.litros
        ? (parseFloat(form.kmRecorridos) / parseFloat(form.litros)).toFixed(2)
        : 0;

    setData([
      ...data,
      {
        ...form,
        rendimiento
      }
    ]);

    setForm({
      fecha: "",
      kilometraje: "",
      gasolinera: "",
      litros: "",
      gasto: "",
      kmRecorridos: "",
      comentarios: ""
    });
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🚗 Registro de Gasolina</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 my-4">
        <input name="fecha" type="date" value={form.fecha} onChange={handleChange} className="border p-2 rounded" />
        <input name="kilometraje" placeholder="Kilometraje" value={form.kilometraje} onChange={handleChange} className="border p-2 rounded" />
        <input name="gasolinera" placeholder="Gasolinera" value={form.gasolinera} onChange={handleChange} className="border p-2 rounded" />
        <input name="litros" type="number" placeholder="Litros" value={form.litros} onChange={handleChange} className="border p-2 rounded" />
        <input name="gasto" type="number" placeholder="Gasto $" value={form.gasto} onChange={handleChange} className="border p-2 rounded" />
        <input name="kmRecorridos" type="number" placeholder="Km recorridos" value={form.kmRecorridos} onChange={handleChange} className="border p-2 rounded" />
        <input name="comentarios" placeholder="Comentarios" value={form.comentarios} onChange={handleChange} className="border p-2 rounded col-span-2" />
      </div>

      <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Agregar Registro
      </button>

      <table className="w-full mt-6 border text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Fecha</th>
            <th className="border p-2">Kilometraje</th>
            <th className="border p-2">Gasolinera</th>
            <th className="border p-2">Litros</th>
            <th className="border p-2">Gasto</th>
            <th className="border p-2">Km recorridos</th>
            <th className="border p-2">Rendimiento (km/l)</th>
            <th className="border p-2">Comentarios</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border">
              <td className="border p-2">{row.fecha}</td>
              <td className="border p-2">{row.kilometraje}</td>
              <td className="border p-2">{row.gasolinera}</td>
              <td className="border p-2">{row.litros}</td>
              <td className="border p-2">{row.gasto}</td>
              <td className="border p-2">{row.kmRecorridos}</td>
              <td className="border p-2">{row.rendimiento}</td>
              <td className="border p-2">{row.comentarios}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

