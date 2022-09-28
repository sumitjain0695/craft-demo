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


