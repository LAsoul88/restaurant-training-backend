import { Request, Response } from 'express'
import { Member } from '../models/Member'

const memberById = async (req: Request, res: Response) => {
  try {
    const member = await Member.findByPk(req.params.id)
    return res.send(member)
  } catch (error) {
    console.log(error)
  }
}

export default {
  memberById
}