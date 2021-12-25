import request from 'supertest'
import { app } from '../app'

// eslint-disable-next-line no-undef
describe('Test PingController', () => {
  // eslint-disable-next-line no-undef
  it('Request /ping should return Pong!', async () => {
    const result = await request(app).get('/ping').send()

    // eslint-disable-next-line no-undef
    expect(result.status).toBe(200)
    // eslint-disable-next-line no-undef
    expect(result.body.data).toBe('Pong!')
  })
})
