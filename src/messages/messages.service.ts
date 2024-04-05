/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './mesages.repository';

@Injectable()
export class MessagesService {

    constructor(public messagesRepo: MessagesRepository) { }

    findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    create(content: string) {
        return this.messagesRepo.create(content);
    }
}