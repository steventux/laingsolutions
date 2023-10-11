import type { Handler } from "@netlify/functions";
import fetch from "node-fetch";

const handler: Handler = async function(event) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }

  const requestBody = JSON.parse(event.body) as {
    name: string;
    email: string;
    message: string;
  };

  //automatically generated snippet from the email preview
  //sends a request to an email handler for a subscribed email
  await fetch(`${process.env.URL}/.netlify/functions/emails/contact`, {
    headers: {
      "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET as string,
    },
    method: "POST",
    body: JSON.stringify({
      from: process.env.CONTACT_EMAIL as string,
      to: process.env.CONTACT_EMAIL as string,
      subject: `Contact enquiry from ${requestBody.name} (${requestBody.email})`,
      parameters: {
        name: requestBody.name,
        email: requestBody.email,
        message: requestBody.message,
      },
    }),
  });

  return {
    statusCode: 200,
    body: JSON.stringify("Contact email sent!"),
  };
};

export { handler };

