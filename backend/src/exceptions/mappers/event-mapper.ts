import HostMapper from "./host-mapper";
import CommentMapper from "./comment-mapper";
import AttendeeMapper from "./attendee-mapper";

class EventMapper {
    public static repoDetailsToServiceDetails(event: any) {
        const { hostId, eventAttendees, categoryId, ...rest } = event;

        return {
            ...rest,
            host: HostMapper.userToHostDto(event.host.user),
            category: event.category.name,
            comments: event.comments.map((comment: any) => CommentMapper.repoToService(comment)),
            attendees: event.eventAttendees.map((eventAttendee: any) => AttendeeMapper.userToAttendeeDto(eventAttendee.member.user))
        };
    }
}

export default EventMapper;