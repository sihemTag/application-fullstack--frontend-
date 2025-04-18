import { User } from "./user";

export interface Article{
     id: number,
     titre: string,
     description: string,
     created_at: Date,
     updated_at: Date,
     owner_id: User,
}

