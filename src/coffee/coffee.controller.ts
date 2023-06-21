import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeeController {
    constructor(
      private readonly _coffeeService: CoffeeService
    ) {}

    @Get('flavers')
    findAll(
      @Query() paginationQuery,
      // @Res() response
    ) {
      const {limit, offset} = paginationQuery;
      const response =  this._coffeeService.findAll();
      return response;
      // response.status(200).send(`this action return all coffees. Limmit ${limit}, offset ${offset}`);
    }

    @Get(":id")
    public findOne(
        @Param("id") id: string
    ) {
        const response = this._coffeeService.findOne(id);
        return response;
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    public create(
      @Body() createCoffeeDto: CreateCoffeeDto
    ) {
      console.log( createCoffeeDto instanceof CreateCoffeeDto)
      const response = this._coffeeService.create(createCoffeeDto);
      return response;
    }

    @Patch(":id")
    public update(
      @Param("id") id: string,
      @Body() body: UpdateCoffeeDto
    ) {
      const response = this._coffeeService.update(id, body);
      return response;
    }

    @Delete(":id")
    public remove(
      @Param("id") id: string
    ) {
      const response = this._coffeeService.remove(id);
      return response;
    }
}
