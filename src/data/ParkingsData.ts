export interface ParkingLot {
  id: string;
  name: string;
  address: string;
  currentRate: string; // Tarifa actual visible en la card
  capacity: number; // Capacidad total de espacios
  occupied: number; // Espacios ocupados

  // Campos usados por la gráfica
  place: string; // Etiqueta del eje X
  ocupados: number; // Porcentaje de ocupados (0–100)
  disponibles: number; // Porcentaje de disponibles (0–100)
}

export const parkingLots: ParkingLot[] = [
  {
    id: "centro",
    name: "Parqueadero Centro",
    address: "Calle 50 #50-50, Centro",
    currentRate: "$5,000/hora",
    capacity: 85,
    occupied: 40,
    place: "Centro",
    ocupados: 45,
    disponibles: 30,
  },
  {
    id: "poblado",
    name: "Parqueadero Poblado",
    address: "Cra 43A #10-20, El Poblado",
    currentRate: "$6,000/hora",
    capacity: 120,
    occupied: 96,
    place: "Poblado",
    ocupados: 80,
    disponibles: 55,
  },
  {
    id: "estadio",
    name: "Parqueadero Estadio",
    address: "Carrera 70 #48-10, Estadio",
    currentRate: "$4,500/hora",
    capacity: 90,
    occupied: 27,
    place: "Estadio",
    ocupados: 30,
    disponibles: 65,
  },
  {
    id: "laureles",
    name: "Parqueadero Laureles",
    address: "Circular 4 #70-15, Laureles",
    currentRate: "$4,800/hora",
    capacity: 60,
    occupied: 45,
    place: "Laureles",
    ocupados: 75,
    disponibles: 40,
  },
  {
    id: "belen",
    name: "Parqueadero Belén",
    address: "Calle 30 #70-25, Belén",
    currentRate: "$4,200/hora",
    capacity: 80,
    occupied: 20,
    place: "Belén",
    ocupados: 25,
    disponibles: 50,
  },
  {
    id: "bogota",
    name: "Parqueadero Bogotá",
    address: "Cra 7 #72-30, Bogotá",
    currentRate: "$7,000/hora",
    capacity: 150,
    occupied: 135,
    place: "Bogotá",
    ocupados: 90,
    disponibles: 20,
  },
];
