const attachCookies = ({res, token}) => {
    const oneDey = 1000 * 60 * 60 * 24;
    res.cookie('token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneDey),
        secure: process.env.NODE_ENV === 'production'
    });
};

export default attachCookies;