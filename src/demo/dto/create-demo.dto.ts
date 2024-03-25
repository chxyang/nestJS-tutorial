import { ApiPropertyOptional } from "@nestjs/swagger";

export class CreateDemoDto {
    @ApiPropertyOptional({
        type: Number,
        description: 'This is an optional property',
    })
    id: number;
    
    @ApiPropertyOptional({
        type: String,
        description: 'This is a required property',
    })
    name: string;
    
    @ApiPropertyOptional({
        type: String,
        description: 'This is a required property',
    })
    abbreviation: string;
}
