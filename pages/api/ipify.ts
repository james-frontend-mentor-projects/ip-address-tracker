// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const API_KEY = process.env.API_KEY || "";

export default function (req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const location = req?.query?.location;
  const domain = req?.query?.domain ? `&domain=${req?.query?.domain}` : "";
  const ipAddress = location ? `&ipAddress=${location}` : "";

  const url = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}${ipAddress}${domain}`;

  return fetch(url)
    .then((r) => {
      if (r.status === 200) return r.json();
      throw new Error(`Server returned an error response: ${r.status}`);
    })
    .then((r) => res.status(200).json(r))
    .catch((e) => res.status(400).json({ message: `${e}` }))
    .finally(() => res.end());
}
