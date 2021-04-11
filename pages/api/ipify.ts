// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { API_KEY } from "../../creds";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const location = req?.query?.location;
  const ipAddress = location ? `&ipAddress=${location}` : "&ipAddress=8.8.8.8";

  const url = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}${ipAddress}`;

  fetch(url)
    .then((r) => r.json())
    .then((r) => res.status(200).json(r))
    .catch((e) => res.status(400).json({ message: `${e}` }));
};
