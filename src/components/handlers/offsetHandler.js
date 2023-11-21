import counter from "../../store/counter";
import datas from "../../data/consts";


function offSetHandler() {

    const blocHeight = document.querySelector('.slider-content').offsetHeight;
    const blockWidth = document.querySelector('.slider-content').offsetWidth;
    const hexHeight = blocHeight / datas.eventsLength;
    const hexWidth = blockWidth / datas.eventsLength;

    const offsetX = (blockWidth - hexWidth) / (datas.eventsLength - 1);

    const offsetY = (blocHeight - hexHeight) / (datas.eventsLength - 1);

    const x = counter.count * offsetX;
    const y = counter.count >= 0 ? -counter.count * offsetY : -counter.count * offsetY;
    document.querySelector('.slider-content').style.transform = `translate(${x}px ,${y}px )`;

}




export default offSetHandler;