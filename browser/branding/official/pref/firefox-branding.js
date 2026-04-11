/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// This file contains branding-specific prefs.

pref("startup.homepage_override_url", "");
pref("startup.homepage_welcome_url", "about:welcome");
pref("startup.homepage_welcome_url.additional", "");
// Interval: Time between checks for a new version (in seconds)
pref("app.update.interval", 21600); // 6 hours
// Give the user x seconds to react before showing the big UI. default=192 hours
pref("app.update.promptWaitTime", 691200);
// app.update.url.manual: URL user can browse to manually if for some reason
// all update installation attempts fail.
// app.update.url.details: a default value for the "More information about this
// update" link supplied in the "An update is available" page of the update
// wizard.
#if MOZ_UPDATE_CHANNEL == beta
  pref("app.update.url.manual", "https://www.cryfox.org/%LOCALE%/firefox/beta?reason=manual-update");
  pref("app.update.url.details", "https://www.cryfox.org/%LOCALE%/firefox/beta/notes");
  pref("app.releaseNotesURL", "https://www.cryfox.org/%LOCALE%/firefox/%VERSION%beta/releasenotes/?utm_source=firefox-browser&utm_medium=firefox-desktop&utm_campaign=whatsnew");
  pref("app.releaseNotesURL.aboutDialog", "https://www.cryfox.org/%LOCALE%/firefox/%VERSION%beta/releasenotes/?utm_source=firefox-browser&utm_medium=firefox-desktop&utm_campaign=about-dialog");
#elifdef MOZ_ESR
  pref("app.update.url.manual", "https://www.cryfox.org/%LOCALE%/firefox/enterprise?reason=manual-update");
  pref("app.update.url.details", "https://www.cryfox.org/%LOCALE%/firefox/organizations/notes");
  pref("app.releaseNotesURL", "https://www.cryfox.org/%LOCALE%/firefox/%VERSION%/releasenotes/?utm_source=firefox-browser&utm_medium=firefox-desktop&utm_campaign=whatsnew");
  pref("app.releaseNotesURL.aboutDialog", "https://www.cryfox.org/%LOCALE%/firefox/%VERSION%/releasenotes/?utm_source=firefox-browser&utm_medium=firefox-desktop&utm_campaign=about-dialog");
#else
  pref("app.update.url.manual", "https://www.cryfox.org/%LOCALE%/firefox/new?reason=manual-update");
  pref("app.update.url.details", "https://www.cryfox.org/%LOCALE%/firefox/notes");
  pref("app.releaseNotesURL", "https://www.cryfox.org/%LOCALE%/firefox/%VERSION%/releasenotes/?utm_source=firefox-browser&utm_medium=firefox-desktop&utm_campaign=whatsnew");
  pref("app.releaseNotesURL.aboutDialog", "https://www.cryfox.org/%LOCALE%/firefox/%VERSION%/releasenotes/?utm_source=firefox-browser&utm_medium=firefox-desktop&utm_campaign=about-dialog");
#endif
pref("app.releaseNotesURL.prompt", "https://www.cryfox.org/%LOCALE%/firefox/%VERSION%/releasenotes/?utm_source=firefox-browser&utm_medium=firefox-desktop&utm_campaign=updateprompt");

// The number of days a binary is permitted to be old
// without checking for an update.  This assumes that
// app.update.checkInstallTime is true.
pref("app.update.checkInstallTime.days", 63);

// Give the user x seconds to reboot before showing a badge on the hamburger
// button. default=4 days
pref("app.update.badgeWaitTime", 345600);

// Number of usages of the web console.
// If this is less than 5, then pasting code into the web console is disabled
pref("devtools.selfxss.count", 0);

// Disable telemetry
pref("toolkit.telemetry.enabled", false);
pref("toolkit.telemetry.server", "");
pref("toolkit.telemetry.reportingpolicy.firstRun", false);
pref("toolkit.telemetry.prompted", 2);
pref("toolkit.telemetry.rejected", true);
pref("browser.newtabpage.activity-stream.telemetry", false);
pref("extensions.shield-recipe-client.eligible", false);
pref("app.shield.optoutstudies.enabled", false);
pref("datareporting.healthreport.uploadEnabled", false);
pref("datareporting.healthreport.service.enabled", false);
pref("app.reporting.enabled", false);

// Disable Glean
pref("glean.enabled", false);
pref("telemetry.fog.test.localhost_port", -1);

// Disable non-essential features
pref("browser.firefoxView.enabled", false);
pref("browser.firefoxView.next.enabled", false);
pref("browser.vpn_promo.enabled", false);
pref("featureFlags.welcomeScreen", false);
pref("browser.shopping.noticeDismissed", true);
pref("browser.shopping.experience2023.enabled", false);

// Disable Pocket and Discovery Stream
pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
pref("extensions.pocket.enabled", false);

// Disable Firefox Accounts
pref("identity.fxaccounts.enabled", false);
pref("services.sync.enabled", false);
