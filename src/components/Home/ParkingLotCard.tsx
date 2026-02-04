import type { ReactNode } from "react";
import { useState, useEffect } from "react";
import { Settings, Check, X, AlertCircle } from "lucide-react";
import { Card, CardContent } from "../ui/card";

interface ParkingLotCardProps {
  id: string;
  name: string;
  address: string;
  currentRate: string;
  capacityLabel: string;
  availableLabel: string;
  onRateUpdate?: (parkingId: string, newRate: string) => void;
  rightExtra?: ReactNode;
}

export function ParkingLotCard({
  id,
  name,
  address,
  currentRate,
  capacityLabel,
  availableLabel,
  onRateUpdate,
  rightExtra,
}: ParkingLotCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editingRate, setEditingRate] = useState(currentRate);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Sincronizar editingRate cuando currentRate cambia desde el padre
  useEffect(() => {
    setEditingRate(currentRate);
  }, [currentRate]);

  // Validar formato de tarifa
  const validateRate = (rate: string): boolean => {
    const trimmed = rate.trim();
    if (!trimmed) {
      setError("La tarifa no puede estar vacía");
      return false;
    }
    // Acepta formatos como: $5000/hora, $5,000/hora, $5000, 5000, etc.
    const ratePattern = /^[$]?[\d,]+(?:[.,]\d+)?(?:\/\w+)?$/;
    if (!ratePattern.test(trimmed)) {
      setError("Formato inválido. Ejemplo: $5,000/hora");
      return false;
    }
    setError("");
    return true;
  };

  const handleSave = () => {
    if (validateRate(editingRate)) {
      onRateUpdate?.(id, editingRate);
      setSuccessMessage("✓ Tarifa actualizada");
      setIsEditing(false);
      setTimeout(() => setSuccessMessage(""), 2000);
    }
  };

  const handleCancel = () => {
    setEditingRate(currentRate);
    setIsEditing(false);
    setError("");
  };

  // Manejar teclas de atajo
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      handleCancel();
    } else if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <Card className="w-full rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-4 sm:p-6 space-y-4">
        {/* Mensaje de éxito */}
        {successMessage && (
          <div className="text-sm font-medium text-green-600 bg-green-50 px-3 py-2 rounded-md animate-fadeOut">
            {successMessage}
          </div>
        )}

        {/* Fila superior */}
        <div className="flex items-start justify-between gap-4">
          {/* Info izquierda */}
          <div className="space-y-1 flex-1">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">
              {name}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">{address}</p>

            <div className="mt-3 space-y-2">
              <p className="text-xs sm:text-sm text-gray-500">Tarifa actual:</p>
              {isEditing ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={editingRate}
                      onChange={(e) => setEditingRate(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className={`px-3 py-2 text-sm font-semibold border rounded-md focus:outline-none focus:ring-2 flex-1 ${
                        error
                          ? "border-red-300 focus:ring-red-500"
                          : "border-green-300 focus:ring-green-500"
                      }`}
                      autoFocus
                      placeholder="Ej: $5,000/hora"
                    />
                    <button
                      onClick={handleSave}
                      className="p-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition-colors"
                      title="Guardar (Enter)"
                      type="button"
                    >
                      <Check className="h-4 w-4" />
                    </button>
                    <button
                      onClick={handleCancel}
                      className="p-2 rounded-md bg-gray-300 text-gray-700 hover:bg-gray-400 transition-colors"
                      title="Cancelar (Esc)"
                      type="button"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                  {error && (
                    <div className="flex items-center gap-1 text-xs text-red-600 bg-red-50 px-3 py-2 rounded">
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-sm sm:text-base font-semibold text-green-600">
                  {currentRate}
                </p>
              )}
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
          onClick={() => setIsEditing(!isEditing)}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          <Settings className="h-4 w-4" />
          <span>{isEditing ? "Cancelar edición" : "Editar configuración"}</span>
        </button>
      </CardContent>
    </Card>
  );
}
