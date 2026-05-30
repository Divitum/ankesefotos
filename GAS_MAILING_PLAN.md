# Implementation Plan: Google Apps Script Mailing

This plan outlines the steps to integrate a Google Apps Script (GAS) backend to handle contact form submissions for the **anke.se.fotos** website. This approach allows the static GitHub Pages site to send emails securely without exposing API keys.

---

## Phase 0: Dedicated System Account (Recommended)
1.  **Create Account:** Set up a new, dedicated Gmail account (e.g., `anke.se.fotos.web@gmail.com`). 
2.  **Purpose:** This account will act as the "sender." It keeps the photographer's personal inbox clean and makes future handover easier.
3.  **Log In:** Use this new account for all steps in Phase 1.

## Phase 1: Google Apps Script Setup (User Action)
1.  **Create Script:** Open [script.google.com](https://script.google.com) while logged into the **new system account** and create a new project named `ankesefotos-backend`.
2.  **Paste Logic:** Replace the default code with a `doPost(e)` function that:
    -   Parses incoming JSON data (name, email, message, etc.).
    -   Sends an email notification using `GmailApp.sendEmail()`.
    -   (Optional) Appends the data to a Google Sheet for lead tracking.
3.  **Deploy as Web App:**
    -   Click **Deploy** > **New Deployment**.
    -   Select **Type:** Web App.
    -   **Execute as:** Me (the new system account email).
    -   **Who has access:** Anyone.
4.  **Capture URL:** Copy the provided **Web App URL** (you will need to give this to me).

---

## Phase 2: Frontend Integration (Gemini Action)
1.  **Update `src/scripts/contact.ts`:**
    -   Replace the `console.log` logic with an asynchronous `fetch()` call to the GAS URL.
    -   Implement "Loading" and "Success/Error" UI states for the submit button.
    -   Handle the redirect behavior common with GAS deployments.
2.  **Validation Check:**
    -   Ensure all form fields (Shoot Type, Location, Date, etc.) are correctly mapped to the payload sent to GAS.

---

## Phase 3: Testing & Handover
1.  **Verification:**
    -   The user (you) will provide the GAS URL.
    -   I will update the code.
    -   You will perform a live test by submitting the form.
2.  **Security Note:**
    -   Ensure the GAS URL is kept private. If the repo is public, we should use an environment variable (though for static GH Pages, the URL will eventually be visible in the client-side JS bundle anyway; GAS handles this by being a "dumb" endpoint).

---

## Next Steps
1.  **Do you want me to provide the specific JavaScript code for the Google Apps Script now?**
2.  **Once you have the Web App URL, paste it here, and I will perform the code updates.**
