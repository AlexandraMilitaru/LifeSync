import { Host } from "./host-types";
import { Image } from "./image-types";
import { Comment } from "./comment-types";
import { Attendee } from "./attendee-types";

export type Event = {
    id: string;
    title: string;
    category: string;
    address: string;
    description: string;
    startDate: string;
    endDate: string | null;
    spent: number;
    imageUri: string;
    gallery: Image[];
    lat: number;
    lng: number;
    host: Host;
}
    & { comments: Comment[] }
    & { attendees: Attendee[] };