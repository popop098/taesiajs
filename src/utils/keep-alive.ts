import fetch from 'node-fetch';
import Log from './log';

let count = 0;

setInterval(async () => {
  try {
    await fetch(process.env.DASHBOARD_URL);
    Log.info(`[${++count}] Kept ${process.env.DASHBOARD_URL} alive.`, 'live');
  } catch {
    Log.error(`[${++count}] Error keeping ${process.env.DASHBOARD_URL} alive.`, 'live');
  }
}, 5 * 60 * 1000);
