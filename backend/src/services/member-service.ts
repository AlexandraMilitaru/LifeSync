import UserService from "./user-service";
import MemberMapper from "../exceptions/mappers/member-mapper";
import MemberRepository from "../repositories/member-repository";
import { Role } from "../enums/role-enum";
import { MemberCreateServiceDto } from "../types/member-types";

class MemberService {
    private userService: UserService;
    private memberRepository: MemberRepository;

    constructor(
        userService: UserService,
        memberRepository: MemberRepository
    ) {
        this.userService = userService;
        this.memberRepository = memberRepository;
    }

    async create(data: MemberCreateServiceDto) {
        const createdUser = await this.userService.create({ ...data, role: Role.Member }, false);
        await this.memberRepository.create({ id: createdUser.id });
    }

    async getById(id: string) {
        return this.memberRepository.findById(id);
    }

    async getAll() {
        const members = await this.memberRepository.findAll();
        return members.map((member) => MemberMapper.repoDetailsToServiceDetails(member));
    }
}

export default MemberService;
