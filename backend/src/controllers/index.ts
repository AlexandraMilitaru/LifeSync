import AuthController from "./auth/auth-controller";
import EventController from "./api/event-controller";
import MemberController from "./api/member-controller";
import CommentController from "./api/comment-controller";
import CategoryController from "./api/category-controller";
import GeocodingController from "./api/geocoding-controller";
import GeneratorController from "./api/generator-controller";
import StatisticsController from "./api/statistics-controller";
import {
    authService,
    eventService,
    memberService,
    commentService,
    categoryService,
    generatorService,
    geocodingService,
    statisticsService
} from "../services";

export const authController: AuthController = new AuthController(authService);
export const eventController: EventController = new EventController(eventService);
export const memberController: MemberController = new MemberController(memberService);
export const commentsController: CommentController = new CommentController(commentService);
export const categoryController: CategoryController = new CategoryController(categoryService);
export const geocodingController: GeocodingController = new GeocodingController(geocodingService);
export const generatorController: GeneratorController = new GeneratorController(generatorService);
export const statisticsController: StatisticsController = new StatisticsController(statisticsService);