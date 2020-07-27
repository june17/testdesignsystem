import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Menu, MenuItem, Card, CardActions, CardContent, Button, Typography, CardHeader, Avatar, IconButton, CardMedia } from '@material-ui/core'
import { Share } from '@material-ui/icons'

const useStyles = makeStyles({
    root: {
        maxWidth: 375
    },
    media: {
        height: 200,
    },
    cardTitle: {
        minHeight: 60
    },
    buttonColor: {
        color: props => (props.available ? "blue" : "gray")
    }

})

const ProductCard = (props) => {
    const classes = useStyles(props)
    const { loading, avatarSrc, fullname, company, imageSrc, product, available } = props
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const loadingCard = (
        <Card className={classes.root}>
            <CardHeader className='loading-item'
                avatar={<Avatar className="glow-text"></Avatar>}
                title={<div className="glow-text"><span>Loading</span></div>}
                subheader={<div className="glow-text"><span>$10</span></div>}
            />
            <CardMedia className='loading-item'>
                <div className="glow-text">
                    <span>Loading</span>
                </div>
            </CardMedia>
            <CardContent className='loading-item'>
                <Typography className="glow-text" ><span>Loading</span> <span>cooooooooooool</span> <span>state</span></Typography>
            </CardContent>
            <CardActions className='loading-item'>
                <Typography className="glow-text"><span>Loading</span></Typography>
            </CardActions>
        </Card >
    )

    if (loading) {
        return (
            <React.Fragment>
                {loadingCard}
            </React.Fragment>
        )
    }

    return (
        <Card className={classes.root} elevation={1}>
            <Menu
                anchorEl={anchorEl}
                id="share"
                keepMounted
                open={open}
                onClose={handleClose}>
                <MenuItem>Whatsapp</MenuItem>
                <MenuItem>Facebook</MenuItem>
                <MenuItem>LinkedIn</MenuItem>
            </Menu>
            <CardHeader
                avatar={<Avatar src={avatarSrc}> {fullname.slice(0, 1)} </Avatar>}
                action={<IconButton
                    aria-controls="share"
                    aria-label='settings'
                    aria-haspopup="true"
                    onClick={handleClick}><Share /></IconButton>}
                title={fullname}
                subheader={company}
            />
            <CardMedia
                className={classes.media}
                image={imageSrc}
            />
            <CardContent className={classes.cardTitle}>
                <Typography variant='h6'>{product}</Typography>
                {/* <Typography color='textSecondary'>{description}</Typography> */}
            </CardContent>
            <CardActions>
                <Button size='small' className={classes.buttonColor}>ADD TO CART</Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard