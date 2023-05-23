export interface Homework {
  id: string,
  lecture: string,
  mark: number,
  file: {
    // "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    // "url": "string",
    // "file_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    // "file_name": "string",
    // "description": "string",
    // "owner": "user@example.com",
    // "created_at": "2023-05-23T19:10:51.202Z",
    // "updated_at": "2023-05-23T19:10:51.202Z",
    // "updated_by": "user@example.com"
  },
  teacher_comment: string,
  owner: string,
  created_at: Date,
  updated_at: Date,
  updated_by: string
}
