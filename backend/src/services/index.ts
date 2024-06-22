import UserService from "./user-service";
import AuthService from "./auth-service";
import RoleService from "./role-service";
import AdminService from "./admin-service";
import EventService from "./event-service";
import MemberService from "./member-service";
import CommentService from "./comment-service";
import CronJobService from "./cron-job-service";
import CategoryService from "./category-service";
import GeocodingService from "./geocoding-service";
import GeneratorService from "./generator-service";
import StatisticsService from "./statistics-service";
import EventAttendeeService from "./event-attendee-service";
import PendingMemberService from "./pending-member-service";
import {
    roleRepository,
    userRepository,
    adminRepository,
    eventRepository,
    memberRepository,
    commentRepository,
    categoryRepository,
    pendingMemberRepository,
    eventAttendeeRepository
} from "../repositories";

export const geocodingService = new GeocodingService();

export const roleService = new RoleService(
    roleRepository
);

export const commentService = new CommentService(
    commentRepository
);

export const userService = new UserService(
    roleService,
    userRepository
);

export const adminService = new AdminService(
    userService,
    adminRepository
);

export const categoryService = new CategoryService(
    categoryRepository
);

export const generatorService = new GeneratorService(
    adminService,
    categoryService
);

export const memberService = new MemberService(
    userService,
    memberRepository
);

export const eventAttendeeService = new EventAttendeeService(
    eventAttendeeRepository
);

export const eventService = new EventService(
    geocodingService,
    eventAttendeeService,
    eventRepository
);

export const cronJobService = new CronJobService(
    eventService
);

export const statisticsService = new StatisticsService(
    eventService
);

export const pendingMemberService = new PendingMemberService(
    userService,
    pendingMemberRepository
);

export const authService = new AuthService(
    userService,
    memberService,
    pendingMemberService
);