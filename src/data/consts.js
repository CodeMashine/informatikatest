import eventsStore from "./eventsStore"


const middle = Math.floor(eventsStore.length / 2);


const datas = {
    eventsLength: eventsStore.length,
    eventsMiddle: middle,
    eventLast: eventsStore.length - 1,
    eventFirst: 0,
}

export default datas;