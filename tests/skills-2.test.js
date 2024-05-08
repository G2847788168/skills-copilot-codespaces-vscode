
// Add this line to import the necessary functions from Jest
const { describe, test, expect } = require('@jest/globals');

// import { getTimeAgoDescription } from '../skills-2';
const { getTimeAgoDescription } = require('../skills-2');

describe('getTimeAgoDescription', () => {
    it('should return "today" for the current date', () => {
        const currentDate = new Date();
        const dateString = currentDate.toISOString();
        const result = getTimeAgoDescription(dateString);
        expect(result).toBe('today');
    });

    it('should return "1 day ago" for yesterday', () => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const dateString = yesterday.toISOString();
        const result = getTimeAgoDescription(dateString);
        expect(result).toBe('1 day ago');
    });

    it('should return "1 month ago" for one month ago', () => {
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        const dateString = oneMonthAgo.toISOString();
        const result = getTimeAgoDescription(dateString);
        expect(result).toBe('1 month ago');
    });

    it('should return "1 year ago" for one year ago', () => {
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        const dateString = oneYearAgo.toISOString();
        const result = getTimeAgoDescription(dateString);
        expect(result).toBe('1 year ago');
    });

    it('should return the correct description for a combination of years, months, and days', () => {
        const date = new Date();
        date.setFullYear(date.getFullYear() - 2);
        date.setMonth(date.getMonth() - 3);
        date.setDate(date.getDate() - 5);
        const dateString = date.toISOString();
        const result = getTimeAgoDescription(dateString);
        expect(result).toBe('2 years 3 months 5 days ago');
    });
});
