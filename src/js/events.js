// SET DATES FOE EVENTS

let event1 = (document.getElementById("frstevent").value = "2023-09-15");
let eventText = event1.innerText;

let event2 = (document.getElementById("scndevent").value = "2023-09-27");
let event2Text = event2.innerText;

let event3 = (document.getElementById("thrdevent").value = "2023-10-01");
let event3Text = event3.innerText;

// TICKET DETAILS

// Define the TicketDetails class to hold ticket details
document.addEventListener("DOMContentLoaded", function () {
  // Define the TicketDetails class to hold ticket details

  class TicketDetails {
    constructor() {
      this.userName;
      this.galleryName;
      this.eventName;
      this.ticketNo;
      this.eventDate;
      this.price;
    }

    ticketSuccessful() {
      return `${this.eventName} Ticket Purchase successful🎉☺️ See you there!`;
    }

    displayDetails() {
      const usernameElement = document.getElementById("username");
      const eventGalleryElement = document.getElementById("eventGallery");
      const eventNameElement = document.getElementById("eventN");
      const eventTNoElement = document.getElementById("eventTNo");
      const eventDateElement = document.getElementById("eventDate");
      const eventPriceElement = document.getElementById("eventPrice");

      if (usernameElement) usernameElement.innerText = this.userName;
      if (eventGalleryElement) eventGalleryElement.innerText = this.galleryName;
      if (eventNameElement) eventNameElement.innerText = this.eventName;
      if (eventTNoElement) eventTNoElement.innerText = this.ticketNo;
      if (eventDateElement) eventDateElement.innerText = this.eventDate;
      if (eventPriceElement) eventPriceElement.innerText = this.price;
    }
  }

  class EventTicket extends TicketDetails {
    constructor(userName, galleryName, eventName, ticketNo, eventDate, price) {
      super();
      this.userName = prompt("What is your full name?").toUpperCase();
      this.galleryName = galleryName;
      this.eventName = eventName;
      this.ticketNo = ticketNo;
      this.eventDate = eventDate;
      this.price = price;
    }
  }

  // Function to handle the "Buy" button click for an event
  function handleEventPurchase(
    userName,
    galleryName,
    eventName,
    ticketNo,
    eventDate,
    price
  ) {
    const ticket = new EventTicket(
      userName,
      galleryName,
      eventName,
      ticketNo,
      eventDate,
      price
    );

    alert(ticket.ticketSuccessful());
    ticket.displayDetails();
  }

  document
    .getElementById("eventOneButton")
    .addEventListener("click", function () {
      handleEventPurchase(
        "",
        "ZEITZ MOCCA MUSEUM",
        "AFRICA WEDNESDAY",
        "ZMC234123",
        "2023-09-15",
        "FREE"
      );
    });

  document
    .getElementById("eventTwoButton")
    .addEventListener("click", function () {
      handleEventPurchase(
        "",
        "Art B Gallery",
        "PAUSE EXHIBITION",
        "ABG59668",
        "2023-09-27",
        "R650.00"
      );
    });

  document
    .getElementById("eventThreeButton")
    .addEventListener("click", function () {
      handleEventPurchase(
        "",
        "EVERARD READ FRANSCHHOEK",
        "WHAT I FEEL WHEN I THINK ABOUT THE COSMOS EXHIBITION",
        "ERF822890",
        "2023-10-01",
        "R800"
      );
    });

  /////// SEARCH BAR /////////////////////////////////////////////

  function performSearch() {
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.trim().toLowerCase();

    // Define events
    const events = [
      {
        galleryName: "Zeitz Mocca gallery",
        eventName: "AFRICA WEDNESDAY",
        eventDate: "2023-09-15",
      },
      {
        galleryName: "Art B Gallery",
        eventName: "PAUSE EXHIBITION",
        eventDate: "2023-09-27",
      },
      {
        galleryName: "Everard Read Franschhoek",
        eventName: "WHAT I FEEL WHEN I THINK ABOUT THE COSMOS EXHIBITION",
        eventDate: "2023-10-01",
      },
    ];

    // Filter events based on the search term
    const filteredEvents = events.filter((event) => {
      const galleryName = event.galleryName.toLowerCase();
      const eventName = event.eventName.toLowerCase();
      const eventDate = event.eventDate.toLowerCase();

      return (
        galleryName.includes(searchTerm) ||
        eventName.includes(searchTerm) ||
        eventDate.includes(searchTerm)
      );
    });

    // Handle displaying the filtered events
    if (filteredEvents.length > 0 && searchInput.value !== "") {
      // Display the filtered events in the UI
      displayFilteredEvents(filteredEvents);
    } else {
      // Handle when no results are found
      handleNoResults();
    }
  }

  // Add an event listener to the search button
  document
    .getElementById("searchButton")
    .addEventListener("click", performSearch);

  // Function to clear existing event details
  function clearEventDetails() {
    // Find the eventListContainer element by its id
    const eventListContainer = document.getElementById("eventListContainer");
    eventListContainer.innerHTML = "";
    searchInput.value = "";
  }

  // get clear element by Id
  let clear = document.getElementById("clearButton");
  clear.addEventListener("click", clearEventDetails);

  // Function to display filtered events
  function displayFilteredEvents(filteredEvents) {
    // Find the eventListContainer element by its id
    const eventListContainer = document.getElementById("eventListContainer");

    // Clear any previous content in the eventListContainer
    eventListContainer.innerHTML = "";

    // Loop through filteredEvents and create event elements
    filteredEvents.forEach((event) => {
      // Create a new event element using document.createElement
      const eventElement = document.createElement("a");
      eventElement.href = "#";
      eventElement.classList.add(
        "bg-darkk",
        "border-dark",
        "text-white",
        "list-group-item",
        "list-group-item-action",
        "d-flex",
        "gap-3",
        "py-3"
      );

      // Create and set the inner HTML for the event element

      eventElement.innerHTML = `
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 id="zeits" class="mb-0">${event.galleryName}</h6>
          <p class="mb-0 opacity-75">
            <span id="eventName">${event.eventName}</span>
          </p>
        </div>
        <small class="text-nowrap">
          <input type="date" id="frstevent" value="${event.eventDate}" />
          <br />
          <button
            type="button"
            class="btn"
            data-bs-toggle="modal"
            data-bs-target="#eventOne"
          >
            BUY TICKET
          </button>
        </small>
      </div>
    `;

      // Append the event element to the eventListContainer
      eventListContainer.appendChild(eventElement);
    });
  }

  // Function to handle when no search results are found
  function handleNoResults() {
    if (searchInput.value === "") {
      alert("Enter an event to search");
    } else {
      alert("No matches found");
    }
  }
});
