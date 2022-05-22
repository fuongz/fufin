import { ConnectionOptions } from 'typeorm'
import * as dotenv from 'dotenv'
import * as fs from 'fs'
const data: any = dotenv.parse(fs.readFileSync(`.env`))

const config: ConnectionOptions = {
  type: 'mysql',
  host: data.DATABASE_HOST,
  port: Number(data.DATABASE_PORT),
  username: data.DATABASE_USER,
  password: data.DATABASE_PASS,
  database: data.DATABASE_NAME,
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  synchronize: false,
  logging: true,
  migrationsRun: true,
  logger: 'file',
  cli: {
    entitiesDir: 'src/models',
    migrationsDir: 'src/migrations',
    subscribersDir: 'src/subscriber',
  },
}

export = config
