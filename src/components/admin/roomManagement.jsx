import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../../config/firebase'
const RoomManagement = () => {
    const [rooms, setRoom] = useState([])
    useEffect(() => {
        console.log("test 1")
        const roomColRef = collection(db, "Rooms")
        console.log(roomColRef)
        const unsubscribe = onSnapshot(roomColRef, (snapshot) => {
            const allRooms = snapshot.docs.map( (doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            console.log("rooms:", allRooms)
            setRoom(allRooms) 
        },
        (error) => {
            console.log("Error:", error)
        }
    )
        return unsubscribe
    },[])

    return (
        <div>
            <h1>Room Management</h1>
            {rooms.map((room) => (<p key={room.id}>{room.roomNumber}</p> ) )}
        </div>
    )
}
export default RoomManagement