import { gql } from '@apollo/client';

export const GET_DETAILS = gql`
    {
        MeetingRooms {
          name
        }
        Buildings {
          name,
          id
        }
        Meetings {
          title,
          startTime,
          endTime,
          date,
          meetingRoom {
            name
          }
        }
      }
`

export const GET_MEETING_ROOMS=gql`
{
    MeetingRooms {
    name
    floor
    building {
    name
    }
    meetings {
    title,
      startTime,
      endTime,
      date
    }
    }
    }
`


