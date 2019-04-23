import moment from 'moment';

function formatHoursAndMinutes(ms: number) {
    const duration = moment.duration(ms);
    return moment.utc(duration.as('milliseconds')).format('HH:mm');
}

function formatSeconds(ms: number) {
    const duration = moment.duration(ms);
    return moment.utc(duration.as('milliseconds')).format('ss');
}

export const exampleCardCore = {
    formatHoursAndMinutes,
    formatSeconds,
};
