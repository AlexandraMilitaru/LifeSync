import asyncHandler from "express-async-handler"
import EventService from "../../services/event-service";
import { Request } from "express";
import { ErrorResponsePayload } from "../../responses/error-response-payload";
import { MessageResponsePayload } from "../../responses/message-response-payload";

interface CreateEventRequest extends Request {
    files: {
        image: Express.Multer.File[],
        gallery: Express.Multer.File[]
    }
}

class EventController {
    private eventService: EventService;

    constructor(eventService: EventService) {
        this.eventService = eventService;
    }

    create = asyncHandler(async (req, res) => {
        const request = req as CreateEventRequest;

        if (!request.files || !request.files.image || request.files.image.length === 0) {
            res.status(400).json(new ErrorResponsePayload('Image is required!'));
            return;
        }

        await this.eventService.create({
            ...request.body,
            hostId: request.user.id,
            imageUri: request.files.image[0].filename,
            gallery: request.files.gallery ? request.files.gallery.map(file => file.filename) : [],
        });

        res.status(201).json(MessageResponsePayload.success('Event was created successfully!'));
    })

    getById = asyncHandler(async (req, res) => {
        const event = await this.eventService.getById(req.params.id);
        res.json(event);
    })

    getAllByDate = asyncHandler(async (req, res) => {
        const date = new Date(req.params.date);
        const events = await this.eventService.getAllExtendedByDate(date);
        res.json({ events });
    })
}

export default EventController;