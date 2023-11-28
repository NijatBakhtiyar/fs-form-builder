/**
 * The logger, using `loglevel`.
 * it is 1.1KB minified tiny. console alternative.
 * disable logging in prod.
 * can track error logs in prod.
 * loglevel-plugin-remote - plugin for sending loglevel messages to a remote log
 * server. Colored Prefix emojis can help to identify your own log
 * @see https://www.npmjs.com/package/loglevel
 */
import loglevel from "loglevel";

export { default } from "loglevel";

// TODO: set one for CI and use from .ENV
if (import.meta.env.DEV) {
  loglevel.setLevel(loglevel.levels.DEBUG);
} else {
  loglevel.setLevel(loglevel.levels.SILENT);
}

export const log = (...args: any[]) => {
  loglevel.debug("⚪", ...args);
};

export const info = (...args: any[]) => {
  loglevel.info("🔵", ...args);
};

export const warn = (...args: any[]) => {
  loglevel.warn("🟡", ...args);
};

export const error = (...args: any[]) => {
  loglevel.error("🔴", ...args);
};
