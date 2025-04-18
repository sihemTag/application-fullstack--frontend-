import { Article } from "./article";
import { User } from "./user";

export interface Comment {
	id: number,
	article: Article,
	user: User,
    commentaire: string,
	createdAt: Date,
	updatedAt: Date
}