
/**
 * The token used to log in.
 */
module.exports.token = 'your token here';

/**
 * The interval. you can either do it like 10000 or 10*1000 where 1000 is a millisecond.
 * I advise you to use 1 second or more since hitting the rate limit on a user account will result in an account deletion
 */
module.exports.interval = 2*1000;

/**
 * The id of the server the bot should retrieve
*/
module.exports.serverId = '507152445248634884';

/**
 * the id of the channel where the bot should send the message
 */
module.exports.channelId = '552782963130105856';

/**
 * The message the bot should send.
 */
module.exports.message = 'Hello world!';