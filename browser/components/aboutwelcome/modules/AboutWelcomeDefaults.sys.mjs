/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const lazy = {};

ChromeUtils.defineESModuleGetters(lazy, {
  BrowserUtils: "resource://gre/modules/BrowserUtils.sys.mjs",
});

const MR_ABOUT_WELCOME_DEFAULT = {
  id: "MR_WELCOME_DEFAULT",
  template: "multistage",
  transitions: true,
  screens: [
    {
      id: "AW_CRYFOX_WELCOME",
      content: {
        title: { raw: "Welcome to CryFox" },
        subtitle: { raw: "The browser that puts your privacy first." },
        primary_button: {
          label: { raw: "Next" },
          action: { navigate: true },
        },
      },
    },
    {
      id: "AW_CRYFOX_PRIVACY",
      content: {
        title: { raw: "Privacy First" },
        subtitle: { raw: "No tracking, no data collection." },
        primary_button: {
          label: { raw: "Next" },
          action: { navigate: true },
        },
      },
    },
    {
      id: "AW_CRYFOX_SPEED",
      content: {
        title: { raw: "Blazing Fast" },
        subtitle: { raw: "Optimized for speed." },
        primary_button: {
          label: { raw: "Start Browsing" },
          action: { type: "SET_DEFAULT_BROWSER", navigate: true },
        },
      },
    },
  ],
};

function getDefaults() {
  return Cu.cloneInto(MR_ABOUT_WELCOME_DEFAULT, {});
}

async function prepareContentForReact(content) {
  return content;
}

async function getAttributionContent() {
  return null;
}

export const AboutWelcomeDefaults = {
  getDefaults,
  prepareContentForReact,
  getAttributionContent,
};
