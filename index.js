let store = { drivers: [], passengers: [], trips: [] };
let driverId = 0;
let passengerId = 0;
let tripId = 0;
// Driver class:
class Driver {
  // A driver has many trips, and has many passengers through
  // trips.
  constructor(name) {
    // new Driver() - initialized with a name; returns a
    // JavaScript object that has attributes of id, and name
    this.id = ++driverId;
    this.name = name;

    store.drivers.push(this);
  }
  // trips() - returns all of the trips that a driver has taken
  trips() {
      return store.trips.filter(
          function(trip) {
              return trip.driverId === this.id;
          }.bind(this)
      );
  }
  // passengers() - returns all of the passengers that a driver
  // has taken on a trip
}
// Passenger class:
class Passenger {
  constructor(name) {
    // new Passenger() - initialized with a name; returns a
    // JavaScript object that has attributes of id, and name
    this.id = ++passengerId;
    this.name = name;

    store.passengers.push(this);
  }
  // A passenger has many trips, and has many drivers through
  // trips.

  // trips() - returns all of the trips that a passenger has taken
  trips() {
      return store.trips.filter(
          function(trip) {
              return trip.passengerId === this.id;
          }.bind(this)
      );
  }
  // drivers() - returns all of the drivers that has taken a
  // passenger on a trip
}
// Trip class:
class Trip {
  constructor(driver, passenger) {
    // new Trip() - initialized with an instance of driver and an
    // instance of passenger; returns a JavaScript that object has
    // attributes id, driverId, and passengerId
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;

    store.trips.push(this);
  }
  // A trip belongs to a driver and belongs to a passenger.

  // driver() - returns the driver associated with the trip
  // passenger() - returns the passenger associated with the trip
}
