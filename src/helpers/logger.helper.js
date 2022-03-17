const fakeSentry = { captureException: () => {} };

/**
 * Fake implementation of a third-party logger for
 * intercepting errors in production: **Sentry**, **Datadog**...
 */
const smartyLogger = {
  log: (error) => {
    fakeSentry.captureException(error);
  }
}

module.exports = { smartyLogger };