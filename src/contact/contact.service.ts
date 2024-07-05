import { Injectable } from '@nestjs/common';
import { CreateContactDto } from 'src/DTOS/CreateContact.dto';
import { ContactRepository } from './contact.repository';

@Injectable()
export class ContactService {
    constructor(private contactRepository: ContactRepository){}

    getAllContact() {
        return this.contactRepository.getAllContact()
    }
    
    createContact(comm: CreateContactDto) {
        return this.contactRepository.createContact(comm)
    }
}