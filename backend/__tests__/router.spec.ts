import app from '../src/application'
import * as request from 'supertest';
import db from '../src/db-test'
import {mocked} from 'ts-jest/utils'

jest.mock('../src/db-test')

const mockedDb = mocked(db, true)

let mockedWhere = jest.fn();

mockedWhere.mockResolvedValue([])

mockedDb.knex.mockReturnValue({ where: mockedWhere })

describe('tests endpoint.',() => {
  it('returns empty for an id with no entry', async () => {

    mockedWhere.mockResolvedValue([])

    const res = await request(app).get('/abc123')
    
      expect(res.status).toEqual(200);
      expect(res.body).toEqual({"result": []});
  })

  it('returns data from database with validID', async (done) => {

    mockedWhere.mockResolvedValue([{caregiver_id: '123asd'}, {caregiver_id: 'asgdakbd3'}])

    const validId = 'df50cac5-293c-490d-a06c-ee26796f850d'

    const res = await request(app).get(`/${validId}`)    
      expect(res.status).toEqual(200);
      expect(res.body.result.length).not.toBeLessThan(0);
      expect(res.body.result[0]).toEqual(expect.objectContaining({ caregiver_id: expect.any(String) }))
      done()
  })


  it('rejects with not found message', async () => {
    mockedWhere.mockRejectedValue(new Error('not found sir!'))
    const res = await request(app).get('/abc')    
      expect(res.status).toEqual(400);
      expect(res.body).toEqual("Not Found!");
  })

});
