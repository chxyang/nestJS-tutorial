import { PartialType } from '@nestjs/mapped-types';
import { CreateDemoDto } from './create-demo.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDemoDto extends PartialType(CreateDemoDto) {
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  name: string;
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  abbreviation: string;
}
