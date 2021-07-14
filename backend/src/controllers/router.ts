import { Router } from "express";
const mainRouter = Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
mainRouter.get("/:id", async (req: any, res): Promise<void> => {
  const { id } = req.params;

  try {
    const result = await req.db("events").where("care_recipient_id", id);
    res.status(200).json({
      result,
    });
  } catch (error) {
    res.status(400).json("Not Found!");
  }
});

export { mainRouter };
