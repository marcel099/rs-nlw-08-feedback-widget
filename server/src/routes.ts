import { Router } from "express"
import { container } from "tsyringe";

import { SubmitFeedbackUseCase } from "./useCases/SubmitFeedbackUseCase";

export const routes = Router();

routes.post('/feedback', async (req, res) => {
  const { comment, screenshot, type } = req.body;
  try {

    const submitFeedbackUseCase = container.resolve(SubmitFeedbackUseCase);

    await submitFeedbackUseCase.execute({
      type,
      comment,
      screenshot
    })

    return res.status(201).send();
  } catch(err) {
    console.log(err);

    return res.status(500).send();
  }
})
