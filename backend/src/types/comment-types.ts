import { Comment } from "@prisma/client";

export type CommentCreateRepoDto = Omit<Comment, "id" | "postedAt">;
export type CommentCreateServiceDto = Omit<Comment, "id" | "postedAt">;