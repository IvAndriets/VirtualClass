export interface Lecture {
  id: string;
  active: boolean;
  course: string;
  name: string;
  owner: string;
  description: string;
  created_at: Date;
  due_date: Date;
  files: any[]
  max_grade: number;
  type: 'lab' | 'lecture'
}
