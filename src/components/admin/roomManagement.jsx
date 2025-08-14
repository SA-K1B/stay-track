import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../../config/firebase'

const RoomManagement = () => {
    const [rooms, setRoom] = useState([])
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true)
        const roomColRef = collection(db, "Rooms")
        const unsubscribe = onSnapshot(roomColRef, (snapshot) => {
            const allRooms = snapshot.docs.map( (doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            })
            console.log("rooms:", allRooms)
            setRoom(allRooms)
            setLoading(false) 
        },
        (error) => {
            console.log("Error:", error)
        }
    )
        return unsubscribe
    },[])
    
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-96">
                <div className="text-center">
                    <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading rooms...</p>
                </div>
            </div>
        );
    }
    
    // Get status color for badges
    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'available':
                return 'bg-green-100 text-green-800';
            case 'occupied':
                return 'bg-red-100 text-red-800';
            case 'maintenance':
                return 'bg-yellow-100 text-yellow-800';
            case 'cleaning':
                return 'bg-blue-100 text-blue-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };
    
    return (
        <div className="p-6">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Room Management</h1>
                <p className="text-gray-600">Manage all hotel rooms and their status</p>
            </div>
            
            {/* Rooms Count */}
            <div className="mb-6">
                <p className="text-sm text-gray-600">
                    Total Rooms: <span className="font-semibold text-gray-800">{rooms.length}</span>
                </p>
            </div>
            
            {/* Empty State */}
            {rooms.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                    <div className="text-gray-400 mb-4">
                        <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-1-8h1m-1 4h1" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">No rooms found</h3>
                    <p className="text-gray-600">Add your first room to get started</p>
                </div>
            ) : (
                /* Rooms Grid */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rooms.map((room) => (
                        <div key={room.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                            {/* Room Header */}
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="text-xl font-bold text-gray-800">
                                        Room {room.roomNumber || 'N/A'}
                                    </h2>
                                    <p className="text-gray-600 capitalize text-sm">
                                        {room.type || 'Standard Room'}
                                    </p>
                                </div>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(room.status)}`}>
                                    {room.status || 'Available'}
                                </span>
                            </div>
                            
                            {/* Room Details */}
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">Price per night:</span>
                                    <span className="text-lg font-bold text-gray-800">
                                        ${room.price || '0'}
                                    </span>
                                </div>
                                
                                {room.maxOccupancy && (
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-600">Max occupancy:</span>
                                        <span className="text-sm font-medium text-gray-800">
                                            {room.maxOccupancy} {room.maxOccupancy === 1 ? 'guest' : 'guests'}
                                        </span>
                                    </div>
                                )}
                            </div>
                            
                            {/* Action Buttons */}
                            <div className="flex gap-2 mt-6 pt-4 border-t border-gray-100">
                                <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
                                    Edit
                                </button>
                                <button className="bg-red-600 text-white py-2 px-3 rounded text-sm font-medium hover:bg-red-700 transition-colors">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default RoomManagement