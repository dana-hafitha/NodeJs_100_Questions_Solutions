function safe(func) {
    return async (...inputs) => {
        try {
            const data = await asyncFn(...args);
            return [null, data];
        } catch (err) {
            return [err, null];
        }
    };
}

safe(func);