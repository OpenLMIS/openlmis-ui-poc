import { z } from 'zod';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const baseUserFormSchema = z.object({
  username: z.string().min(1).max(255),
  email: z.string().email().optional(),
  firstName: z.string().min(1).max(255),
  lastName: z.string().min(1).max(255),
  jobTitle: z.string().max(255).optional().or(z.literal('')),
  phoneNumber: z.string().max(255).optional().or(z.literal('')),
  enabled: z.boolean(),
  allowNotifications: z.boolean().optional(),
  emailVerified: z.boolean(),
  password: z.string().optional(),
  timezone: z.string().optional().or(z.literal('')),
  homeFacilityId: z.string().optional().or(z.literal('')),
});

export type BaseUserFormData = z.infer<typeof baseUserFormSchema>;
