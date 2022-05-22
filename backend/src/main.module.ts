import { Module } from '@nestjs/common'

// Config
import { AppConfigModule } from './config'

// App modules
import { AppModule } from './app'

@Module({
  imports: [AppConfigModule, ...AppModule],
})
export class MainModule {}
