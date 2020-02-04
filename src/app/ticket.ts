class Ticket {
    bookingId: string;
    ticketNumber: string;
    passengers: Array<Passenger>;
    boardingLocation: string;
    departureLocation: string;
    bookingDate: string;
    travelingDate: string;
    checkIn: boolean;
    email: string;
    name: string;
    lastName: string;
    phone: string;

    Ticket(){

    }

}

class Passenger {
    name: string;
    lastName: string;
    age: number;
    gender: string;
}