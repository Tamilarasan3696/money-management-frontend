import LogoutIcon from '@mui/icons-material/Logout';
import { AppBar, Avatar, Button, Card, CardContent, Dialog, DialogContent, DialogTitle, Grid, IconButton, ListItem, ListItemAvatar, ListItemText, TextField, Toolbar, Typography } from '@mui/material';
import { makeStyles } from "@mui/styles";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import moment from "moment";
import React from 'react';
import { Chart } from "react-google-charts";
import { Tost } from './utils';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "6%"
    },
    card: {
        marginTop: 10,
        boxShadow: '0px 0px 29px #0000004d !important',
        height: '270px',
        display: "flex",
        width: "100%",
        borderRadius: 20
    },
    cards: {
        borderRadius: 20,
        height: '270px',
        boxShadow: '0px 0px 29px #0000004d !important',
    }
}))

export const Home = props => {
    var decoded = jwt_decode(localStorage.getItem('token'));

    const classes = useStyles();
    const [open, setOpen] = React.useState(false)
    const [salary, setsalary] = React.useState('')
    const [tost, setTost] = React.useState('')
    const [expanse, setexpanse] = React.useState({
        food: "",
        loan: "",
        fuel_office: "",
        fuel_personal: "",
        _id: "",
    });

    const [salatyDisplay, setsalatyDisplay] = React.useState({
        data: "",
        _id: "",
        date: ""
    });

    const handleChange = (k, v) => {
        setexpanse({
            ...expanse,
            [k]: v
        })
    }

    const handleModel = () => {
        setOpen(!open)
    }

    const data = [
        ["Task", "amount"],
        ["Fuel Office", expanse?.fuel_office ? JSON.parse(expanse?.fuel_office ?? '0') : 0],
        ["Fuel Personal", expanse?.fuel_personal ? JSON.parse(expanse?.fuel_personal ?? '0') : 0],
        ["Food", expanse?.food ? JSON.parse(expanse?.food ?? '0') : 0],
        ["Loan", expanse?.loan ? JSON.parse(expanse?.loan ?? '0') : 0],
    ];

    const options = {
        title: "Expenses",
        is3D: true,
    };
    const datachart = [
        ["Year", "Salary"],
        ["2023", salatyDisplay?.data ? salatyDisplay?.data : 0]
    ];

    const optionschart = {
        title: "Salary Management",
        is3D: true,
    };

    const getSalary = async () => {
        await axios.post('https://moneymanagement.onrender.com/api/get-salary', {
            user_id: decoded?.user_id ?? "",
        },
            {
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(res => {
                setsalatyDisplay({
                    data: res?.data?.salary ?? 0,
                    _id: res?.data?._id,
                    date: res?.data?.updatedAt
                })
            });
    };
    const getExpanse = async () => {
        await axios.post('https://moneymanagement.onrender.com/api/get-expanse', {
            user_id: decoded?.user_id ?? "",
        },
            {
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(res => {
                setexpanse({
                    food: res?.data?.food ?? 0,
                    loan: res?.data?.loan ?? 0,
                    fuel_office: res?.data?.fuel_office ?? 0,
                    fuel_personal: res?.data?.fuel_personal ?? 0,
                    _id: res?.data?._id ?? 0,
                })
            });
    };

    React.useEffect(() => {
        getSalary();
        getExpanse();
    }, [])

    const addSalary = () => {
        axios.post('https://moneymanagement.onrender.com/api/add-salary', {
            user_id: decoded?.user_id ?? "",
            salary: salary,
            _id: salatyDisplay?._id ?? "",
        },
            {
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(res => {
                getSalary()
                setsalary('')
                return setTost('Salary added successfully.!')
            });
    }

    const saveExpanse = () => {
        axios.post('https://moneymanagement.onrender.com/api/add-expanse', {
            user_id: decoded?.user_id ?? "",
            ...expanse
        },
            {
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(res => {
                getExpanse();
                handleModel();
                return setTost('Expanse added successfully.!')
            });
    }

    return <div className={classes.root}>
        {tost &&
            <Tost msg={tost} />
        }
        <AppBar position="absolute">
            <Toolbar>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                >
                    Money Management
                </Typography>
                <div style={{ flexGrow: 1 }}></div>
                <IconButton
                    color="inherit"
                >
                    <LogoutIcon onClick={() => {
                        localStorage.clear()
                        window.location.href = '/'
                    }} />
                </IconButton>
            </Toolbar>
        </AppBar>
        <TextField placeholder='Add Income' size='small' value={salary}
            onChange={e => setsalary(e.target.value)} />&nbsp;
        <Button color='primary' variant="contained"
            onClick={() => addSalary()}>Add Income</Button>&nbsp;
        <Button color='primary' variant="contained"
            onClick={() => handleModel()}>Add Expenses</Button>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Card className={classes.card}>
                    <Typography component="p" variant="h4" sx={{ margin: "auto", fontSize: 18 }}>
                        Welcome To Mr / Ms <span style={{
                            textTransform: "uppercase", fontSize: 24, fontWeight: 600
                        }}>{decoded?.name}</span>
                    </Typography>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.card}>
                    <CardContent sx={{ margin: "auto" }}>
                        <Typography>Salary Statement</Typography>
                        <Typography component="p" variant="h4">
                            $ {salatyDisplay?.data}
                        </Typography>
                        <Typography color="text.secondary" sx={{ flex: 1 }}>
                            on {moment(salatyDisplay?.date).format('MMM DD, YYYY')}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.card}>
                    <Chart
                        chartType="PieChart"
                        data={data}
                        options={options}
                        width={"100%"}
                        height={"100%"}
                    />
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.cards}>
                    {[
                        {
                            name: "Food",
                            value: expanse.food,
                            img: "data:image/jpeg;base64,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",
                        },
                        {
                            name: "Loan",
                            value: expanse.loan,
                            img: "data:image/jpeg;base64,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"
                        }, {
                            name: "Fuel Office",
                            value: expanse.fuel_office,
                            img: "data:image/jpeg;base64,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"
                        }, {
                            name: "Fuel Personal",
                            value: expanse.fuel_personal,
                            img: "data:image/jpeg;base64,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"
                        }
                    ]?.map(v => (
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar src={v?.img} />
                            </ListItemAvatar>
                            <ListItemText primary={v?.name} secondary={`$ ${v?.value}`} />
                        </ListItem>
                    ))}
                </Card>
            </Grid>
            <Grid item xs={8}>
                <Card className={classes.cards}>
                    <Chart
                        chartType="PieChart"
                        data={datachart}
                        options={optionschart}
                        width={"100%"}
                        height={"100%"}
                    />
                </Card>
            </Grid>
        </Grid>

        <Dialog
            open={open}
            onClose={handleModel}
        >
            <DialogTitle>Expenses Details</DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField fullWidth placeholder='Food' size='small' value={expanse.food}
                            onChange={e => handleChange('food', e.target.value)} />
                        <TextField fullWidth placeholder='Loan' size='small' value={expanse.loan}
                            onChange={e => handleChange('loan', e.target.value)} />

                        <TextField fullWidth placeholder='Fuel Office' size='small' value={expanse.fuel_office}
                            onChange={e => handleChange('fuel_office', e.target.value)} />

                        <TextField fullWidth placeholder='Fuel Personal' size='small' value={expanse.fuel_personal}
                            onChange={e => handleChange('fuel_personal', e.target.value)} />
                    </Grid>
                </Grid>
                <Button color='primary' variant="contained"
                    onClick={() => saveExpanse()}>Save</Button>
            </DialogContent>
        </Dialog>
    </div>
}