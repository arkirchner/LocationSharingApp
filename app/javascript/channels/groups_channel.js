import consumer from "channels/consumer"

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
    console.log("Groups channel received data", data);
  }
});
