export interface Link {
  id: string,
  active: boolean,
  use_access_code: boolean,
  access_code: string,
  course_id: string,
  owner: string,
  created_at: Date,
  updated_at: Date
}
