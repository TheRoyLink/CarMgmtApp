import React from 'react';
import * as XLSX from 'xlsx';

// Ejemplo de datos, puedes pasar tus propios datos como prop
const sampleData = [
  { id: 1, marca: 'Toyota', modelo: 'Corolla', año: 2020 },
  { id: 2, marca: 'Honda', modelo: 'Civic', año: 2019 },
  { id: 3, marca: 'Ford', modelo: 'Focus', año: 2021 },
];

const ExportButton = ({ data = sampleData, fileName = 'autos' }) => {
  // Orden de columnas deseado
  const columnsOrder = [
    'fecha',
    'kilometraje',
    'gasolinera',
    'litros',
    'gasto',
    'kmRecorridos',
    'rendimiento',
    'comentarios'
  ];

  // Reordena los datos según el orden de columnas
  const getOrderedData = () => {
    return data.map(row => {
      const orderedRow = {};
      columnsOrder.forEach(col => {
        orderedRow[col] = row[col] || '';
      });
      return orderedRow;
    });
  };

  const exportToExcel = () => {
    const orderedData = getOrderedData();
    const worksheet = XLSX.utils.json_to_sheet(orderedData, { header: columnsOrder });
    XLSX.utils.sheet_add_aoa(worksheet, [columnsOrder.map(col => col.toUpperCase())], { origin: 'A1' });
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  const exportToCSV = () => {
    const orderedData = getOrderedData();
    const worksheet = XLSX.utils.json_to_sheet(orderedData, { header: columnsOrder });
    XLSX.utils.sheet_add_aoa(worksheet, [columnsOrder.map(col => col.toUpperCase())], { origin: 'A1' });
    const csv = XLSX.utils.sheet_to_csv(worksheet);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div style={{ margin: '1rem 0' }}>
      <button onClick={exportToExcel} style={{ marginRight: '1rem' }}>
        Exportar a Excel
      </button>
      <button onClick={exportToCSV}>
        Exportar a CSV
      </button>
    </div>
  );
};

export default ExportButton;
