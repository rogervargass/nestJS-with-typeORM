import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateSupplyDto } from 'src/dtos/supply/createSupply.dto';
import { SupplyService } from 'src/services/supply/supply.service';

@Controller('supply')
export class SupplyController {
  constructor(private readonly supplyService: SupplyService) {}

  @Post()
  createSupply(@Body() createSupplyDto: CreateSupplyDto) {
    const { driverCpf, fuel, liters } = createSupplyDto;
    return this.supplyService.createSupply(driverCpf, fuel, parseInt(liters));
  }

  @Get()
  listAllSupplies() {
    return this.supplyService.listAllSupplies();
  }
}
