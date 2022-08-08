import { DataSource } from 'typeorm'

async function connect (): Promise<DataSource> {
  const AppDataSource = new DataSource({
    type: 'postgres',
    port: 5432,
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'typegraphqldb',
    logging: true,
    synchronize: true,
    entities: ['src/modules/**/database/entities/*.ts']
  })

  await AppDataSource.initialize()

  return AppDataSource
}

export { connect }
