import { Box, Button } from "@mui/joy";
import "./style.scss"
import { MouseEventHandler } from "react";

interface IProps{
    hour?:string,
    minute?:string,
    event?:MouseEventHandler<HTMLAnchorElement> | undefined
}

export default function Time({
    hour,
    minute,
    event
}:IProps){
    return <Button
        onClick={event}
        color="danger"
        // className="button-animation"
        // sx={{
        // backgroundColor:"transparent",
        // color: "black",
        // borderStyle:"solid",
        // borderColor:"green",
        // borderWidth:0.1,
        // borderRadius:10,
        // "&&:hover":{
        //     backgroundColor:"transparent",
        //     opacity:0.2
        // }}
        // }
        >
        {hour}:{minute} - {hour}:{minute}
    </Button>
}