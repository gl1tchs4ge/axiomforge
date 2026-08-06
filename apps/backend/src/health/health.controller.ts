import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';
import { HealthResponseDto } from './dto/health-response.dto';

@Controller('api/v1/health')
export class HealthController {
 constructor(
  private readonly healthService: HealthService,
  ) {}

  @Get()
  getHealth(): HealthResponseDto {
   return this.healthService.getHealth();
  
  }
 }



