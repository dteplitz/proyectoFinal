import { z } from "zod/v4";

// Schema de Zod sirve para validar datos en tiempo de ejecución
// Se pueden agregar más validaciones y restricciones
// las comparten el front y el back sin tener que duplicar código.
export const RetirementPlanSchema = z.strictObject({
  duration: z.int().min(0).max(100),
  initialAmount: z.number().min(0).max(10000000),
  expectedReturnRate: z.number().min(0).max(100),
  monthlyContribution: z.number().min(0).max(1000000),
});

// Tipo TypeScript inferido automáticamente desde el schema.
export type RetirementPlan = z.infer<typeof RetirementPlanSchema>;

export type SimulationResult = {
  year: number;
  totalAmount: number;
  contributions: number;
  interest: number;
};
