import { IsString } from 'class-validator'

export class CreateCoffeeDto {
  @IsString()
  public readonly name: string;

  @IsString()
  public readonly brand: string;

  @IsString({ each: true })
  public readonly flavors: string[];
}
