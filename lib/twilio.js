import twilio from 'twilio';

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const NUMBERS = [process.env.TWILIO_PHONE_1, process.env.TWILIO_PHONE_2];
let index = 0;
const len = NUMBERS.length;

function pickFrom() {
  index += 1;

  if (index >= len) {
    index = 0;
  }

  return NUMBERS[index];
}

export function sendMessage(body, to) {
  return client.messages.create({
    body,
    from: pickFrom(),
    to,
  });
}
