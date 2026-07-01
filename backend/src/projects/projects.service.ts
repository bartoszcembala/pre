import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(userId: string, dto: CreateProjectDto) {
    return this.prismaService.project.create({
      data: {
        title: dto.title,
        description: dto.description,
        projectMember: { connect: { id: userId } },
      },
    });
  }

  get(userId: string) {
    return this.prismaService.project.findMany({
      where: {
        projectMemberId: userId,
      },
    });
  }

  getById(userId: string, projectId: string) {
    return this.prismaService.project.findFirst({
      where: {
        id: projectId,
        projectMemberId: userId,
      },
    });
  }
}
