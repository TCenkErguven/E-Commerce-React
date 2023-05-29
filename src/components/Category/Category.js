import { Button } from "@mui/material"

export default function Category(props) {
    return (
        <Button variant="contained" margin="dense"
            style={{
                backgroundColor: "#C07F00"
            }}
            sx={{ m: 1 }}>
            {props.item}
        </Button>


    )
}
