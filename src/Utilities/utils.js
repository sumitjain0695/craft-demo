export const getInfoFromData = (data) => {

}

// converts DD/MM/YYYY HH:MM format to date object
const getDateObjectFromDate = (dateString, timeString) => {
    const dateParts = dateString.split("/");
    return new Date(`${dateParts[1]}/${dateParts[0]}/${dateParts[2]} ${timeString}`)
}

// return list of ongoing meetings
export const getCurrentMeetingsAndOccupiedRooms = (meetings) => {
    const currTime = new Date()
    const currentMeetings =[]
    const occupiedRooms= {}
    meetings.forEach(meeting => {
        const meetingStartDateAndTime = getDateObjectFromDate(meeting.date, meeting.startTime)
        const meetingEndDateAndTime = getDateObjectFromDate(meeting.date, meeting.endTime)
        if(meetingStartDateAndTime<currTime && meetingEndDateAndTime>currTime){
            currentMeetings.push(meeting)
            occupiedRooms[meeting.meetingRoom] = true
        }
    })
    return {currentMeetings, occupiedRooms}
}

export const getAvailableMeetingRooms=(meetingRooms)=>{
   return meetingRooms.filter(room=>{
        const currTime = new Date()
        let isOccupied=false
        room.meetings.forEach(meeting=>{
            const meetingStartDateAndTime = getDateObjectFromDate(meeting.date, meeting.startTime)
        const meetingEndDateAndTime = getDateObjectFromDate(meeting.date, meeting.endTime)
        if(meetingStartDateAndTime<currTime && meetingEndDateAndTime>currTime){
            isOccupied=true
        }
        })
        return !isOccupied
    })
}