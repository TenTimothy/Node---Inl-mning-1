const resourceNotFound = (req, res, next) => {
    const { method, originalUrl } = req;
    next( new Error(`Cannot use ${method} at resourse ${originalUrl}, endpoint dose not exist`)
    );
}

export default resourceNotFound;