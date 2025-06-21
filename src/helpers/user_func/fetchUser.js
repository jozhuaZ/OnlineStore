
export const fetchUser = async () => {
    try {
        const response = await fetch('http://localhost/store/fetchUser.php');
        

    } catch (error) {
        console.error('ERROR IN fetchUser: ', error);

    }
};