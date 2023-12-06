
export type PropertyModel = Partial<{
  firstName: string;
  lastName: string;
  gender: 'male' | 'female' | 'other';
  genderOther?: string;
  age: number;
  emergencyContactNumber: string;
}>;
