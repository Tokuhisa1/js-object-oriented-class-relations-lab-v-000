// Driver class:
class Driver {
  constructor() {
    // new Driver() - initialized with a name; returns a
    // JavaScript object that has attributes of id, and name
  }
  // A driver has many trips, and has many passengers through
  // trips.

  // trips() - returns all of the trips that a driver has taken
  // passengers() - returns all of the passengers that a driver
  // has taken on a trip
}
// Passenger class:
class Passenger {
  constructor() {
    // new Passenger() - initialized with a name; returns a
    // JavaScript object that has attributes of id, and name
  }
  // A passenger has many trips, and has many drivers through
  // trips.

  // trips() - returns all of the trips that a passenger has taken
  // drivers() - returns all of the drivers that has taken a
  // passenger on a trip
}
// Trip class:
class Trip {
  constructor() {
    // new Trip() - initialized with an instance of driver and an
    // instance of passenger; returns a JavaScript that object has
    // attributes id, driverId, and passengerId
  }
  // A trip belongs to a driver and belongs to a passenger.
  
  // driver() - returns the driver associated with the trip
  // passenger() - returns the passenger associated with the trip
}
