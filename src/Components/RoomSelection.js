import React from 'react'
import { GET_MEETING_ROOMS } from '../Utilities/gqlQueries';
import { useQuery } from '@apollo/client';
import { getAvailableMeetingRooms } from '../Utilities/utils';

const RoomSelection = () => {

    const { loading, error, data } = useQuery(GET_MEETING_ROOMS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error !!(</p>;
    console.log('meeting', data['MeetingRooms'])
    console.log(getAvailableMeetingRooms(data['MeetingRooms']))
    const availableRooms = getAvailableMeetingRooms(data['MeetingRooms'])

  return (
    <div>
        <h2>
            Please Select One of the Free Rooms
        </h2>
        {
            // filter rooms with conditions that no meeting is ongoing rn
            availableRooms.map(room=><section>
                <h3>
                    {room.name}
                </h3>
                <p>
                    {room.building.name}
                </p>
                <p>
                    Floor {room.floor}
                </p>
            </section>)
        }
    </div>
  )
}

export default RoomSelection