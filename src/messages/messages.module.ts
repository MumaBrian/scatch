/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesRepository } from './mesages.repository';
import { MessagesService } from './messages.service';

@Module({
    controllers: [MessagesController],
    providers: [MessagesService, MessagesRepository],
})
export class MessagesModule {}
