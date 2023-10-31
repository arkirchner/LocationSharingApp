import consumer from "channels/consumer"

addEventListener("turbo:load", () => {
  const element = document.getElementById("groups-channel")

  if (element !== null) {
    consumer.subscriptions.create("GroupsChannel", {
      connected() {
        console.log("Connected to the groups channel!");
      },
      disconnected() {
        console.log("Disconnected from the groups channel!");
      },
      rejected() {
        console.log("Rejected from the groups channel!");
      },
      received(data) {
        const li = document.createElement("li")
        li.innerHTML = data
        element.append(li);
      }
    });
  }
});
