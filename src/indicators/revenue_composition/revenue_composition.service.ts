import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { GroupType } from 'src/utils/constants';

@Injectable()
export class RevenueCompositionService {
  constructor(private readonly prismaService: PrismaService) {}

  async iptuComposition(groupType: GroupType, filters?: object) {}
}
