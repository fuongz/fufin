import { Injectable } from '@nestjs/common'

@Injectable()
export class HomeService {
  public index() {
    return { message: 'hello, world!' }
  }
}
