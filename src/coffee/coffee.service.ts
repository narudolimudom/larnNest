import { Injectable, HttpException, HttpStatus} from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeeService {
    private coffees: Coffee[] = [{
        id: 1,
        name: 'cof NO.1',
        brand: 'fast coffee',
        flavors: ['chocolate', 'vanilla']
    }];

    public findAll() {
        return this.coffees
    }

    public findOne(id: string) {
      const coffee = this.coffees.find(item => item.id === +id);
      if (!coffee) {
        throw new HttpException(`coffee #${id} not found`, HttpStatus.NOT_FOUND);
      }
      return this.coffees.find(item => item.id === +id);
    }

    public create(createCoffeeDto: any) {
      this.coffees.push(createCoffeeDto)
      return createCoffeeDto
    }

    public update(id: string, updateCoffeeDto: any) {
      const existingCoffee = this.findOne(id);
      if (existingCoffee) {
        //update
      }
    }

    public remove(id: string) {
      const coffeeIndex = this.coffees.findIndex(item => item.id === +id)
        if (coffeeIndex >= 0) {
          this.coffees.splice(coffeeIndex, 1)
        }
    }
}
