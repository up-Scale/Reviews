const convertTime = (reviewDate) => {
    if (reviewDate.includes('hour' || 'hours')){
        let replaced = reviewDate.split(' ')[0] + 'H'
        return replaced;
    }
    else if (reviewDate.includes('day'||'days')){
        let replaced = reviewDate.split(' ')[0] + 'D'
        return replaced;
    }
    else if (reviewDate.includes('week'||'weeks')){
        let replaced = reviewDate.split(' ')[0] + 'W'
        return replaced;
    }
    else if (reviewDate.includes('month'||'months')){
        let replaced = reviewDate.split(' ')[0] + 'M'
        return replaced;
    }
    else {
        return reviewDate;
    }
}

export default convertTime;
