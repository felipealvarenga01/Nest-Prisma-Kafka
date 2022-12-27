import { Module } from '@nestjs/common';

import { DatabaseModule } from '@infra/database/database.module';
import { HttpModule } from '@infra/http/http.module';
import { MessagingModule } from '@infra/messaging/kafka/messagin.module';

@Module({
  imports: [DatabaseModule, HttpModule, MessagingModule],
})
export class AppModule {}
