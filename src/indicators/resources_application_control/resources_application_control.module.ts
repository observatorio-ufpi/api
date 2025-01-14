import { Module } from '@nestjs/common';
import { ResourcesApplicationControlService } from './resources_application_control.service';
import { ResourcesApplicationControlController } from './resources_application_control.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ResourcesApplicationControlController],
  providers: [ResourcesApplicationControlService],
})
export class ResourcesApplicationControlModule {}
