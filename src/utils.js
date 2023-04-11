import { Snackbar } from "@mui/material";

export const Tost = ({ msg }) => {
    var open = true;

    setTimeout(() => {
        open = false
    }, 6000);

    return <Snackbar
        open={open}
        autoHideDuration={6000}
        message={msg}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
    />
}