function delay(ms) {
    console.log("starting delay");
    return new Promise((resolve,reject) => {
        setTimeout(resolve, ms);
});
}

delay(2000).then(() => console.log('Executed after 2 seconds'));