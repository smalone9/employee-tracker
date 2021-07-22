module.exports = function(obj, ...properties) {
    const errors = [];
    
    properties.forEach(properties => {
        //add errors to array
        if (obj[properties] === undefined || obj[properties] === '') {
            errors.push(`No ${properties} found`);
        }
    });

    if (errors.length) {
        return {
            error: errors.join(' ')
        };
    }
    return null;
}