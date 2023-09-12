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
      return `Purchase successful`;
    }
    // Display ticket details in the "ticket" modal
    displayDetails() {
      // Get the elements in the "ticket" modal
      const usernameElement = document.getElementById("username");
      const eventGalleryElement = document.getElementById("eventGallery");
      const eventNameElement = document.getElementById("eventN");
      const eventTNoElement = document.getElementById("eventTNo");
      const eventDateElement = document.getElementById("eventDate");
      const eventPriceElement = document.getElementById("eventPrice");

      // Set the innerText of the elements with the ticket details
      if (usernameElement) usernameElement.innerText = this.userName;
      if (eventGalleryElement) eventGalleryElement.innerText = this.galleryName;
      if (eventNameElement) eventNameElement.innerText = this.eventName;
      if (eventTNoElement) eventTNoElement.innerText = this.ticketNo;
      if (eventDateElement) eventDateElement.innerText = this.eventDate;
      if (eventPriceElement) eventPriceElement.innerText = this.price;
    }
  }

  // Function to handle the "Buy" button click for event one
  function eventOne() {
    // Create an instance of TicketDetails and set event one details
    const ticket = new TicketDetails();
    ticket.userName = prompt("WHAT IS YOUR FULL NAME?").toUpperCase();
    ticket.galleryName = "ZEITZ MOCCA MUSEUM";
    ticket.eventName = "AFRICA WEDNESDAY";
    ticket.ticketNo = "ZMC234123";
    ticket.eventDate = "2023-09-15";
    ticket.price = "FREE";

    alert(ticket.ticketSuccessful());
    // Display event one details in the "ticket" modal
    ticket.displayDetails();
  }
  document.getElementById("eventOneButton").addEventListener("click", eventOne);

  // Function to handle the "Buy" button click for event two

  function eventTwo() {
    // Create an instance of TicketDetails and set event two details
    const ticket = new TicketDetails();
    ticket.userName = prompt("WHAT IS YOUR FULL NAME?").toUpperCase();
    ticket.galleryName = "Art B Gallery";
    ticket.eventName = "PAUSE EXHIBITION";
    ticket.ticketNo = "ABG59668";
    ticket.eventDate = "2023-09-27";
    ticket.price = "R650.00";

    alert(ticket.ticketSuccessful());
    // Display event two details in the "ticket" modal
    ticket.displayDetails();
  }

  document.getElementById("eventTwoButton").addEventListener("click", eventTwo);

  // Function to handle the "Buy" button click for event three

  function eventThree() {
    // Create an instance of TicketDetails and set event three details
    const ticket = new TicketDetails();
    ticket.userName = prompt("WHAT IS YOUR FULL NAME?").toUpperCase();
    ticket.galleryName = "EVERARD READ FRANSCHHOEK";
    ticket.eventName = "WHAT I FEEL WHEN I THINK ABOUT THE COSMOS EXHIBITION";
    ticket.ticketNo = "ERF822890";
    ticket.eventDate = "2023-10-01";
    ticket.price = "R800";

    alert(ticket.ticketSuccessful());
    // Display event three details in the "ticket" modal

    ticket.displayDetails();
  }

  document
    .getElementById("eventThreeButton")
    .addEventListener("click", eventThree);

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
