import { z } from 'zod';

export const checkoutSchema = z.object({
  price_id: z.string().min(1, { message: "L'id du prix est obligatoire" }),
  customer_id: z.string().min(1, { message: "L'id du client est obligatoire" }),
});

export type CheckoutForm = z.infer<typeof checkoutSchema>;
