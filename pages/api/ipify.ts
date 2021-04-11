// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const API_KEY = process.env.API_KEY || "";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const location = req?.query?.location;
  const ipAddress = location ? `&ipAddress=${location}` : "&ipAddress=8.8.8.8";

  const url = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}${ipAddress}`;

  return fetch(url)
    .then((r) => {
      if (r.status === 200) return r.json();
      throw new Error(`Server returned an error response: ${r.status}`);
    })
    .then((r) => res.status(200).json(r))
    .catch((e) => res.status(400).json({ message: `${e}` }))
    .finally(() => res.end());
};
