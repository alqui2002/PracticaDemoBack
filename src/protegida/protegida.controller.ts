/* eslint-disable prettier/prettier */
import { Controller, Post} from '@nestjs/common';
import { ProtegidaService } from './protegida.service';

@Controller('protegida')
export class ProtegidaController {
  constructor(private readonly protegidaService: ProtegidaService) {}

  @Post('protegida')
  protegida() {
    return 'esto esta protegido';
  }  
}
