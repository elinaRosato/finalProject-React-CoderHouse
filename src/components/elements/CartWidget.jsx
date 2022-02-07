import { IconButton, Badge } from '@material-ui/core';

const CartWidget = () => {
    return (
        <IconButton>
            <Badge badgeContent={4}>
                <img src="https://img.icons8.com/ios/50/000000/shopping-basket-2.png"/>
            </Badge>
        </IconButton>
    )
}

export default CartWidget;