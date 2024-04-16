import miniWeb0 from "./assets/images/objects/progress bar/miniWeb0.png";
import miniWeb1 from "./assets/images/objects/progress bar/miniWeb1.png";
import miniWeb2 from "./assets/images/objects/progress bar/miniWeb2.png";
import miniWeb3 from "./assets/images/objects/progress bar/miniWeb3.png";
import miniWeb4 from "./assets/images/objects/progress bar/miniWeb4.png";
import miniWeb5 from "./assets/images/objects/progress bar/miniWeb5.png";
import miniWeb6 from "./assets/images/objects/progress bar/miniWeb6.png";
import "./ProgressBar.css"

export function ProgressBar({pageNum}: {pageNum: number}): JSX.Element{
    const progressBarWebs = [miniWeb0, miniWeb1, miniWeb2, miniWeb3, miniWeb4, miniWeb5, miniWeb6];
    return(
        
            <img src={progressBarWebs[pageNum - 1]} alt = {progressBarWebs[pageNum - 1].toString()} className = "Progress-Bar"></img>
        
    )
}