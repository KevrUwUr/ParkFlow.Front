import type { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface DashboardCardProps {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
}

export const DashboardCard = ({
  title,
  value,
  description,
  icon,
}: DashboardCardProps) => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-start justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-3xl font-semibold text-black">{value}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </CardContent>
    </Card>
  );
};
