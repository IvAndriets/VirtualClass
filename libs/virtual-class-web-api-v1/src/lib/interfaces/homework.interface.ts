export interface Homework {
  id: string,
  lecture: string,
  mark: number,
  teacher_comment: string,
  owner: string,
  created_at: Date,
  updated_at: Date,
  updated_by: string,
  file: {
    url: string,
    file_name: string
  },
}
