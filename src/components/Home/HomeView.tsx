import { useState } from "react";
import { FaCar } from "react-icons/fa";
import {
  MdOutlineAttachMoney,
  MdOutlineStackedLineChart,
} from "react-icons/md";
import { DashboardCard } from "./DashboardCard";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { DashboardChart } from "./DashboardChart";
import { ParkingLotCard } from "./ParkingLotCard";
import { parkingLots as initialParkingLots } from "@/data/ParkingsData";

export const HomeView = () => {
  const [parkingLots, setParkingLots] = useState(initialParkingLots);

  const handleRateUpdate = (parkingId: string, newRate: string) => {
    setParkingLots((prevLots) =>
      prevLots.map((lot) =>
        lot.id === parkingId ? { ...lot, currentRate: newRate } : lot,
      ),
    );
    console.log(`Tarifa actualizada para ${parkingId}:`, newRate);
  };

  return (
    <div className="flex min-h-screen flex-col p-5 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Dashboard de Parqueaderos</h1>
      <p className="text-lg text-gray-700 mb-6">
        Monitoreo en tiempo real y configuración de tarifas.
      </p>

      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <DashboardCard
          title="Espacios Totales"
          value="330"
          description="107 ocupados"
          icon={<FaCar className="text-blue-500 text-xl" />}
        />

        <DashboardCard
          title="Tasa de Ocupación"
          value="32.4%"
          description="En tiempo real"
          icon={
            <MdOutlineStackedLineChart className="text-green-500 text-xl" />
          }
        />

        <DashboardCard
          title="Ingresos Estimados"
          value="$606,500"
          description="Por hora actual"
          icon={<MdOutlineAttachMoney className="text-green-500 text-xl" />}
        />
      </div>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-lg font-medium">
            Ocupación por Parqueadero
          </CardTitle>
        </CardHeader>
        <CardDescription>
          <div className="w-full aspect-3/1">
            <DashboardChart />
          </div>
        </CardDescription>
      </Card>
      <div className="mt-6 space-y-4">
        {parkingLots.map((lot) => (
          <ParkingLotCard
            key={lot.id}
            id={lot.id}
            name={lot.name}
            address={lot.address}
            currentRate={lot.currentRate}
            capacityLabel={`${lot.capacity} espacios`}
            availableLabel={`${lot.capacity - lot.occupied}/${lot.capacity} disponibles`}
            onRateUpdate={handleRateUpdate}
          />
        ))}
      </div>
    </div>
  );
};
