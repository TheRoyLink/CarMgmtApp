
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
    <div>
      <NavBar />
      <MainContent />
    </div>
  );
}
export default App;

