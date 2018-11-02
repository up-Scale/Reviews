const convertTime = (reviewDate) => {
    if (reviewDate.includes('hour' ||'hours')){
        let replaced = reviewDate.replace('hour ago'||'hours ago', 'H')
        replaced = replaced.split(' ').join('')
        return replaced;
    }
    else if (reviewDate.includes('day'||'days')){
        let replaced = reviewDate.replace('day ago'||'days ago', 'D')
        replaced = replaced.split(' ').join('')
        return replaced;
    }
    else if (reviewDate.includes('week'||'weeks')){
        let replaced = reviewDate.replace('week ago'||'weeks ago', 'W')
        replaced = replaced.split(' ').join('')
        return replaced;
    }
    else if (reviewDate.includes('month'||'months')){
        let replaced = reviewDate.replace('month ago'||'months ago', 'M')
        replaced = replaced.split(' ').join('')
        return replaced;
    }
    else {
        return reviewDate;
    }
}

export default convertTime;
