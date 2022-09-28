import { useQuery } from '@apollo/client';
import { GET_DETAILS } from '../../Utilities/gqlQueries';
import classes from './landing.module.css'
import { getCurrentMeetingsAndOccupiedRooms } from '../../Utilities/utils';
export const Landing = () => {
    const { loading, error, data } = useQuery(GET_DETAILS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error !!(</p>;
    console.log(data)
    const buildings = (data['Buildings'])
    const meetingRooms = (data['MeetingRooms'])
    const meetings = (data['Meetings'])

    const currentMeetingsAndOccupiedRooms = getCurrentMeetingsAndOccupiedRooms(meetings)
    const ongoingMeetings = currentMeetingsAndOccupiedRooms.currentMeetings
    const freeRooms = meetingRooms.filter(room => !currentMeetingsAndOccupiedRooms.currentMeetings[room])

    return (
        <section className={classes.landingWrapper}>
            <select>
                {
                    buildings.map(building => <option id={building.id} value={building.name}>
                        {building.name}
                    </option>)
                }
            </select>

            <section className={classes.detailsCard}>
                <h2>
                    Buildings
                </h2>
                <p>
                    Total: {buildings.length}
                </p>
            </section>
            <section className={classes.detailsCard}>
                <h2>
                    Rooms
                </h2>
                <p>
                    Total: {meetingRooms.length}
                </p>
                <p>
                    Free Now: {
                        freeRooms.length
                    }
                </p>

            </section>
            <section className={classes.detailsCard}>
                <h2>
                    Meetings
                </h2>
                <p>
                    Total: {meetings.length}
                </p>
                <p>
                    Total {ongoingMeetings.length} ongoing now
                </p>

            </section>
        </section>
    )
}
