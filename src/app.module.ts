import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesController } from './messages/messages.controller';
import { MessagesModule } from './messages/messages.module';
import { MessagesService } from './messages/messages.service';
import { MessagesRepository } from './messages/mesages.repository';

@Module({
  imports: [MessagesModule],
  controllers: [AppController, MessagesController],
  providers: [AppService, MessagesService, MessagesRepository],
})
export class AppModule {}
