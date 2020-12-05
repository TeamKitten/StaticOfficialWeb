type StringOrDate = string | Date;
type Privilege = 'MEM' | 'EXC' | 'LEA';

export type MemberMD = {
  attributes: MemberAttributes;
  html: string;
};

export type MemberAttributes = {
  bio: string;
  code: number;
  id: number;
  joined_at: StringOrDate;
  leaved_at: StringOrDate | null;
  name: string;
  privilege: Privilege;
  role: string;
};
