import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from 'config';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    initializeApp(firebaseConfig);
  }
}
