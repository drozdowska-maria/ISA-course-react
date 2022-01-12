export const getForegroundColor = (theme) => {
    if(theme === 'light') {
        return 'blue';
    }
    if(theme === 'orange') {
        return 'darkorange';
    }
    if(theme === 'green') {
        return 'green';
    }
} 

export const getBackgroundColor = (theme) => {
    if(theme === 'light') {
        return 'white';
    }
    if(theme === 'orange') {
        return '#333333';
    }
    if(theme === 'green') {
        return '#333333';
    }
}

