// The address is assembled only when someone clicks, so the full string never appears in the
// page source or this repo, which keeps email-harvesting scrapers from picking it up.
const parts = ["workingdanny33", ["gmail", "com"].join(".")];

export function getEmail() {
  return parts.join(String.fromCharCode(64));
}

export const CV_URL = "/Danny-Liven-CV.pdf";
export const EMAIL_SUBJECT = "Opportunity for Danny Liven";
