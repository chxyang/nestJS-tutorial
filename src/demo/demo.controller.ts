import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DemoService } from './demo.service';
import { CreateDemoDto } from './dto/create-demo.dto';
import { UpdateDemoDto } from './dto/update-demo.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Demo } from './entities/demo.entity';

@ApiTags('Demo')
@Controller('demo')
export class DemoController {
  constructor(private readonly demoService: DemoService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'Created Succesfully',
    type: Demo,
    status: 201,
    isArray: false,
  })
  @ApiBadRequestResponse({ status: 400, description: 'Bad Request' })
  create(@Body() createDemoDto: CreateDemoDto) {
    return this.demoService.create(createDemoDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'Get All Data',
    type: Demo,
    status: 200,
    isArray: true,
  })
  @ApiBadRequestResponse({ status: 400, description: 'Bad Request' })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Not Found',
  })
  findAll() {
    return this.demoService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Get Data By Id',
    type: Demo,
    status: 200,
    isArray: false,
  })
  @ApiBadRequestResponse({ status: 400, description: 'Bad Request' })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Not Found',
  })
  findOne(@Param('id') id: string) {
    return this.demoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'Updated Succesfully',
    type: Demo,
    isArray: false,
  })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Not Found',
  })
  update(@Param('id') id: string, @Body() updateDemoDto: UpdateDemoDto) {
    return this.demoService.update(+id, updateDemoDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'Deleted Succesfully',
    status: 200,
    type: Demo,
    isArray: false,
  })
  @ApiBadRequestResponse({ status: 400, description: 'Bad Request' })
  @ApiNotFoundResponse({
    status: 404,
    description: 'Not Found',
  })
  remove(@Param('id') id: string) {
    return this.demoService.remove(+id);
  }
}
