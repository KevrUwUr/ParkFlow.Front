import type { ReactNode } from "react";
import { Settings } from "lucide-react";
import { Card, CardContent } from "../ui/card";

interface ParkingLotCardProps {
  name: string;
  address: string;
  currentRate: string;
  capacityLabel: string;
  availableLabel: string;
  onEdit?: () => void;
  rightExtra?: ReactNode;
}

export function ParkingLotCard({
  name,
  address,
  currentRate,
  capacityLabel,
  availableLabel,
  onEdit,
  rightExtra,
}: ParkingLotCardProps) {
  return (
    <Card className="w-full rounded-2xl border border-gray-200 shadow-sm">
      <CardContent className="p-4 sm:p-6 space-y-4">
        {/* Fila superior */}
        <div className="flex items-start justify-between gap-4">
          {/* Info izquierda */}
          <div className="space-y-1">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">
              {name}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">{address}</p>

            <div className="mt-3 space-y-1">
              <p className="text-xs sm:text-sm text-gray-500">Tarifa actual:</p>
              <p className="text-sm sm:text-base font-semibold text-green-600">
                {currentRate}
              </p>
            </div>
          </div>

          {/* Centro: capacidad */}
          <div className="hidden sm:flex flex-col items-center justify-center flex-1">
            <span className="text-xs text-gray-500">Capacidad:</span>
            <span className="text-sm font-semibold text-gray-900">
              {capacityLabel}
            </span>
          </div>

          {/* Derecha: chip disponibles + extra */}
          <div className="flex flex-col items-end gap-2">
            <span className="rounded-full bg-green-50 px-3 py-1 text-xs sm:text-sm font-medium text-green-700">
              {availableLabel}
            </span>
            {rightExtra}
          </div>
        </div>

        {/* Línea inferior tipo botón */}
        <button
          type="button"
          onClick={onEdit}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          <Settings className="h-4 w-4" />
          <span>Editar configuración</span>
        </button>
      </CardContent>
    </Card>
  );
}
