export interface Lecture {
  id: string;
  active: boolean;
  name: string;
  owner?: string;
  description: string;
  full_description?: string;
  lectures?: any[];
  students?: any[];
  created_at: Date;
  updated_at: Date;
}
