/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from 'react';
import axios from 'axios'
import { colourMapping } from './colourMapping'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './App.css';

const App = () => {
  const [value, setValue] = useState('')
  const [data, setData] = useState<Record<string, any>[]>([])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    console.log(value)

    const res = await axios.get(`http://localhost:8000/${value}`)

    const parseRes = res.data.result.map((item: any) => JSON.parse(item.payload_as_text))

    const dataTransfrom = parseRes.map((record: any) => {
      const dataTransformed: Record<string, any> = {}

      dataTransformed.care_recipient_id = record.care_recipient_id
      dataTransformed.caregiver_id = record.caregiver_id
      dataTransformed.id = record.id
      dataTransformed.event_type = record.event_type
      dataTransformed.visit_id = record.visit_id
      dataTransformed.timestamp = record.timestamp
      dataTransformed.unique = { ...record }

      delete dataTransformed.unique.care_recipient_id
      delete dataTransformed.unique.caregiver_id
      delete dataTransformed.unique.id
      delete dataTransformed.unique.event_type
      delete dataTransformed.unique.visit_id
      delete dataTransformed.unique.timestamp
      delete dataTransformed.unique.navigation
      delete dataTransformed.unique.screenProps

      return dataTransformed

    })

    setData(dataTransfrom)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const nested = (record: any) => {
    return Object.entries(record.unique).map(([key, value], i) => {
      if (typeof value !== 'object') {
        return (
          <div key={i} className="flex flex-row container">
            <h4 className="mr-2">{key.split('_').join(' ')}:</h4>
            <div className="overflow-x-auto border border-gray-400 flex-1">
              <h4 className="whitespace-nowrap">{`${value}`}</h4>
            </div>
          </div>
        )
      }
      return ''
    })
  }

  return (
    <div className="container mx-auto pt-7 bg-gray-300">
      <form className="flex justify-center text-xl" onSubmit={handleSubmit}>
        <label htmlFor='search' className='bg-purple-500 rounded-l-xl p-2 text-gray-50'>Enter Care Recipient id: </label>
        <input name='search' className="w-2/4 rounded-l p-2" type="text" value={value || ''} onChange={handleChange} required />
        <input className="rounded-r p-2 text-gray-50 bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50" type="submit" value="Submit!" />
      </form>
      {data.length > 0 ?

        <VerticalTimeline>
          {data.map((item) => {
            return (
              <VerticalTimelineElement
                key={item.id}
                contentStyle={{ borderTopColor: `${colourMapping[item.event_type].colour}`, borderTopWidth: '5px'}}
                contentArrowStyle={{ borderRight: `7px solid  ${colourMapping[item.event_type].colour}` }}
                date={item.timestamp.split('T')[0]}
                iconStyle={{ background: `${colourMapping[item.event_type].colour}`, color: '#fff' }}
                icon={colourMapping[item.event_type].icon()}
              >
                <h3 className="pl-1 mb-6 text-xl">{item.event_type.split('_').join(' ')}</h3>

                <div className="mt-6 ">
                  <div className="rounded-md p-1 mt-6 space-y-1 bg-gray-100">
                    <div>care_recipient_id: {item.care_recipient_id}</div>
                    <div>caregiver_id: {item.id}</div>
                    <div>visit_id: {item.visit_id}</div>
                    <div>caregiver_id: {item.caregiver_id}</div>
                  </div>

                  <div className={`rounded-md p-1 mt-6 m-1space-y-1 ${colourMapping[item.event_type].backgroundColour}`}>
                    {nested(item)}
                  </div>
                </div>
              </VerticalTimelineElement>
            )
          }
          )}
        </VerticalTimeline>
        :
        ''
      }

    </div>
  );
}

export default App;
